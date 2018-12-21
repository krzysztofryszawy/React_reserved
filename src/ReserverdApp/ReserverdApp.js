import React, { Component } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'; 
import { withStyles } from '@material-ui/core/styles';
import { Route } from 'react-router-dom'

import Navbar from '../components/NavBar/NavBar'

import Main from '../components/Main/Main'
import People from '../components/People/People'
import Things from '../components/Things/Things'
import Booking from '../components/Booking/Booking'
import Help from '../components/Help/Help'



const styles = theme => ({
    '@global': {
        body: {
        //   backgroundColor: theme.palette.common.white,
          backgroundColor: '#202020',
          fontFamily: "Monaco, sans-serif",
          color: '#AAAAAA',
          boxSizing: 'border-box',
        },
        a: {
          textDecoration: 'none',
          color: theme.palette.text.secondary
        },
    },
});





class ReserverdApp extends Component {
    
    
    
    
    render(){
        return(
            <React.Fragment>
                <CssBaseline />
                <Navbar/>
                <Route path='/' exact component={Main} />
                <Route path='/People' exact component={People} />
                <Route path='/Things' exact component={Things} />
                <Route path='/Booking' exact component={Booking} />
                <Route path='/Help' exact component={Help} />
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(ReserverdApp);