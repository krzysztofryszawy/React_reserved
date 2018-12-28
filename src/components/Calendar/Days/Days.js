import React, { Component } from 'react';
import Day from './Day/Day';
import { withStyles, withTheme } from '@material-ui/core/styles';
import axios from '../../../axios-instance';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    width: '100%',
    flexGrow: 1,
    textAlign: 'center',
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'stretch',
    alignItems: 'stretch',
    userSelect: 'none'
  },
  inputField: {
    fontSize: '1.5rem'
  }
});

class Days extends Component {
  state = {
    startHour: 0,
    endHour: 0,
    processing: false,
    loading: false,
    singleDay: [],
    reservationDate: new Date().toISOString().substr(0, 10)
  };

  generate = provided => {
    let temporary = {};
    let item = [];

    for (let i = 0; i <= 23; i++) {
      item[i] = {
        id: i,
        hour: i,
        reserved: false
        // reservationDate: null
      };
      temporary = { [provided]: item };
    }
    return temporary;
  };

  saveReservationsHandler = () => {
    axios
      .put(
        `/${this.state.reservationDate}/things/${[
          this.props.currentThingId
        ]}.json`,
        this.state.singleDay
      )
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  getReservationsHandler = () => {
    this.setState({ loading: true });
    axios
      .get(
        `/${this.state.reservationDate}/things/${[
          this.props.currentThingId
        ]}.json`
      )
      .then(response => {
        if (response.data !== null) {
          this.setState({ singleDay: response.data }, () =>
            this.setState({ loading: false })
          );
        } else {
          this.createDay();
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  addingReservation = () => {
    let localSingleDay = this.state.singleDay;
    for (let i = this.state.startHour; i <= this.state.endHour; i++) {
      if (localSingleDay[i].reserved != true) {
        localSingleDay[i].reserved = true;
        localSingleDay[i].personId = this.props.currentPersonId;
        localSingleDay[i].personName = this.props.currentPersonName;
        localSingleDay[i].thingName = this.props.currentThingName;
      } else {
      }
    }
    this.setState({ singleDay: localSingleDay });
    this.saveReservationsHandler();
  };

  removingReservation = () => {
    let localSingleDay = this.state.singleDay;
    for (let i = this.state.startHour; i <= this.state.endHour; i++) {
      localSingleDay[i].reserved = false;
      localSingleDay[i].personId = undefined;
      localSingleDay[i].personName = undefined;
      localSingleDay[i].thingName = undefined;
    }
    this.setState({ singleDay: localSingleDay });
    this.saveReservationsHandler();
  };

  createDay = () => {
    //database common for all things
    const allDatabaseSingleDay = this.generate(this.props.currentThingId);

    //endpoint only for single current sellected object
    let singleDay = allDatabaseSingleDay[this.props.currentThingId];
    this.setState({ singleDay: singleDay }, () =>
      this.setState({ loading: false })
    );
  };

  // handle click and decide what next method should use
  clickHandler = clicked => {
    if (!this.props.currentPersonName) {
      alert('choose person');
      return;
    }
    // if is is second click - second point in range
    if (this.state.processing) {
      this.setState(
        {
          endHour:
            clicked.hour > this.state.startHour
              ? clicked.hour
              : this.state.startHour,
          processing: !this.state.processing
        },
        this.addingReservation
      );
      // if it is first click - initial point in range
    } else {
      // checking if is it not reserved before, then proceed setting state
      switch (clicked.personId) {
        case undefined:
          this.setState(
            {
              startHour: clicked.hour,
              endHour: null,
              processing: !this.state.processing
            },
            () => console.log()
          );
          break;
        // checking if is it reserved before by currentPerson, then remove reservation
        case this.props.currentPersonId:
          this.setState(
            {
              startHour: clicked.hour,
              endHour: clicked.hour,
              processing: false
            },
            this.removingReservation
          );
          break;
        // checking if is it reserved before by any other Person but not currentPerson, then forbiden overwriting
        case !null:
          break;
      }
    }
  };

  changeResevationDate = e => {
    this.setState({ reservationDate: e.target.value });
  };

  componentDidMount() {
    this.getReservationsHandler();
    // this.setDefaultDate();
  }

  componentDidUpdate(prevProps, prevState) {
    //managing database when date changed inside component, there is no props provided
    prevState.reservationDate != this.state.reservationDate &&
      this.getReservationsHandler();
  }

  render() {
    const { classes } = this.props;

    if (this.state.loading) {
      return <div> LOADING</div>;
    }

    return (
      <React.Fragment>
        <TextField
          required
          type="date"
          value={this.state.reservationDate}
          onChange={this.changeResevationDate}
        />
        {/* <p>{'Reservation Date ' + this.state.reservationDate}</p>
        <p>{'Start Hour ' + this.state.startHour}</p>
        <p>{'End Hour ' + this.state.endHour}</p> */}
        <div className={classes.container}>
          {this.state.singleDay.map(el => (
            <Day
              key={el.hour}
              id={el.id}
              hour={el.hour}
              reserved={el.reserved}
              personId={el.personId}
              currentPersonId={this.props.currentPersonId}
              personName={el.personName}
              clickHandler={this.clickHandler}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}
export default withStyles(styles)(Days);
