import ReactDOM from 'react-dom';
import React from 'react';
import { NavLink } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: '#202020',
    zIndex: '99999',
    // overflow: 'hidden',
    position: 'fixed',
    top: 0 ,
    // marginBottom: '2rem',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    // flexWrap: 'wrap',
    [theme.breakpoints.down(520)]: {
      justifyContent: 'space-evenly',
    },
    fontWeight: 800,
    userSelect: 'none'
  },
  link: {
    textDecoration: 'none',
    padding: '1rem',
    marginRight: '1rem',
    color: 'darkorange',
    '&:hover': {
      backgroundColor: 'darkorange',
      color: '#202020',
      transform: 'translateY(5px)',
    },
    textAlign: 'center',
    transition: 'transform .2s ease-out',
    [theme.breakpoints.down(520)]: {
      padding: '.5rem',
      marginRight: 0,
      marginLeft: '.1rem',
      fontWeight: 500,
      '&:hover': {
        // transform: 'translateX(10px) translateY(5px)',
      },        
    },
  },
  activeLink: {
    backgroundColor: 'darkorange',
    color: '#202020',
    transform: 'translateY(5px)',
  },
  logo: {
    margin: '.5rem',
    padding: '.5rem',
    backgroundColor: '#3E2723',
    color: '#202020',
    textAlign: 'center',
    [theme.breakpoints.down(520)]: {
      padding: '.2rem',
      fontSize: '.5rem'
    },
  },
  disabled: {
    opacity: .5
  }
});



class NavBar extends React.Component {

  
  state = {
    value: '0',
  };


  
  
  render() {
    const { classes } = this.props;

    return (
      
      <div>
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
              style={this.props.companyName == 'Select your Company' ? {display: 'none', } : null}
              to="/People" 
              className={classes.link} 
              activeClassName={classes.activeLink}
            >
              People
            </NavLink>
            <NavLink 
              style={this.props.companyName == 'Select your Company' ? {display: 'none', } : null}
              to="/Things" 
              className={classes.link} 
              activeClassName={classes.activeLink}
            >
              Things
            </NavLink>
            <NavLink 
              style={this.props.companyName == 'Select your Company' ? {display: 'none', } : null}
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
            <div className={classes.logo}>{this.props.companyName}
            {this.props.companyName == 'Emerald Forest' && ' 💎'}
              {this.props.companyName == 'Aviation' && ' ✈'}
              {this.props.companyName == 'Greyhound' && ' 🐕'}
              </div>
        </div>
      </div>
    );
  }
}


export default withStyles(styles)(NavBar);