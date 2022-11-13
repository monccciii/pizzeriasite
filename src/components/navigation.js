import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import '../styles/main.css';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container} from 'react-bootstrap';
import Logo from '../images/logo.png';
const Navigation = () => {

    const Title = () => {
        const [title, setTitle] = useState("");
     
        return <p onClick={() => setTitle("New title")}>{title}</p>;
     }

    return (
        /*make sure to revamp everything here using flexboxes*/
        <div className="medtext navcontainer">
            <div className="left1 underlineanim">
                <p id='clickable'>A B O U T &nbsp; U S</p>
            </div>
            <div className="right1 underlineanim">
                <p id='clickable2'>M E N U</p>
            </div>
            <img className='images' src={Logo} alt="Joe's Pizzeria"></img>
            
        </div>
    )
}

export default Navigation