import React from 'react';
import { withStyles, withTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Laptop from '@material-ui/icons/Laptop';
import CloudCircle from '@material-ui/icons/CloudCircle';

import { CurrentCompanyConsumer } from '../../context/CurrentCompanyName.context'


import Thing from './Thing/Thing'
import Filters from './Filters/Filters'

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
  thingsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    // height: '100px',
  }
});

const Things = (props) => {
  const { classes } = props;

  const thingsToDisplay = props.thingsDatabase.map((singleThing, mapIndex) =>
  (singleThing.company == props.companyName && (props.thingType.indexOf(singleThing.type) !== -1)) && 
              <Thing
                key={singleThing.name+mapIndex}
                name={singleThing.name}
                company={singleThing.company}
                icon={singleThing.icon}
                img={singleThing.img}
                />
  )


  return (
        <React.Fragment>
          <div className={classes.root}>
            <Grid container direction="row" justify="space-between" alignItems="stretch" spacing={24}>
              <Grid className={classes.item} item xs={10} >
                  <Typography variant="h5" component="h3">
                    TYPE PROVIDED BY CONTEXT API :  {props.thingType}
                  </Typography>
                  <Filters
                    changeThingTypeHandler={props.changeThingTypeHandler}/>
              </Grid>
              <Grid className={classes.item} item sm={7} xs={12}>
                <Laptop style={{ color: 'brown' }}/>
                <div className={classes.thingsContainer}>
                  {thingsToDisplay.every((el) => el == false) ? <Typography color='primary' variant="h5" component="h3">
                  Nothing on the list 😕 tweak your filter settings ☑
                </Typography> : thingsToDisplay}
                </div>
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


export default withStyles(styles)(Things);