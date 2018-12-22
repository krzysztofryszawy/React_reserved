import React, { Component } from 'react'


const CurrentCompanyContext = React.createContext()


class CurrentCompanyProvider extends Component {
    state = {
        companyName: 'not selected yet'
    }

    changeNameHandler = (providedName) => {
        this.setState({companyName: providedName})
    }


    render() {
        const { children } = this.props;
        return(
            <CurrentCompanyContext.Provider
                value={{
                    companyName: this.state.companyName,
                    changeName: this.changeNameHandler
                }}>
                {children}
            </CurrentCompanyContext.Provider>
        )
    }
}


export default CurrentCompanyProvider;
export const CurrentCompanyConsumer = CurrentCompanyContext.Consumer