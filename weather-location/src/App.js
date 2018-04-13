import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import './App.css';

// componentes
import LocationList from './components/WeatherLocation/LocationList';
import ForecaseExtended from './components/ForecasteExtended';

const cities = [
  'Buenos Aires, ar',
  'Mar del Plata, ar',
  'Washington, us',
  'Mexico, mx'
];

class App extends Component {
  
  constructor(){
    super();
    this.state = {
      city: null,
    }
  }

  onSelectedLocation = city =>{
    this.setState({city});
    console.log(`ciudad ${city}`);
  }

  render() {
    const {city} = this.state;
    return (
      <MuiThemeProvider>
        <Grid>
          <Row>
            <Col xs={12} md={4}>
              <div className="App">
                <LocationList cities={cities} onSelectedLocation={this.onSelectedLocation}/>
              </div>
            </Col>
            <Col xs={12} md={8}>
              <Paper zDepth={4}>
                <div className="detail">
                { city &&
                  <ForecaseExtended city={city} />
                }
                </div>
              </Paper>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
