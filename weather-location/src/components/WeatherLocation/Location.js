import React from 'react';
import PropTypes from 'prop-types';

const Location = (props) => {

    /*
    Lo que haremos para declarar una constante de city 
    y asignarle la variable city de props se llama destructuring.
    Como la constante y la variable de props se llaman iguales --> city
    Podemos hacer:

    const city = props.city;

    ó con ES6:

    const { city } = props;

    Donde busca la variable de props que es la misma
    que el nombre de la constante.
    */
    const { city, state } = props;

    return <div className='locationCont'>
                <h1>
                    {city}, {state}
                </h1>
            </div>
}

Location.propTypes = {
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired
}

export default Location;