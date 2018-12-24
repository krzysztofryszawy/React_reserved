import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import deepOrange from '@material-ui/core/colors/deepOrange';
import brown from '@material-ui/core/colors/brown';
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import CurrentSettingsProvider from './context/CurrentSettings.context'
import ReserverdApp from './ReserverdApp/ReserverdApp'


const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: deepOrange,
    secondary: brown,
    text: {
      primary: '#c2c2c2'
    }
  },
  status: {
    danger: 'red',
  },
});

console.log(theme)

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <CurrentSettingsProvider>
          <MuiThemeProvider theme={theme}>
            <ScrollToTop>
              <ReserverdApp/>
            </ScrollToTop> 
          </MuiThemeProvider>
        </CurrentSettingsProvider>
      </BrowserRouter>
    );
  }
}

export default App;
