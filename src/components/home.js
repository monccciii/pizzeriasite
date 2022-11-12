import React from 'react';
import ReactDOM from 'react-dom/client'
import '../styles/main.css'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import pizzaimg1 from '../images/pizza1.jpg'
import pizzaimg2 from '../images/pizza2.jpg'
import pizzaimg3 from '../images/pizza3.jpg'
import pizzarestaurant from '../images/pizzarestaurant.jpg'

const Home = () => {
    return (
        <div className='home'>
                <img src={pizzaimg1} className='fillpage'></img>
                <h1 className="breakimg"><br></br><br></br><br></br>World Class Pizza</h1>
            <h1 className="breakimg"><br></br><br></br><br></br>Menu</h1>
            <img src={pizzaimg2} className='fillpage'></img>
            <div className='bigwhitespace'>
                <h1 style={{textAlign: 'center'}}>Why us?</h1>
                <hr></hr>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div>
                <img src={pizzaimg3} className='fillpage'></img>
            </div>
        </div>
    )
}

export default Home