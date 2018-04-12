import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';

// constants
import { THUNDERSTORM,
        RAIN,
        SHOW,
        DAY_SUNNY,
        CLOUD } from '../../../constants/weathers';

const getWeatherIcon = (id) => {
    if(id < 300) return THUNDERSTORM;
    else if(id >= 500 && id < 600) return RAIN;
    else if(id < 700) return SHOW;
    else if(id === 800) return DAY_SUNNY; 
    else return CLOUD;
};

const WeatherTemperature = ({temperature, id}) => (
    <div className='weatherTemperatureCont'>
        <WeatherIcons className='wicon' name={getWeatherIcon(id)} size="4x" />
        <span className='temperature'>{temperature}</span>
        <span className='temperatureType'> C°</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    id: PropTypes.number
};

export default WeatherTemperature;