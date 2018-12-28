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

let createDay = () => {
  let array24h = [];
  for (let i = 0; i < 24; i++) {
    array24h[i] = { id: i, hour: i, reserved: false };
  }
  return array24h;
};

let singleDay = createDay();

class Days extends Component {
  state = {
    startHour: 0,
    endHour: 0,
    processing: false
  };

  addingReservation = () => {
    for (let i = this.state.startHour; i <= this.state.endHour; i++) {
      singleDay[i].reserved = true;
      console.log();
    }
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
  content = singleDay.map(el => (
    <Day
      key={el.hour}
      id={el.id}
      hour={el.hour}
      reserved={el.reserved}
      clickHandler={this.clickHandler}
      person={null}
    />
  ));
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <p>{'Start Hour ' + this.state.startHour}</p>
        <p>{'End Hour ' + this.state.endHour}</p>
        {this.content}
      </div>
    );
  }
}
export default withStyles(styles)(Days);
