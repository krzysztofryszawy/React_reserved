import React, { Component } from 'react';
import Day from './Day/Day';
import { withStyles, withTheme } from '@material-ui/core/styles';

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
  }
});

class Days extends Component {
  state = {
    startHour: 0,
    endHour: 0,
    processing: false
  };

  generate = provided => {
    let temporary = {};
    let item = [];

    for (let i = 0; i <= 23; i++) {


      item[i] = {
        id: i,
        hour: i,
        reserved: false
      };

      temporary = { [provided]: item };
    }
    return temporary;
  };

  //database common for all things
  allDatabaseSingleDay = this.generate(this.props.currentThingId);

  //endpoint only for single current sellected object
  singleDay = this.allDatabaseSingleDay[this.props.currentThingId];

  componentDidMount() {
    console.log(this.singleDay);
    console.log(this.singleDay[0]);
    if (localStorage.getItem('DayInsideStorage')) {
      this.loadDayFromLocalstorage();
      console.log('available data in LocalStorage');
    }
    // else {
    //     this.getSingleCityDatabase(this.state.cityName)
    //         .then(() => this.setState({loading:false}))
    //     }
  }

  //saving to localstorage
  saveDayToLocalstorage = () => {
    localStorage.setItem('DayInsideStorage', JSON.stringify(this.singleDay));
  };

  //loading from localstorage
  loadDayFromLocalstorage = () => {
    const retrievedObject = localStorage.getItem('DayInsideStorage');
    return JSON.parse(retrievedObject);
  };

  addingReservation = () => {
    for (let i = this.state.startHour; i <= this.state.endHour; i++) {
      this.singleDay[i].reserved = true;
      this.singleDay[i].personId = this.props.currentPersonId;
      this.singleDay[i].personName = this.props.currentPersonName;
      this.singleDay[i].thingName = this.props.currentThingName;
    }
    this.setState({});
  };

  clickHandler = clicked => {
    this.state.processing
      ? this.setState(
        {
          endHour:
            clicked.hour > this.state.startHour
              ? clicked.hour
              : this.state.startHour,
          processing: !this.state.processing
        },
        this.addingReservation
      )
      : this.setState(
        {
          startHour: clicked.hour,
          endHour: null,
          processing: !this.state.processing
        },
        () => console.log()
      );
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <p>{'Start Hour ' + this.state.startHour}</p>
        <p>{'End Hour ' + this.state.endHour}</p>
        {this.singleDay.map(el => (
          <Day
            key={el.hour}
            id={el.id}
            hour={el.hour}
            reserved={el.reserved}
            personId={el.personId}
            personName={el.personName}
            clickHandler={this.clickHandler}
          />
        ))}
      </div>
    );
  }
}
export default withStyles(styles)(Days);
