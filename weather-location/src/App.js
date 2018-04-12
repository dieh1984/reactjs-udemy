import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
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
        <Grid>
          <Row>
            <Col xs={12} sm={6} md={4}>
              <div className="App">
                <LocationList cities={cities}/>
              </div>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
