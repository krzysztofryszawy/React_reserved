import React from 'react';
import { withStyles, withTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ChildFriendly from '@material-ui/icons/ChildFriendly';
import Today from '@material-ui/icons/Today';

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
  imgClass: {
    maxWidth: '20vh',
    [theme.breakpoints.up('md')]: {
      maxWidth: '30vh'
    }
  }
});

const Help = props => {
  const { classes } = props;

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
            <Typography color="secondary" variant="h5" component="h3">
              Help Page
            </Typography>
            <img
              className={classes.imgClass}
              src={require(`../../assets/images/help.png`)}
              alt=""
            />
            <Typography component="p">
              This Company Booking Platform provides Multi-Company multi user
              functionality, to make sharing things as easy as possible. Thanks
              to app you can check availibility of meeting rooms, cars, office
              equipment and more! Then you can book this stuff for your needs.
            </Typography>
          </Grid>
          <Grid className={classes.item} item sm={5} xs={12}>
            <ChildFriendly color="secondary" fontSize="large" />
            <Typography variant="h5" component="h3">
              Beginning
            </Typography>
            <Typography component="p">
              At first view you have to select your Company, then other options
              will be available. Now Company name is visible in right of navbar,
              and you can go to next tabs. Choose People tab to select person,
              who want to make booking. Next step, choose Things tab to select
              thing you want to book. You can use filters to make it easier.
            </Typography>
          </Grid>
          <Grid className={classes.item} item sm={5} xs={12}>
            <Today color="secondary" fontSize="large" />
            <Typography variant="h5" component="h3">
              Booking
            </Typography>
            <Typography component="p">
              When you have choosed thing to book, you can easy check
              availibility of that thing, just switch to Booking tab. By
              changing date you can check other days.
            </Typography>
            <Typography component="p">
              To make reservation you have to choose Person. To make reservation
              click on desired start hour. Now click once more at reservation
              end hour. No funny guy, you cant choose end hour before start
              hour. If you want to remove reservation click at this hour. You
              can delete reservations only made by you. We are working on
              GodMode for these cases (alpha).
            </Typography>
            <Typography component="p">
              Enjoy, all your reservation data are stored on cloud, and always
              available when you need it.
            </Typography>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default withStyles(styles)(Help);
