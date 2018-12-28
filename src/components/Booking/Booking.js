import React from 'react';
import { withStyles, withTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Laptop from '@material-ui/icons/Laptop';
import DirectionsCar from '@material-ui/icons/DirectionsCar';
import Business from '@material-ui/icons/Business';

import Today from '@material-ui/icons/Today';

import Person from '../People/Person/Person';
import Thing from '../Things/Thing/Thing';

import Days from '../../components/Calendar/Days/Days';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: '5rem',
    padding: theme.spacing.unit * 3,
    borderBottom: `1px solid ${theme.palette.divider}`,
    width: 'auto',
    [theme.breakpoints.up('md')]: {
      width: '95vw',
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  item: {
    // margin: theme.spacing.unit * 2,
  },
  currentSelectContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '4rem'
  }
});

const Booking = props => {
  const { classes } = props;

  const currentPersonToDisplay = props.peopleDatabase.map(
    (singlePerson, mapIndex) =>
      singlePerson.id === props.currentPersonId &&
      props.companyName === singlePerson.company && (
        <Person
          key={singlePerson.name + mapIndex}
          id={singlePerson.id}
          name={singlePerson.name}
          company={singlePerson.company}
          priority={singlePerson.priority}
          icon={singlePerson.icon}
          img={singlePerson.img}
          currentPerson={props.currentPerson}
          currentPersonId={props.currentPersonId}
          changeCurrentPersonHandler={() => null}
        />
      )
  );

  const currentThingToDisplay = props.thingsDatabase.map(
    (singleThing, mapIndex) =>
      singleThing.id === props.currentThingId &&
      props.companyName === singleThing.company && (
        <Thing
          key={singleThing.name + mapIndex}
          id={singleThing.id}
          name={singleThing.name}
          company={singleThing.company}
          icon={singleThing.icon}
          img={singleThing.img}
          currentThing={props.currentThing}
          currentThingId={props.currentThingId}
          changeCurrentThingHandler={() => null}
        />
      )
  );

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="stretch"
          spacing={24}
        >
          <Grid className={classes.item} item xs={12}>
            <Typography
              gutterBottom
              color="primary"
              variant="h5"
              component="h3"
            >
              Booking part
            </Typography>
          </Grid>
          <Grid className={classes.item} item sm={4} xs={12}>
            <Laptop color="secondary" fontSize="large" />
            <DirectionsCar color="secondary" fontSize="large" />
            <Business color="secondary" fontSize="large" />
            <Typography
              gutterBottom
              color="primary"
              variant="h5"
              component="h3"
            >
              {currentPersonToDisplay.every(el => el == false)
                ? 'Choose from menu above person and thing to booking'
                : props.currentPerson +
                  '  is going to book  ' +
                  props.currentThing}
            </Typography>
            <div className={classes.currentSelectContainer}>
              {currentPersonToDisplay}
              {currentThingToDisplay}
            </div>
          </Grid>
          <Grid className={classes.item} item sm={8} xs={12}>
            <Today color="secondary" fontSize="large" />
            <Typography color="primary" variant="h5" component="h3">
              Choose date of reservation
            </Typography>
            <Typography component="h6">
              {props.currentThingId ? (
                <Days
                  currentPersonName={props.currentPerson}
                  currentPersonId={props.currentPersonId}
                  currentThingName={props.currentThing}
                  currentThingId={props.currentThingId}
                />
              ) : (
                'choose thing 😑'
              )}
            </Typography>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default withStyles(styles)(Booking);
