import React from 'react';
import { withStyles, withTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Laptop from '@material-ui/icons/Laptop';
import CloudCircle from '@material-ui/icons/CloudCircle';


const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: '5rem',
    padding: theme.spacing.unit * 3,
    borderBottom: `1px solid ${theme.palette.divider}`,
    width: 'auto',
    [theme.breakpoints.up('md')]: {
      width: '80vw',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  item: {
    margin: theme.spacing.unit * 2,
  }
});

const Booking = (props) => {
  const { classes } = props;

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid container direction="row" justify="space-between" alignItems="stretch" spacing={24}>
          <Grid className={classes.item} item xs={10} >
              <Typography color='secondary' variant="h5" component="h3">
                Booking Page
              </Typography>
              <Typography color='inherit' component="p">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa minima veritatis libero non tempora reprehenderit quasi laudantium quisquam aperiam. Reprehenderit obcaecati nobis eveniet quo odio enim culpa magni eos fugiat?
              </Typography>
          </Grid>
          <Grid className={classes.item} item sm={5} xs={12}>
            <Laptop style={{ color: 'brown' }}/>
            <Typography  color='secondary' variant="h5" component="h3">
              Left column
            </Typography>
            <Typography  color='inherit' component="p">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, at! Ab aliquid id, quibusdam nemo blanditiis odit autem vel repellendus minima fuga porro possimus, sint, et suscipit ducimus quas. Labore.
            </Typography>
          </Grid>
          <Grid className={classes.item} item sm={5} xs={12}>
            <CloudCircle style={{ color: 'brown' }}/>
            <Typography  color='secondary' variant="h5" component="h3">
                Right column
            </Typography>
            <Typography  color='inherit' component="p">              
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis harum dolorum perspiciatis fugiat eaque dolores cupiditate laborum quam facilis rem ducimus doloribus facere soluta repellendus, culpa atque unde voluptatum quasi incidunt? Laudantium amet inventore aliquid reprehenderit iusto facere, atque tempore.
            </Typography>
          </Grid>
        </Grid>
      </div>
      
    </React.Fragment>
  );
}


export default withStyles(styles)(Booking);