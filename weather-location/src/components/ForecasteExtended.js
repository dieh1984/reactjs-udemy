import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './WeatherLocation/style.css';

import ForecaseItem from './ForecaseItem';
import transformForecast from './../services/transformForecast';

/*const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes'
];

const data = {
    temperature: 10,
    humidity: 10,
    weatherState: 'normal',
    wind: '12'
}*/

const url = 'http://api.openweathermap.org/data/2.5/forecast';
const api_key = '4bbde7b842d7c0287c87ade84e088b37';

class ForecastExtended extends Component {

    constructor(){
        super();
        this.state = {
            forecastData: null
        }
    }

    componentDidMount(){
        this.updateCity(this.props.city)
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.city !== this.props.city){
            this.setState({forecastData: null});
            this.updateCity(nextProps.city);
        }
    }

    updateCity = city => {
        console.log("prueba");
        const url_forecast = `${url}?q=${city}&appid=${api_key}&units=metric`;
        
        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);
                this.setState({ forecastData })
            }
        );
    }

    renderForecaseItem = (forecastData) => {
        return forecastData.map( forecast => (
            <ForecaseItem key={`${forecast.weekDay}${forecast.hour}`} 
                          weekDay={forecast.weekDay} 
                          hour={forecast.hour} 
                          data={forecast.data}/>));
    }

    renderProgress = () => {
        return <h3>Cargando pronostico extendido...</h3>
    }

    render(){
        const { city } = this.props;
        const { forecastData } = this.state;
        return (
            <div>
                <h2 className='forecase-extended'>Pronostico extendido para {city}</h2>
                { forecastData ? this.renderForecaseItem(forecastData) : this.renderProgress()}
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
}

export default ForecastExtended;
