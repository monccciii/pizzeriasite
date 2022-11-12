import React from 'react';
import ReactDOM from 'react-dom/client'
import '../styles/main.css'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import pizzaimg1 from '../images/pizza1.jpg'
import pizzaimg2 from '../images/pizza2.jpg'

const Home = () => {
    return (
        <div className='home'>
            <div className='bigimage1'>
                <h1 className="breakimg"><br></br><br></br><br></br>World Class Pizza</h1>
            </div>
            <div className='bigimage2'>
                <h1 className="breakimg"><br></br><br></br><br></br>Menu</h1>
            </div>
            <div className='bigwhitespace'>
                <h1>Why us?</h1>
            </div>
            <div className='bigimage3'>

            </div>
        </div>
    )
}

export default Home