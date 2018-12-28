import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import { Route, Redirect } from 'react-router-dom';

import { CurrentSettingsConsumer } from '../context/CurrentSettings.context';

import Navbar from '../components/NavBar/NavBar';

import Main from '../components/Main/Main';
import People from '../components/People/People';
import Things from '../components/Things/Things';
import Booking from '../components/Booking/Booking';
import Help from '../components/Help/Help';

// https://react-reserved.firebaseio.com/

let peopleDatabase = [
  {
    id: 1,
    name: 'Vincent Vega',
    company: 'Emerald Forest',
    priority: true,
    icon: '👨',
    img: 'vincentvega'
  },
  {
    id: 2,
    name: 'Jules Winnfield',
    company: 'Emerald Forest',
    priority: false,
    icon: '👨',
    img: 'juleswinnfield'
  },
  {
    id: 3,
    name: 'Mia Wallace',
    company: 'Aviation',
    priority: true,
    icon: '👩',
    img: 'miawallace'
  },
  {
    id: 4,
    name: 'Winston Wolfe',
    company: 'Aviation',
    priority: false,
    icon: '👨',
    img: 'winstonwolfe'
  },
  {
    id: 5,
    name: 'Marsellus Wallace',
    company: 'Aviation',
    priority: true,
    icon: '👨',
    img: 'marselluswallace'
  },
  {
    id: 6,
    name: 'Captain Koons',
    company: 'Greyhound',
    priority: false,
    icon: '👨',
    img: 'captainkoons'
  },
  {
    id: 7,
    name: 'Butch Coolidge',
    company: 'Greyhound',
    priority: false,
    icon: '👨',
    img: 'butchcoolidge'
  }
];

let thingsDatabase = [
  {
    id: 1,
    type: 'car',
    name: 'Ford Focus WE29839',
    company: 'Emerald Forest',
    icon: '🚗',
    img: 'fordfocus'
  },
  {
    id: 2,
    type: 'place',
    name: 'Conference room, Alpha',
    company: 'Emerald Forest',
    icon: '📈',
    img: 'conferenceroom1'
  },
  {
    id: 3,
    type: 'car',
    name: 'Ford Mondeo WE29841',
    company: 'Emerald Forest',
    icon: '🚗',
    img: 'fordmondeo'
  },
  {
    id: 4,
    type: 'equipment',
    name: 'Projector EPSON 4K',
    company: 'Emerald Forest',
    icon: '💻',
    img: 'projector'
  },
  {
    id: 5,
    type: 'car',
    name: 'Ford Focus WE29840',
    company: 'Emerald Forest',
    icon: '🚗',
    img: 'fordfocus'
  },
  {
    id: 6,
    type: 'place',
    name: 'Conference room, Sigma',
    company: 'Emerald Forest',
    icon: '📈',
    img: 'conferenceroom2'
  },
  {
    id: 7,
    type: 'equipment',
    name: 'Projector EPSON',
    company: 'Emerald Forest',
    icon: '💻',
    img: 'projector'
  },
  {
    id: 8,
    type: 'equipment',
    name: 'Projector EPSON',
    company: 'Aviation',
    icon: '💻',
    img: 'projector'
  },
  {
    id: 9,
    type: 'place',
    name: 'Conference room, no.1',
    company: 'Aviation',
    icon: '📈',
    img: 'conferenceroom1'
  },
  {
    id: 10,
    type: 'equipment',
    name: 'Projector EPSON 4K',
    company: 'Aviation',
    icon: '💻',
    img: 'projector'
  },
  {
    id: 11,
    type: 'car',
    name: 'Ford Mondeo GA2544X',
    company: 'Aviation',
    icon: '🚗',
    img: 'fordmondeo'
  },
  {
    id: 12,
    type: 'place',
    name: 'Conference room, no.2',
    company: 'Aviation',
    icon: '📈',
    img: 'conferenceroom2'
  },
  {
    id: 13,
    type: 'equipment',
    name: 'Projector LG',
    company: 'Aviation',
    icon: '💻',
    img: 'projector'
  },
  {
    id: 14,
    type: 'place',
    name: 'Conference room, no.3',
    company: 'Aviation',
    icon: '📈',
    img: 'conferenceroom3'
  },
  {
    id: 15,
    type: 'car',
    name: 'Ford Focus GA2543X',
    company: 'Aviation',
    icon: '🚗',
    img: 'fordfocus'
  },
  {
    id: 16,
    type: 'equipment',
    name: 'Projector EPSON',
    company: 'Greyhound',
    icon: '💻',
    img: 'projector'
  },
  {
    id: 17,
    type: 'car',
    name: 'Opel Astra DWR5572',
    company: 'Greyhound',
    icon: '🚗',
    img: 'opelastra'
  },
  {
    id: 18,
    type: 'place',
    name: 'Conference room, ground floor main',
    company: 'Greyhound',
    icon: '📈',
    img: 'conferenceroom1'
  },
  {
    id: 19,
    type: 'car',
    name: 'Opel Insignia DWR5571',
    company: 'Greyhound',
    icon: '🚗',
    img: 'opelinsignia'
  },
  {
    id: 20,
    type: 'equipment',
    name: 'Projector Benq',
    company: 'Greyhound',
    icon: '💻',
    img: 'projector'
  },
  {
    id: 21,
    type: 'car',
    name: 'Opel Astra DWR5573',
    company: 'Greyhound',
    icon: '🚗',
    img: 'opelastra'
  },
  {
    id: 22,
    type: 'place',
    name: 'Conference room, ground floor small',
    company: 'Greyhound',
    icon: '📈',
    img: 'conferenceroom2'
  },
  {
    id: 23,
    type: 'equipment',
    name: 'Projector EPSON 4K',
    company: 'Greyhound',
    icon: '💻',
    img: 'projector'
  },
  {
    id: 24,
    type: 'place',
    name: 'Conference room, floor1 small',
    company: 'Greyhound',
    icon: '📈',
    img: 'conferenceroom3'
  }
];

const styles = theme => ({});

class ReserverdApp extends Component {
  render() {
    return (
      <CurrentSettingsConsumer>
        {({
          companyName,
          changeName,
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
            <Navbar companyName={companyName} />
            {companyName == 'Select your Company' && <Redirect to={'/'} />}
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
