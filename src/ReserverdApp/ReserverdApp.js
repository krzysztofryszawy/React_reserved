import React, { Component } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'; 
import { withStyles } from '@material-ui/core/styles';
import { Route } from 'react-router-dom'

import { CurrentCompanyConsumer } from '../context/CurrentCompanyName.context'


import Navbar from '../components/NavBar/NavBar'

import Main from '../components/Main/Main'
import People from '../components/People/People'
import Things from '../components/Things/Things'
import Booking from '../components/Booking/Booking'
import Help from '../components/Help/Help'


let peopleDatabase = [
    {name: 'Vincent Vega', company: 'Emerald Forest', priority: true, icon: '👨',img: 'VincentVega'},
    {name: 'Jules Winnfield', company: 'Emerald Forest', priority: false, icon: '👨',img: 'JulesWinnfield'},
    {name: 'Mia Wallace', company: 'Aviation', priority: true, icon: '👩',img: 'MiaWallace'},
    {name: 'Winston Wolfe', company: 'Aviation', priority: false, icon: '👨',img: 'WinstonWolfe'},
    {name: 'Marsellus Wallace', company: 'Aviation', priority: true, icon: '👨',img: 'MarsellusWallace'},
    {name: 'Captain Koons', company: 'Greyhound', priority: false, icon: '👨',img: 'CaptainKoons'},
    {name: 'Butch Coolidge', company: 'Greyhound', priority: false, icon: '👨',img: 'ButchCoolidge'},
  ]

let thingsDatabase = [
    {name: 'Ford Focus WE29839', company: 'Emerald Forest', icon: '🚗',img: ''},
    {name: 'Ford Focus WE29840', company: 'Emerald Forest', icon: '🚗',img: ''},
    {name: 'Ford Focus WE29841', company: 'Emerald Forest', icon: '🚗',img: ''},
    {name: 'Ford Mondeo GA2543X', company: 'Aviation', icon: '🚗',img: ''},
    {name: 'Ford Mondeo GA2544X', company: 'Aviation', icon: '🚗',img: ''},
    {name: 'Opel Insignia DWR5571', company: 'Greyhound', icon: '🚗',img: ''},
    {name: 'Opel Astra DWR5572', company: 'Greyhound', icon: '🚗',img: ''},
    {name: 'Opel Astra DWR5573', company: 'Greyhound', icon: '🚗',img: ''},
    {name: 'Conference room, Alpha', company: 'Emerald Forest', icon: '📈',img: ''},
    {name: 'Conference room, Sigma', company: 'Emerald Forest', icon: '📈',img: ''},
    {name: 'Conference room, no.1', company: 'Aviation', icon: '📈',img: ''},
    {name: 'Conference room, no.2', company: 'Aviation', icon: '📈',img: ''},
    {name: 'Conference room, no.3', company: 'Aviation', icon: '📈',img: ''},
    {name: 'Conference room, ground floor main', company: 'Greyhound', icon: '📈',img: ''},
    {name: 'Conference room, ground floor small', company: 'Greyhound', icon: '📈',img: ''},
    {name: 'Conference room, floor1 small', company: 'Greyhound', icon: '📈',img: ''},
    
  ]


const styles = theme => ({
});



class ReserverdApp extends Component {
    
    
    
    
    render(){
        return(
            <CurrentCompanyConsumer>
            {({companyName, changeName}) => (
                <React.Fragment>                
                    <CssBaseline />
                    <Navbar
                        companyName={companyName}/>
                    <Route path='/' exact component={Main} />
                    <Route 
                        path='/People' 
                        exact 
                        render={props => <People 
                                            companyName={companyName}
                                            peopleDatabase={peopleDatabase} />}
                    />
                    <Route
                        path='/Things' 
                        exact 
                        render={props => <Things 
                                            companyName={companyName}
                                            thingsDatabase={thingsDatabase} />}
                    />
                    <Route path='/Booking' exact component={Booking} />
                    <Route path='/Help' exact component={Help} />
                </React.Fragment>
            )}
            </CurrentCompanyConsumer>
        )
    }
}

export default withStyles(styles)(ReserverdApp);