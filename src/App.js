import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import brown from '@material-ui/core/colors/brown';
import CurrentSettingsProvider from './context/CurrentSettings.context';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import ReserverdApp from './ReserverdApp/ReserverdApp';

let theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    type: 'dark',
    primary: orange,
    secondary: brown,
    text: {
      primary: '#c2c2c2'
    }
  },
  status: {
    danger: 'red'
  }
});

class App extends Component {
  // changing theme by user settings from NavBar. Needs forceUpdate to rerender because setings dont change state or props
  themechangeHandler = value => {
    value === 'light'
      ? (theme = createMuiTheme({
          typography: {
            useNextVariants: true
          },
          palette: {
            type: value
          }
        }))
      : (theme = createMuiTheme({
          typography: {
            useNextVariants: true
          },
          palette: {
            type: 'dark',
            primary: orange,
            secondary: brown,
            text: {
              primary: '#c2c2c2'
            }
          },
          status: {
            danger: 'red'
          }
        }));
    this.forceUpdate();
  };

  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <CurrentSettingsProvider>
          <MuiThemeProvider theme={theme}>
            <ScrollToTop>
              <ReserverdApp themechangeHandler={this.themechangeHandler} />
            </ScrollToTop>
          </MuiThemeProvider>
        </CurrentSettingsProvider>
      </BrowserRouter>
    );
  }
}

export default App;
