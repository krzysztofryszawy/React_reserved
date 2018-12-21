import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import ReserverdApp from './ReserverdApp/ReserverdApp'

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ScrollToTop>
          <ReserverdApp/>
        </ScrollToTop> 
      </BrowserRouter>
    );
  }
}

export default App;
