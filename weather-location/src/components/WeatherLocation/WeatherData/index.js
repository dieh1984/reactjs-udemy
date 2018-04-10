import React from 'react';

//components
import WeatherTemperature from './WeatherTemperature'
import WeatherExtrainfo from './WeatherExtrainfo';

// constants
import { SHOWERS } from '../../../constants/weathers';

// style
import './style.css'

const WeatherData = () => (
    <div className='weatherDataCont'>
        <WeatherTemperature temperature={10} weatherState={SHOWERS} />
        <WeatherExtrainfo humidity={80} wind={'10m/s'} />
    </div>
);

export default WeatherData;