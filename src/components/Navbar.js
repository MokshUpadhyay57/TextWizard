import React from 'react';
import '../css/Navbar.css';

function Navbar(props) {
    return (
        <div className="navbar">
            <div className="logo-image">

            </div>

            <div className="logo-name">
                {props.title}
            </div>

            <ul className="list">
                <li><a href="#home">Home</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#aboutus">About Us</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    );
}

export default Navbar