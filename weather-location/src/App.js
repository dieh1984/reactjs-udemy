import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

// componentes
import LocationList from './components/WeatherLocation/LocationList';

const cities = [
  'Buenos Aires, ar',
  'Mar del Plata, ar',
  'Washington, us',
  'Mexico, mx'
];

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <LocationList cities={cities}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
