import React, {Component} from 'react';
import PropTypes from 'prop-types';

import WeatherData from './../WeatherLocation/WeatherData';

class ForecaseItem extends Component{
    render(){
        const { weekDay, hour, data } = this.props;
        return (
            <div>
                <div>{weekDay} Hora: {hour}</div>
                <WeatherData data={data} />
            </div>
        );
    }
}

ForecaseItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
}

export default ForecaseItem;