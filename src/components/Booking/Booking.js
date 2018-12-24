import React from 'react';
import { withStyles, withTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Laptop from '@material-ui/icons/Laptop';
import CloudCircle from '@material-ui/icons/CloudCircle';

import Person from '../People/Person/Person'
import Thing from '../Things/Thing/Thing'


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
      marginRight: 'auto',
    },
  },
  item: {
    // margin: theme.spacing.unit * 2,
  },
  currentSelectContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  }
});

const Booking = (props) => {
  const { classes } = props;

  const currentPersonToDisplay = props.peopleDatabase.map((singlePerson, mapIndex) => 
  ((singlePerson.name == props.currentPerson) && (props.companyName == singlePerson.company)) && 
              <Person
                key={singlePerson.name+mapIndex}
                name={singlePerson.name}
                company={singlePerson.company}
                priority={singlePerson.priority}
                icon={singlePerson.icon}
                img={singlePerson.img}
                currentPerson={props.currentPerson}
                changeCurrentPersonHandler={props.changeCurrentPersonHandler}
                />
  )

  const currentThingToDisplay = props.thingsDatabase.map((singleThing, mapIndex) =>
  ((singleThing.name == props.currentThing) && (props.companyName == singleThing.company)) &&
              <Thing
                key={singleThing.name+mapIndex}
                name={singleThing.name}
                company={singleThing.company}
                icon={singleThing.icon}
                img={singleThing.img}
                changeCurrentThingHandler={props.changeCurrentThingHandler}
                currentThing={props.currentThing}
                />
  )

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid container direction="row" justify="space-between" alignItems="stretch" spacing={24}>
          <Grid className={classes.item} item xs={12} >
              <Typography gutterBottom color='primary' variant="h5" component="h3">
                {props.currentPerson} is going to book {props.currentThing}
              </Typography>
              <div className={classes.currentSelectContainer}>
                {currentPersonToDisplay}              
                {currentThingToDisplay}
              </div>
          </Grid>
          <Grid className={classes.item} item sm={5} xs={12}>
            <Laptop style={{ color: 'brown' }}/>
            <Typography variant="h5" component="h3">
              Left column
            </Typography>
            <Typography component="p">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, at! Ab aliquid id, quibusdam nemo blanditiis odit autem vel repellendus minima fuga porro possimus, sint, et suscipit ducimus quas. Labore.
            </Typography>
          </Grid>
          <Grid className={classes.item} item sm={5} xs={12}>
            <CloudCircle style={{ color: 'brown' }}/>
            <Typography variant="h5" component="h3">
                Right column
            </Typography>
            <Typography component="p">              
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis harum dolorum perspiciatis fugiat eaque dolores cupiditate laborum quam facilis rem ducimus doloribus facere soluta repellendus, culpa atque unde voluptatum quasi incidunt? Laudantium amet inventore aliquid reprehenderit iusto facere, atque tempore.
            </Typography>
          </Grid>
        </Grid>
      </div>
      
    </React.Fragment>
  );
}


export default withStyles(styles)(Booking);