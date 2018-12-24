import React, { Component } from 'react'


const CurrentSettingsContext = React.createContext()


class CurrentSettingsProvider extends Component {
    state = {
        companyName: 'Select your Company',
        thingType: ['car', 'place', 'equipment'],
        currentThing: '',
        currentPerson: '',
    }

// changing company name causes also reseting to default some states, which belongs to other company names
    changeNameHandler = (providedName) => {
        this.setState({companyName: providedName, thingType: ['car', 'place', 'equipment'], currentThing: '', currentPerson: '' })
    }
    changeThingTypeHandler = (providedType) => {
        this.setState({thingType: providedType})
    }
    changeCurrentThingHandler = (providedThing) => {
        this.setState({currentThing: providedThing})
    }
    changeCurrentPersonHandler = (providedPerson) => {
        this.setState({currentPerson: providedPerson})
    }


    render() {
        const { children } = this.props;
        return(
            <CurrentSettingsContext.Provider
                value={{
                    companyName: this.state.companyName,
                    changeName: this.changeNameHandler,
                    thingType: this.state.thingType,
                    changeThingTypeHandler: this.changeThingTypeHandler,
                    currentThing: this.state.currentThing,
                    changeCurrentThingHandler: this.changeCurrentThingHandler,
                    currentPerson: this.state.currentPerson,
                    changeCurrentPersonHandler: this.changeCurrentPersonHandler,
                }}>
                {children}
            </CurrentSettingsContext.Provider>
        )
    }
}


export default CurrentSettingsProvider;
export const CurrentSettingsConsumer = CurrentSettingsContext.Consumer