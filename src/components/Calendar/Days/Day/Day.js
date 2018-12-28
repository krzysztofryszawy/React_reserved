import React from 'react';
import { withStyles, withTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

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
    // border: '1px dashed gray',
    '&:hover': {
      transform: 'scale(1.05)',
      cursor: 'pointer',
      backgroundColor: '#606060'
    }
  },
  reserved: {
    backgroundColor: '#353535',
    color: 'dimgray',
    '&:hover': {
      backgroundColor: '#404040'
    }
  }
});

const Day = props => {
  // console.log(props);
  const { classes } = props;
  return (
    <Paper
      onClick={() => props.clickHandler(props)}
      style={
        props.currentPersonId == props.personId
          ? { backgroundColor: 'darkorange', color: 'black' }
          : null
      }
      className={
        props.reserved ? `${classes.item} ${classes.reserved}` : classes.item
      }
    >
      {`${props.hour}:00 - ${props.hour == 23 ? '00' : props.hour + 1}:00` +
        (props.personName != undefined
          ? '  📌 reserved by  ' + props.personName
          : ' available ')}
    </Paper>
  );
};
export default withStyles(styles)(Day);
