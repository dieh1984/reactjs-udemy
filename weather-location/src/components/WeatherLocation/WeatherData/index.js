import React from 'react';
import PropTypes from 'prop-types';

//components
import WeatherTemperature from './WeatherTemperature'
import WeatherExtrainfo from './WeatherExtrainfo';

// style
import './style.css'

const WeatherData = (props) => {
    const {temperature, humidity, wind, id} = props.data;
    return (<div className='weatherDataCont'>
        <WeatherTemperature temperature={temperature} id={id} />
        <WeatherExtrainfo humidity={humidity} wind={wind} />
    </div>);
};

WeatherData.propTypes = {
    // PropTypes.share() permite definir tipos de variables y si son requeridas
    // dentro de un objeto como se ve a continuación:
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
};

export default WeatherData;