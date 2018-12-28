import React, { Component } from 'react';

const CurrentSettingsContext = React.createContext();

class CurrentSettingsProvider extends Component {
  state = {
    companyName: 'Select your Company',
    thingType: ['car', 'place', 'equipment'],
    currentThingId: '',
    currentThing: '',
    currentPersonId: '',
    currentPerson: ''
  };

  // changing company name causes also reseting to default some states, which belongs to other company names
  changeNameHandler = providedName => {
    this.setState({
      companyName: providedName,
      thingType: ['car', 'place', 'equipment'],
      currentThing: '',
      currentPerson: ''
    });
  };
  changeThingTypeHandler = providedType => {
    this.setState({ thingType: providedType });
  };
  changeCurrentThingHandler = (providedThingId, providedThing) => {
    this.setState({
      currentThingId: providedThingId,
      currentThing: providedThing
    });
  };
  changeCurrentPersonHandler = (providedPersonId, providedPersonName) => {
    this.setState({
      currentPersonId: providedPersonId,
      currentPerson: providedPersonName
    });
  };

  render() {
    const { children } = this.props;
    return (
      <CurrentSettingsContext.Provider
        value={{
          companyName: this.state.companyName,
          changeName: this.changeNameHandler,
          thingType: this.state.thingType,
          changeThingTypeHandler: this.changeThingTypeHandler,
          currentThing: this.state.currentThing,
          currentThingId: this.state.currentThingId,
          changeCurrentThingHandler: this.changeCurrentThingHandler,
          currentPerson: this.state.currentPerson,
          currentPersonId: this.state.currentPersonId,
          changeCurrentPersonHandler: this.changeCurrentPersonHandler
        }}
      >
        {children}
      </CurrentSettingsContext.Provider>
    );
  }
}

export default CurrentSettingsProvider;
export const CurrentSettingsConsumer = CurrentSettingsContext.Consumer;
