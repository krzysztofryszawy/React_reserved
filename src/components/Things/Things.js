import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Laptop from '@material-ui/icons/Laptop';
import DirectionsCar from '@material-ui/icons/DirectionsCar';
import Business from '@material-ui/icons/Business';

import Thing from './Thing/Thing';
import Filters from './Filters/Filters';

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
  thingsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '2rem'
  }
});

const Things = props => {
  const { classes } = props;

  //filters things only with proper companyName and filter settings (looking for type in any position of array)
  const thingsToDisplay = props.thingsDatabase.map(
    (singleThing, mapIndex) =>
      singleThing.company === props.companyName &&
      props.thingType.indexOf(singleThing.type) !== -1 && (
        <Thing
          key={singleThing.name + mapIndex}
          id={singleThing.id}
          name={singleThing.name}
          company={singleThing.company}
          icon={singleThing.icon}
          img={singleThing.img}
          currentThing={props.currentThing}
          currentThingId={props.currentThingId}
          changeCurrentThingHandler={props.changeCurrentThingHandler}
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
          <Grid className={classes.item} item xs={10}>
            <Typography color="primary" variant="h5" component="h3">
              {props.currentThing || 'CHOOSE SOMETHING'}
            </Typography>
            <Filters
              thingType={props.thingType}
              changeThingTypeHandler={props.changeThingTypeHandler}
            />
          </Grid>
          <Grid className={classes.item} item sm={7} xs={12}>
            <Laptop color="secondary" fontSize="large" />
            <DirectionsCar color="secondary" fontSize="large" />
            <Business color="secondary" fontSize="large" />
            <div className={classes.thingsContainer}>
              {thingsToDisplay.every(el => el === false) ? (
                <Typography color="primary" variant="h5" component="h3">
                  Nothing on the list 😕 tweak your filter settings ☑
                </Typography>
              ) : (
                thingsToDisplay
              )}
            </div>
          </Grid>
          <Grid className={classes.item} item sm={5} xs={12}>
            <Laptop color="secondary" fontSize="large" />
            <DirectionsCar color="secondary" fontSize="large" />
            <Business color="secondary" fontSize="large" />
            <Typography variant="h5" component="h3">
              Right column (alpha ☕)
            </Typography>
            <Typography component="p">
              Place for future development. Lorem ipsum dolor, sit amet harum
              dolorum perspiciatis fugiat eaque dolores cupiditate laborum quam
              facilis rem ducimus doloribus facere soluta repellendus, culpa
              atque unde voluptatum quasi incidunt? Laudantium amet inventore
              aliquid reprehenderit iusto facere, atque tempore.
            </Typography>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default withStyles(styles)(Things);
