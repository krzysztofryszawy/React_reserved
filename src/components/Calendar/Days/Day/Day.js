import React from 'react';
import { withStyles, withTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: '5rem',
    padding: theme.spacing.unit * 3,
    width: 'auto',
    [theme.breakpoints.up('md')]: {
      width: '95vw',
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  item: {
    transition: 'transform .2s ease-out',
    width: '100%',
    flexGrow: 1,
    backgroundColor: '#505050',
    textAlign: 'center',
    margin: '.2rem',
    '&:hover': {
      transform: 'scale(1.05)',
      cursor: 'pointer',
      backgroundColor: '#606060'
    }
  },
  reserved: {
    backgroundColor: 'darkorange',
    color: 'black',
    '&:hover': {
      backgroundColor: 'orange'
    }
  }
});

const Day = props => {
  // console.log(props);
  const { classes } = props;
  return (
    <div
      onClick={() => props.clickHandler(props)}
      color="secondary"
      className={
        props.reserved ? `${classes.item} ${classes.reserved}` : classes.item
      }
    >
      {`${props.hour}:00` +
        (props.personName != undefined ? props.personName : '')}
    </div>
  );
};
export default withStyles(styles)(Day);
