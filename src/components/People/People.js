import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PeopleIcon from '@material-ui/icons/People';

import Person from './Person/Person';

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
  peopleContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '2rem'
  }
});

const People = props => {
  const { classes } = props;

  //filters people only with proper companyName
  const peopleToDisplay = props.peopleDatabase.map(
    (singlePerson, mapIndex) =>
      singlePerson.company == props.companyName && (
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
          changeCurrentPersonHandler={props.changeCurrentPersonHandler}
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
              {props.currentPerson || 'CHOOSE PERSON'}
            </Typography>
            <Typography color="secondary" component="p">
              {' '}
              is working in {props.companyName.toUpperCase()}{' '}
            </Typography>
          </Grid>
          <Grid className={classes.item} item sm={7} xs={12}>
            <PeopleIcon color="secondary" fontSize="large" />
            <Typography gutterBottom variant="h6" component="h6">
              Press SELECT to choose
            </Typography>
            <div className={classes.peopleContainer}>{peopleToDisplay}</div>
          </Grid>
          <Grid className={classes.item} item sm={5} xs={12}>
            <PeopleIcon color="secondary" fontSize="large" />
            <Typography variant="h5" component="h3">
              Right column (alpha ☕)
            </Typography>
            <Typography component="p">
              Place for future development. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Nobis harum dolorum perspiciatis
              fugiat eaque dolores cupiditate laborum quam facilis rem ducimus
              doloribus facere soluta repellendus, culpa atque unde voluptatum
              quasi incidunt? Laudantium amet inventore aliquid reprehenderit
              iusto facere, atque tempore.
            </Typography>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default withStyles(styles)(People);
