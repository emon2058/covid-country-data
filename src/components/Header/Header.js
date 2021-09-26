import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div className="header">
            <h1>Covid Countries Information</h1>
            <p>Together, we can slow the spread of COVID-19 by making a conscious effort to keep a physical distance between each other. Physical (social) distance is proven to be one of the most effective ways to reduce the spread of illness during an outbreak.</p>
            <h1 className="death">Total Death : 4,759,668</h1>
        </div>
    );
};

export default Header;