import React from 'react';
import ReactDOM from 'react-dom/client'
import '../styles/main.css'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import pizzamen1 from '../images/menus/pizzamen1.jpg'
import pizzamen2 from '../images/menus/pizzamen2.jpg'
import pizzamen3 from '../images/menus/pizzamen3.jpg'



const Home = () => {
    return (
        <div>
            <div id='bigimage1'>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            <h1 className='breakimg'>World Class Pizza</h1>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            <h1 className='breakimg'>Joe's Pizzeria is NY's <b>#1</b> Rated Pizzeria </h1>
            </div>
            <div id='bigimage2'>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h1 className='breakimg' style={{textDecoration:'underline'}}>Menus</h1>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className='menuopts'>
                <p className='breakimg' style={{marginLeft:'27vw'}}>Dine in Menu</p>
                <p className='breakimg' style={{marginLeft:'15vw'}}>Lunch Menu</p>
                <p className='breakimg' style={{marginLeft:'15vw'}}>Cocktail Menu</p>
                </div>
                <img src={pizzamen2} className='smallimg hoverable' style={{marginLeft: '25vw', marginRight: '10vw'}}></img>
                <img src={pizzamen1} className='smallimg hoverable' style={{marginRight: '10vw'}}></img>
                <img src={pizzamen3} className='smallimg hoverable' style={{marginRight: '10w'}}></img>
            </div>
            <div className='bigwhitespace'>
                <h1 className='breakimg' style={{color:'black'}}>Why Eat at Joe's?</h1>
                <hr></hr>
                <p className='breakimg smalltext' style={{color: 'black'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p className='breakimg smalltext' style={{color: 'black'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non mi dolor. Integer ut ante massa. Sed rutrum cursus viverra. Ut bibendum sapien enim, ac placerat lacus viverra consequat. Aenean dapibus dui eu eros posuere vulputate. Fusce leo sem, auctor a nunc non, dapibus placerat arcu. Pellentesque quis dolor congue, tincidunt turpis et, blandit libero. Suspendisse potenti. Nullam lacinia nibh a lacinia porttitor. Donec sed aliquam mi. Nulla ut congue odio, eu facilisis dolor. Praesent et lobortis quam. Pellentesque risus ligula, ultrices ut vehicula vel, pretium non mauris. Curabitur et dui quis nisi varius congue. Praesent non lacinia libero, nec congue ipsum. Vivamus suscipit, velit vitae semper aliquet, libero dui gravida tellus, eu eleifend dolor dui id enim.</p>
                <p className='breakimg smalltext' style={{color: 'black'}}>In et elit enim. Nullam ultrices condimentum nisi. Mauris et dui at dolor consectetur eleifend. Proin sit amet enim et justo aliquam interdum. Mauris laoreet, enim at iaculis accumsan, diam metus accumsan leo, a malesuada justo erat vitae massa. Nullam eget nisl at ligula vehicula tincidunt vel sed metus. Duis tincidunt ligula eu libero euismod, in tristique tortor feugiat. Aenean ac hendrerit eros, ac semper erat. Sed hendrerit leo ante, eget porttitor neque suscipit vel. Vestibulum feugiat tortor tellus, eget malesuada dolor maximus vitae. Phasellus ullamcorper diam tellus, sit amet sodales nibh eleifend vitae. Etiam porta semper ipsum in luctus. Morbi semper tincidunt leo, vitae imperdiet sem. Donec porta felis sit amet turpis malesuada vehicula.</p>
                <h2 className='breakimg'style={{color:'black', marginTop:'3vh'}}>Joe's is simply the best.</h2>
            </div>
            <div id='bigimage3'>
            <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            <h1 className='breakimg' style={{textDecoration:'underline'}}>Locations</h1>

            <div className='menuopts'>
            <p className='breakimg' style={{fontSize:'20px', marginLeft:'30vw'}}>Location 1</p>
            <p className='breakimg' style={{fontSize:'20px',marginLeft:'30vw'}}>Location 2</p>
            {/*import location cards here*/}
            </div>
            </div>
        </div>
    )
}

export default Home