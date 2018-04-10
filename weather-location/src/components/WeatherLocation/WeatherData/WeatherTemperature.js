import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';

// constants
import { SHOWERS,
        DAY_SUNNY,
        SNOW_WIND,
        THUNDERSTORM,
        WINDY } from '../../../constants/weathers';

const getWeatherIcon = (weatherState) => {
    switch (weatherState) {
        case SHOWERS:
            return "showers";
        case DAY_SUNNY:
            return "day-sunny";
        case SNOW_WIND:
            return "snow-wind";
        case THUNDERSTORM:
            return "thunderstorm";
        case WINDY:
            return "windy";
        default:
            return "cloud";
    }
};

const WeatherTemperature = ({temperature, weatherState}) => (
    <div className='weatherTemperatureCont'>
        <WeatherIcons className='wicon' name={getWeatherIcon(weatherState)} size="4x" />
        <span className='temperature'>{temperature}</span>
        <span className='temperatureType'> C°</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string
};

export default WeatherTemperature;