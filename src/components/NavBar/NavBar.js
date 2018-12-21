import ReactDOM from 'react-dom';
import React from 'react';
import { NavLink } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: '#303030',
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
  },
  link: {
    padding: '1rem',
    marginRight: '1rem',
    color: 'darkorange',
    transform: 'translateY(5px)',
    '&:hover': {
      backgroundColor: 'darkorange',
      color: '#202020',
      transform: 'translateY(10px)',
    },
    textAlign: 'center',
    transition: 'transform .2s ease-out',
    [theme.breakpoints.down(520)]: {
      padding: '.5rem',
      marginRight: 0,
      marginLeft: '.1rem',
      marginBottom: '.5rem',
      '&:hover': {
        // transform: 'translateX(10px) translateY(5px)',
      },        
    },
  },
  activeLink: {
    backgroundColor: 'darkorange',
    color: '#202020'
  },
});



class NavBar extends React.Component {


  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handlescroll);
  }

  handleScroll = () => {
    this.setState({fixed: false})
    let offset = ReactDOM.findDOMNode(this).getBoundingClientRect()
    // let winScrollY = window.scrollY
    // var intViewportHeight = window.innerHeight;


    // console.log(this.state.fixed)
    // console.log('offset.y | ' + offset.y)
    // console.log('winScrollY | ' + winScrollY)
    // console.log('intViewportHeight | ' + intViewportHeight)
    // console.log(intViewportHeight-winScrollY)

    
    if (offset.y <= 0) {
      this.setState({fixed: true})
    }
  }
  
  state = {
    value: '0',
    fixed: false,
  };


  
  
  render() {
    const { classes } = this.props;

    return (
      

      <div className={classes.root}>
          <NavLink exact to="/" className={classes.link} activeClassName={classes.activeLink}>Main</NavLink>
          <NavLink to="/People" className={classes.link} activeClassName={classes.activeLink}>People</NavLink>
          <NavLink to="/Things" className={classes.link} activeClassName={classes.activeLink}>Things</NavLink>
          <NavLink to="/Booking" className={classes.link} activeClassName={classes.activeLink}>Booking</NavLink>
          <NavLink to="/Help" className={classes.link} activeClassName={classes.activeLink}>Help</NavLink>
      </div>
    );
  }
}


export default withStyles(styles)(NavBar);