import React, {Component} from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from '../WeatherLocation'

class LocationList extends Component{

    constructor({cities}){
        super();
        this.state = {
            cities
        }
    }

    handleWeatherLocationClick = (city, func) => {
        console.log(city);
        func(city);
    }

    strToComponent = (cities, func) => (
        cities.map(city => (<WeatherLocation key={city} city={city} 
                                onWeatherLocationClick={() => this.handleWeatherLocationClick(city, func)} />))
    )

    render(){
        const func = this.props.onSelectedLocation;
        return (<div>
            { this.strToComponent(this.state.cities, func) }
        </div>);
    }
}

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
}

export default LocationList;