import React from 'react';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import SwitchTheme from '../SwitchTheme/SwitchTheme';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.grey[900],
    // position: 'fixed',
    // top: 0,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    fontWeight: 800,
    userSelect: 'none',
    [theme.breakpoints.down(520)]: {
      justifyContent: 'space-evenly'
    }
  },
  link: {
    textDecoration: 'none',
    padding: '1rem',
    marginRight: '1rem',
    color: theme.palette.primary.dark,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: '#202020',
      transform: 'translateY(5px)'
    },
    textAlign: 'center',
    transition: 'transform .2s ease-out',
    [theme.breakpoints.down(520)]: {
      padding: '.3rem',
      marginRight: 0,
      marginLeft: '.1rem',
      fontWeight: 500,
      fontSize: '.9rem'
    }
  },
  activeLink: {
    backgroundColor: theme.palette.primary.main,
    color: '#202020',
    transform: 'translateY(5px)'
  },
  logo: {
    // margin: '.2rem',
    padding: '.2rem',
    fontSize: '.8rem',
    backgroundColor: theme.palette.grey[900],
    color: theme.palette.secondary.dark,
    textAlign: 'center',
    [theme.breakpoints.down(520)]: {
      padding: '.2rem',
      fontSize: '.5rem'
    }
  },
  disabled: {
    opacity: 0.5
  },
  container: {
    display: 'flex',
    flexFlow: 'column',
    position: 'fixed',
    top: 0,
    width: '100%',
    alignItems: 'flex-end',
    zIndex: '99999'
  },
  underNav: {
    display: 'flex',
    flexFlow: 'row'
  }
});

class NavBar extends React.Component {
  state = {
    value: '0'
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <div className={classes.root}>
          <NavLink
            exact
            to="/"
            className={classes.link}
            activeClassName={classes.activeLink}
          >
            Main
          </NavLink>
          <NavLink
            style={
              this.props.companyName === 'Select your Company'
                ? { display: 'none' }
                : null
            }
            to="/People"
            className={classes.link}
            activeClassName={classes.activeLink}
          >
            People
          </NavLink>
          <NavLink
            style={
              this.props.companyName === 'Select your Company'
                ? { display: 'none' }
                : null
            }
            to="/Things"
            className={classes.link}
            activeClassName={classes.activeLink}
          >
            Things
          </NavLink>
          <NavLink
            style={
              this.props.companyName === 'Select your Company'
                ? { display: 'none' }
                : null
            }
            to="/Booking"
            className={classes.link}
            activeClassName={classes.activeLink}
          >
            Booking
          </NavLink>
          <NavLink
            to="/Help"
            className={classes.link}
            activeClassName={classes.activeLink}
          >
            Help
          </NavLink>
          <SwitchTheme themechangeHandler={this.props.themechangeHandler} />
        </div>
        <div className={classes.underNav}>
          <div className={classes.logo}>
            {this.props.companyName}
            {this.props.companyName === 'Emerald Forest' && ' 🌳'}
            {this.props.companyName === 'Aviation' && ' ✈'}
            {this.props.companyName === 'Greyhound' && ' 🐕'}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(NavBar);
