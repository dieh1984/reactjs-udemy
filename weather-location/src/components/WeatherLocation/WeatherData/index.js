import React from 'react';

//components
import WeatherTemperature from './WeatherTemperature'
import WeatherExtrainfo from './WeatherExtrainfo';

// constants
import { DAY_SUNNY } from '../../../constants/weathers';

const WeatherData = () => (
    <div>
        <WeatherTemperature temperature={10} weatherState={DAY_SUNNY} />
        <WeatherExtrainfo humidity={80} wind={'10m/s'} />
    </div>
);

export default WeatherData;