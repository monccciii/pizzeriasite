import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client'
import '../styles/locationcard.css'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container} from 'react-bootstrap';
import Logo from '../images/logo.png'
import restaurantpic1 from '../images/pizzarest1.jpg'
import restaurantpic2 from '../images/pizzarest2.jpg'

const LocationCard = (props) => {
    const location = props.location;
    const Pickimage = props.pickedimage;
    let image = '';

    if (Pickimage == 1) {
        image = restaurantpic1
    } else if (Pickimage == 2) {
        image = restaurantpic2
    }
    return (
        <div className='test'>
            <div className='card-cont'>
                <h1>{location}</h1>
                <p>A cozy location in the area of Lorem Ipsum Street I</p>
                <img src={image}></img>
            </div>
        </div>
    )
    }

export default LocationCard;