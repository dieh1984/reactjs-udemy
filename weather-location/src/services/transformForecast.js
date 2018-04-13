import moment from 'moment';

const transformForecast = data => (
    data.list.filter(item => (
        moment.unix(item.dt).utc().hour() === 6 ||
        moment.unix(item.dt).utc().hour() === 12 ||
        moment.unix(item.dt).utc().hour() === 18
    )).map(item => ({
        weekDay: moment.unix(item.dt).format('ddd'),
        hour: moment.unix(item.dt).hour(),
        data: {
            humidity: item.main.humidity,
            temperature: item.main.temp,
            wind: `${item.wind.speed} m/s`,
            id: item.weather[0].id
        }
    }))
);

export default transformForecast;