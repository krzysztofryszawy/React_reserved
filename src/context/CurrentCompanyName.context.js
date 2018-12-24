import React, { Component } from 'react'


const CurrentCompanyContext = React.createContext()


class CurrentCompanyProvider extends Component {
    state = {
        companyName: 'Select your Company',
        thingType: []
    }

    changeNameHandler = (providedName) => {
        this.setState({companyName: providedName})
    }
    changeThingTypeHandler = (providedType) => {
        this.setState({thingType: providedType})
    }


    render() {
        const { children } = this.props;
        return(
            <CurrentCompanyContext.Provider
                value={{
                    companyName: this.state.companyName,
                    changeName: this.changeNameHandler,
                    thingType: this.state.thingType,
                    changeThingTypeHandler: this.changeThingTypeHandler,
                }}>
                {children}
            </CurrentCompanyContext.Provider>
        )
    }
}


export default CurrentCompanyProvider;
export const CurrentCompanyConsumer = CurrentCompanyContext.Consumer