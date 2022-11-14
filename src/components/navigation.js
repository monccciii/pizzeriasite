import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import '../styles/main.css';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container} from 'react-bootstrap';
import Logo from '../images/logo.png';
const Navigation = () => {

    return (
        /*make sure to revamp everything here using flexboxes*/
        <nav className="navcontainer">
            <div className='navbar_logo'>
                <img src={Logo} alt="logo" className='navbarlogo'></img>
            </div>
            <p className='logotext' style={{marginTop: '1vh', fontFamily:"'Bebas Neue', cursive"}}><b>Joe's Pizzeria NY</b></p>
            <ul className="navbarlinks">
                <li className="nblink">About Us</li>
                <li className="nblink">Menu</li>
                <li className="nblink">Contact Us</li>
            </ul>
        </nav>
    )
}

export default Navigation