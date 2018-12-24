import React from 'react';
import { withStyles, withTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PeopleIcon from '@material-ui/icons/People';
import CloudCircle from '@material-ui/icons/CloudCircle';

import Person from './Person/Person'

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
  peopleContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  }
});



const People = (props) => {
  const { classes } = props;
  
  const peopleToDisplay = props.peopleDatabase.map((singlePerson, mapIndex) => 
  (singlePerson.company == props.companyName) && 
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
  


  return (
    <React.Fragment>
          <div className={classes.root}>
            <Grid container direction="row" justify="space-between" alignItems="stretch" spacing={24}>
              <Grid className={classes.item} item xs={10} >
                  <Typography color='primary' variant="h5" component="h3">
                    Selected : {props.currentPerson} 
                  </Typography>
                  <Typography color='secondary' component="p"> is working in {props.companyName.toUpperCase()} </Typography>
              </Grid>
              <Grid className={classes.item} item sm={7} xs={12}>
                <PeopleIcon color='secondary'/>
                <Typography gutterBottom variant="h6" component="h6">
                  Press SELECT to choose
                </Typography>
                <div className={classes.peopleContainer}>
                  {peopleToDisplay}
                </div>
              </Grid>
              <Grid className={classes.item} item sm={5} xs={12}>
                <PeopleIcon color='secondary'/>
                <Typography variant="h5" component="h3">
                    Right column
                </Typography>
                <Typography  component="p">              
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis harum dolorum perspiciatis fugiat eaque dolores cupiditate laborum quam facilis rem ducimus doloribus facere soluta repellendus, culpa atque unde voluptatum quasi incidunt? Laudantium amet inventore aliquid reprehenderit iusto facere, atque tempore.
                </Typography>
              </Grid>
            </Grid>
          </div>
    </React.Fragment>
  )
}


export default withStyles(styles)(People);