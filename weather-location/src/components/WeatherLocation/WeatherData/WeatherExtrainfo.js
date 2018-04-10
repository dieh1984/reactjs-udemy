import React from 'react';
import PropTypes from 'prop-types';

const WeatherExtrainfo = (props) => {
    const {humidity, wind} = props;
    return <div className='weatherExtraInfoCont'>
        <span className='extraInfoText'>Humedad: ${humidity} % </span>
        <span className='extraInfoText'>${wind} wind</span>
    </div>
};

WeatherExtrainfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired
};

export default WeatherExtrainfo;