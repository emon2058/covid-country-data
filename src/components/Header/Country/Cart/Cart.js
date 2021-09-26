import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    let totalDeath = cart.reduce((previous,current) => previous + current.totalDeaths,0)
    const displayName  = cart.map(c=><div className="display-name"><h2>{c.name}</h2></div>)
    console.log(displayName)
    console.log("q",cart,cart.name);
    return (
        <div>
            <div className="cart">
                <h4>Number of countries : {cart.length}</h4>
                <h3>Total Deaths : {totalDeath}</h3>
            </div>
            {displayName}
        </div>

    );
};

export default Cart;