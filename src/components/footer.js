import React from 'react';
import ReactDOM from 'react-dom/client'
import '../styles/main.css'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import twitterico from '../images/twitterico.png'
import instaico from '../images/instaico.png'
const Footer = () => {
    return (
        <div>
        <div className='bigoffwhitespace'>
                <h1><br></br>C O N T A C T &nbsp; U S</h1>
                <span className='twittericon'></span>
                <span className='instaicon'></span>
            </div>
        <div className='footerp'>
            <p>Footer</p>
        </div>
        </div>
    )
}

export default Footer