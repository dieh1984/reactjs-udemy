// cualquier componente que vayamos a crear, 
// vamos a necesitar de la libreria de React.
import React, {Component} from 'react';
import toFixed from 'to-fixed';

// constants
import { SHOWERS } from '../../constants/weathers';

// components
import WeatherData from './WeatherData';
import Location from './Location';

// style
import './style.css';

const location = 'Banfield, Buenos Aires, ar';
const api_key = '4bbde7b842d7c0287c87ade84e088b37';
const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}&units=metric`;

// esta constante es una función ES6 que devuelve un div
class WeatherLocation extends Component { 

    constructor() {
        console.log("constructor")
        super();
        this.state = {
            city: 'Banfield',
            state: 'Buenos Aires',
            datos: null
        }
    }

    getWeatherState = (weather) => {
        return SHOWERS;
    }

    getData = (weather_data) => {
        console.log(weather_data);
        const {humidity, temp} = weather_data.main;
        const {speed} = weather_data.wind;
        const weatherState = this.getWeatherState(this.weather);

        const data = {
            humidity,
            temperature: toFixed(temp, 0),
            weatherState,
            wind: `${speed} m/s`
        };

        return data;
    }

    handleUpdateClick = () => {
        fetch(api_weather).then( data => {
            const dataJson = data.json();
            return dataJson;
        }).then( weather_data => {
            const data = this.getData(weather_data);
            this.setState({datos: data});
        });
    }

    componentWillMount(){
        this.handleUpdateClick();
    }

    componentDidMount(){
        console.log("componentDidMount");
    }

    componentWillUpdate(){
        console.log("componentWillUpdate");
    }

    componentDidUpdate(){
        console.log("componentDidUpdate");
    }

    render = () => {
        console.log("render");
        return (<div className='weatherLocationCont'>
            <Location city={this.state.city} state={this.state.state} />
            {this.state.datos ? <WeatherData data={this.state.datos} /> : 'Cargando...'}
            <button onClick={this.handleUpdateClick}>Actualizar</button>
        </div>);
    }
};

export default WeatherLocation;