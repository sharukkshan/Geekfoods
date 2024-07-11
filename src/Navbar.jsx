import React from 'react';
// import logo from './assets/react.svg'; 
import './Navbar.css'
let logo="https://flowbite.com/docs/images/logo.svg";

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="logo-container">
                    <img src={logo} alt="GeekFoods Logo" className="logo-image" />
                    <div className="logo-text">GeekFoods</div>
                </div>
                <div className="navLinks">
                    <a href="/">Home</a>
                    <a href="/quote">Quote</a>
                    <a href="/restaurants">Restaurants</a>
                    <a href="/foods">Foods</a>
                    <a href="/contact">Contact</a>
                </div>
                <button>Get started</button>
            </nav>
        </>
    );
}

export default Navbar;