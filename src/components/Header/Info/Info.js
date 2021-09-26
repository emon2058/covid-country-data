import React, { useEffect, useState } from 'react';
import './Info.css'
import Cart from '../Country/Cart/Cart';
import Country from '../Country/Country';

const Info = () => {
    const [info,setInfo] = useState([]);
    const[cart,setCart] = useState([]);
    useEffect(()=>{
        fetch('./data.JSON')
        .then(res => res.json())
        .then(data => setInfo(data))
    },[])
    const addToCart = (country)=>{
        const newCart = [...cart,country]
        setCart(newCart);
        console.log(newCart);
    }
    return (
        <div className="info-container">
            <div className="country-container">
                {info.map(country => <Country
                key ={country.name}
                country={country}
                addToCart={addToCart}
                ></Country>)}
            </div>
            <div>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Info;