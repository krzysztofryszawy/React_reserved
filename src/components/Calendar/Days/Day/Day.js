import React from 'react';
import { withStyles, withTheme } from '@material-ui/core/styles';
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
    backgroundColor: theme.palette.grey[300],
    color: 'black',
    textAlign: 'center',
    margin: '.2rem',
    '&:hover': {
      transform: 'scale(1.05)',
      cursor: 'pointer',
      backgroundColor: theme.palette.grey[500]
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
  const { classes } = props;

  return (
    <Paper
      onClick={() => props.clickHandler(props)}
      // special style to mark with different color, reservations made by current person
      style={
        props.currentPersonId == props.personId
          ? { backgroundColor: 'darkorange', color: 'black' }
          : null
      }
      //marking as reserved or free
      className={
        props.reserved ? `${classes.item} ${classes.reserved}` : classes.item
      }
    >
      {/* text inside single hour cell - (H:MM - H:MM Person name || available) */}
      {`${props.hour}:00 - ${props.hour == 23 ? '00' : props.hour + 1}:00` +
        (props.personName != undefined
          ? '  📌 reserved by  ' + props.personName
          : ' available ')}
    </Paper>
  );
};
export default withStyles(styles)(Day);
