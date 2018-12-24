import React, { Component } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'; 
import { withStyles } from '@material-ui/core/styles';
import { Route, Redirect } from 'react-router-dom'

import { CurrentCompanyConsumer } from '../context/CurrentCompanyName.context'


import Navbar from '../components/NavBar/NavBar'

import Main from '../components/Main/Main'
import People from '../components/People/People'
import Things from '../components/Things/Things'
import Booking from '../components/Booking/Booking'
import Help from '../components/Help/Help'


let peopleDatabase = [
    {name: 'Vincent Vega', company: 'Emerald Forest', priority: true, icon: '👨',img: 'vincentvega'},
    {name: 'Jules Winnfield', company: 'Emerald Forest', priority: false, icon: '👨',img: 'juleswinnfield'},
    {name: 'Mia Wallace', company: 'Aviation', priority: true, icon: '👩',img: 'miawallace'},
    {name: 'Winston Wolfe', company: 'Aviation', priority: false, icon: '👨',img: 'winstonwolfe'},
    {name: 'Marsellus Wallace', company: 'Aviation', priority: true, icon: '👨',img: 'marselluswallace'},
    {name: 'Captain Koons', company: 'Greyhound', priority: false, icon: '👨',img: 'captainkoons'},
    {name: 'Butch Coolidge', company: 'Greyhound', priority: false, icon: '👨',img: 'butchcoolidge'},
  ]

let thingsDatabase = [
    {type: 'car', name: 'Ford Focus WE29839', company: 'Emerald Forest', icon: '🚗',img: 'fordfocus'},
    {type: 'place', name: 'Conference room, Alpha', company: 'Emerald Forest', icon: '📈',img: 'conferenceroom1'},
    {type: 'car', name: 'Ford Mondeo WE29841', company: 'Emerald Forest', icon: '🚗',img: 'fordmondeo'},
    {type: 'equipment', name: 'Projector EPSON 4K', company: 'Emerald Forest', icon: '💻',img: 'projector'},
    {type: 'car', name: 'Ford Focus WE29840', company: 'Emerald Forest', icon: '🚗',img: 'fordfocus'},
    {type: 'place', name: 'Conference room, Sigma', company: 'Emerald Forest', icon: '📈',img: 'conferenceroom2'},
    {type: 'equipment', name: 'Projector EPSON', company: 'Emerald Forest', icon: '💻',img: 'projector'},
    {type: 'equipment', name: 'Projector EPSON', company: 'Aviation', icon: '💻',img: 'projector'},
    {type: 'place', name: 'Conference room, no.1', company: 'Aviation', icon: '📈',img: 'conferenceroom1'},
    {type: 'equipment', name: 'Projector EPSON 4K', company: 'Aviation', icon: '💻',img: 'projector'},
    {type: 'car', name: 'Ford Mondeo GA2544X', company: 'Aviation', icon: '🚗',img: 'fordmondeo'},
    {type: 'place', name: 'Conference room, no.2', company: 'Aviation', icon: '📈',img: 'conferenceroom2'},
    {type: 'equipment', name: 'Projector LG', company: 'Aviation', icon: '💻',img: 'projector'},
    {type: 'place', name: 'Conference room, no.3', company: 'Aviation', icon: '📈',img: 'conferenceroom3'},
    {type: 'car', name: 'Ford Focus GA2543X', company: 'Aviation', icon: '🚗',img: 'fordfocus'},
    {type: 'equipment', name: 'Projector EPSON', company: 'Greyhound', icon: '💻',img: 'projector'},
    {type: 'car', name: 'Opel Astra DWR5572', company: 'Greyhound', icon: '🚗',img: 'opelastra'},
    {type: 'place', name: 'Conference room, ground floor main', company: 'Greyhound', icon: '📈',img: 'conferenceroom1'},
    {type: 'car', name: 'Opel Insignia DWR5571', company: 'Greyhound', icon: '🚗',img: 'opelinsignia'},
    {type: 'equipment', name: 'Projector Benq', company: 'Greyhound', icon: '💻',img: 'projector'},
    {type: 'car', name: 'Opel Astra DWR5573', company: 'Greyhound', icon: '🚗',img: 'opelastra'},
    {type: 'place', name: 'Conference room, ground floor small', company: 'Greyhound', icon: '📈',img: 'conferenceroom2'},
    {type: 'equipment', name: 'Projector EPSON 4K', company: 'Greyhound', icon: '💻',img: 'projector'},
    {type: 'place', name: 'Conference room, floor1 small', company: 'Greyhound', icon: '📈',img: 'conferenceroom3'},
    
  ]


const styles = theme => ({
});



class ReserverdApp extends Component {
    
    
    
    
    render(){
        return(
            <CurrentCompanyConsumer>
            {({companyName, changeName, thingType, changeThingTypeHandler, }) => (
                <React.Fragment>                
                    <CssBaseline />
                    <Navbar
                        companyName={companyName}/>
                    {companyName == 'Select your Company' && <Redirect to={'/'}/>}
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
                            thingsDatabase={thingsDatabase}
                            thingType={thingType} 
                            changeThingTypeHandler={changeThingTypeHandler} />}
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