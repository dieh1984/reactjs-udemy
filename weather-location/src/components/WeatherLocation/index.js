// cualquier componente que vayamos a crear, 
// vamos a necesitar de la libreria de React.
import React, {Component} from 'react';

// components
import WeatherData from './WeatherData';
import Location from './Location';

// constants
import { SHOWERS, WINDY } from '../../constants/weathers';

// style
import './style.css';

const data = {
    temperature: 20,
    weatherState: SHOWERS,
    humidity: 10,
    wind: '10 m/s',
};

const data2 = {
    temperature: 10,
    weatherState: WINDY,
    humidity: 8,
    wind: '30 m/s',
};

// esta constante es una función ES6 que devuelve un div
class WeatherLocation extends Component { 

    constructor() {
        super();
        this.state = {
            city: 'Banfield',
            state: 'Buenos Aires',
            datos: data
        }
    }

    handleUpdateClick = () => {
        this.setState({
            datos: data2
        });
        console.log("actualizar");
    }

    render = () => (
        <div className='weatherLocationCont'>
            <Location city={this.state.city} state={this.state.state} />
            <WeatherData data={this.state.datos} />
            <button onClick={this.handleUpdateClick}>Actualizar</button>
        </div>
    )
};

export default WeatherLocation;