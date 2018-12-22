import React from 'react';
import { withStyles, withTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Laptop from '@material-ui/icons/Laptop';
import CloudCircle from '@material-ui/icons/CloudCircle';

import { CurrentCompanyConsumer } from '../../context/CurrentCompanyName.context'


import Form from './Form/Form'

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

const Main = (props) => {
  const { classes } = props;

  return (
    <CurrentCompanyConsumer>
      {({companyName, changeName}) => (
        <React.Fragment>
          <div className={classes.root}>
            <Grid container direction="row" justify="center" alignItems="stretch" spacing={24}>
              <Typography  color='primary'  style={{margin: '3rem'}} variant="h4" component="h4">
              {companyName}
              </Typography>
            </Grid>
            <Grid container direction="row" justify="space-between" alignItems="stretch" spacing={24}>
              <Grid className={classes.item} item xs={10} >
                  <Typography variant="h5" component="h3">
                    Main Page
                  </Typography>
              </Grid>
              <Grid className={classes.item} item sm={5} xs={12}>
                <Laptop style={{ color: 'brown' }}/>

                <Form
                  changeName={changeName}/>
              </Grid>
              <Grid className={classes.item} item sm={5} xs={12}>
                <CloudCircle style={{ color: 'brown' }}/>
                <Typography  variant="h5" component="h3">
                    Right column
                </Typography>
                <Typography component="p">              
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis harum dolorum perspiciatis fugiat eaque dolores cupiditate laborum quam facilis rem ducimus doloribus facere soluta repellendus, culpa atque unde voluptatum quasi incidunt? Laudantium amet inventore aliquid reprehenderit iusto facere, atque tempore.
                </Typography>
              </Grid>
            </Grid>
          </div>
        </React.Fragment>
      )}
    </CurrentCompanyConsumer>    
      
  );
}


export default withStyles(styles)(Main);