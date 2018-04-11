import React from 'react';
import PropTypes from 'prop-types';

//components
import WeatherTemperature from './WeatherTemperature'
import WeatherExtrainfo from './WeatherExtrainfo';

// style
import './style.css'

const WeatherData = (props) => {
    const {temperature, weatherState, humidity, wind} = props.data;
    return (<div className='weatherDataCont'>
        <WeatherTemperature temperature={temperature} weatherState={weatherState} />
        <WeatherExtrainfo humidity={humidity} wind={wind} />
    </div>);
};

WeatherData.propTypes = {
    // PropTypes.share() permite definir tipos de variables y si son requeridas
    // dentro de un objeto como se ve a continuación:
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
};

export default WeatherData;