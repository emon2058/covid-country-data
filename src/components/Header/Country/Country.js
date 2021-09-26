import React from 'react';
import './Country.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Country = (props) => {
    // object destructuring 
    const {img,name,totalCases,totalDeaths,totalRecovered,population}=props.country;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="country">
            <img src={img} alt="country flag" />
            <h4>Country : {name}</h4>
            <p><b>Total Cases </b>: {totalCases}</p>
            <p><b>Total Deaths </b>: {totalDeaths}</p>
            <p><b>Total Recovered </b>: {totalRecovered}</p>
            <p><b>Population </b>: {population}</p>
            <button onClick={() => props.addToCart(props.country)}>{element} add to cart</button>
        </div>
    );
};

export default Country;