// cualquier componente que vayamos a crear, 
// vamos a necesitar de la libreria de React.
import React from 'react';

// components
import WeatherData from './WeatherData';
import Location from './Location';

// style
import './style.css';

// esta constante es una función ES6 que devuelve un div
const WeatherLocation = () => (
    <div className='weatherLocationCont'>
        <Location city={'Banfield'} state={'Buenos Aires'} />
        <WeatherData />
    </div>
);

export default WeatherLocation;