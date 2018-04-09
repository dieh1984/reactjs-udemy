// cualquier componente que vayamos a crear, 
// vamos a necesitar de la libreria de React.
import React from 'react';

// components
import WeatherData from './WeatherData';
import Location from './Location';

// esta constante es una función ES6 que devuelve un div
const WeatherLocation = () => (
    <div>
        <Location city={'Banfield'} state={'Buenos Aires'} />
        <WeatherData />
    </div>
);

export default WeatherLocation;