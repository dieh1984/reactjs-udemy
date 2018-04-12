// cualquier componente que vayamos a crear, 
// vamos a necesitar de la libreria de React.
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CircularProgress from 'material-ui/CircularProgress';
import toFixed from 'to-fixed';

// components
import WeatherData from './WeatherData';
import Location from './Location';

// style
import './style.css';

const url = 'http://api.openweathermap.org/data/2.5/weather';
const api_key = '4bbde7b842d7c0287c87ade84e088b37';


// esta constante es una función ES6 que devuelve un div
class WeatherLocation extends Component { 

    constructor({city}) {
        super();
        this.state = {
            city,
            datos: null
        }
    }

    getData = (weather_data) => {
        const {humidity, temp} = weather_data.main;
        const {id} = weather_data.weather[0];
        const {speed} = weather_data.wind;

        const data = {
            id, 
            humidity,
            temperature: toFixed(temp, 0),
            wind: `${speed} m/s`
        };
        return data;
    }

    handleUpdateClick = () => {
        const api_weather = `${url}?q=${this.state.city}&appid=${api_key}&units=metric`;
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

    render(){
        const {onWeatherLocationClick} = this.props;
        return <div className='weatherLocationCont' onClick={onWeatherLocationClick}>
            <Location city={this.state.city} />
            {this.state.datos ? <WeatherData data={this.state.datos} /> : 
                <CircularProgress size={60} thickness={7} />}
            <button onClick={this.handleUpdateClick}>Actualizar</button>
        </div>;
    }
};

WeatherLocation.propTypes = {
    city: PropTypes.string,
    onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation;