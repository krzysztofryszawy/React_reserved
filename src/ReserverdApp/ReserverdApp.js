import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import { CurrentSettingsConsumer } from '../context/CurrentSettings.context';
import Navbar from '../components/NavBar/NavBar';
import Main from '../components/Main/Main';
import People from '../components/People/People';
import Things from '../components/Things/Things';
import Booking from '../components/Booking/Booking';
import Help from '../components/Help/Help';
import localPeopleDatabase from '../assets/database/localPeopleDatabase.json';
import localThingsDatabase from '../assets/database/localThingsDatabase.json';

let peopleDatabase = localPeopleDatabase;

let thingsDatabase = localThingsDatabase;

const styles = theme => ({});

class ReserverdApp extends Component {
  render() {
    return (
      <CurrentSettingsConsumer>
        {({
          companyName,
          thingType,
          changeThingTypeHandler,
          currentThing,
          changeCurrentThingHandler,
          currentPerson,
          changeCurrentPersonHandler,
          currentPersonId,
          currentThingId
        }) => (
          <React.Fragment>
            <CssBaseline />
            <Navbar
              companyName={companyName}
              themechangeHandler={this.props.themechangeHandler}
            />
            {companyName === 'Select your Company' && <Redirect to={'/'} />}
            <Route path="/" exact component={Main} />
            <Route
              path="/People"
              exact
              render={props => (
                <People
                  companyName={companyName}
                  peopleDatabase={peopleDatabase}
                  currentPersonId={currentPersonId}
                  currentPerson={currentPerson}
                  changeCurrentPersonHandler={changeCurrentPersonHandler}
                />
              )}
            />
            <Route
              path="/Things"
              exact
              render={props => (
                <Things
                  companyName={companyName}
                  thingsDatabase={thingsDatabase}
                  thingType={thingType}
                  changeThingTypeHandler={changeThingTypeHandler}
                  currentThingId={currentThingId}
                  currentThing={currentThing}
                  changeCurrentThingHandler={changeCurrentThingHandler}
                />
              )}
            />
            <Route
              path="/Booking"
              exact
              render={props => (
                <Booking
                  peopleDatabase={peopleDatabase}
                  thingsDatabase={thingsDatabase}
                  companyName={companyName}
                  currentThingId={currentThingId}
                  currentThing={currentThing}
                  currentPersonId={currentPersonId}
                  currentPerson={currentPerson}
                />
              )}
            />
            <Route path="/Help" exact component={Help} />
          </React.Fragment>
        )}
      </CurrentSettingsConsumer>
    );
  }
}

export default withStyles(styles)(ReserverdApp);
