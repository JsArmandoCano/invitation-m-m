import React from 'react'
import '../styles/Place.css'
import Img from '../assets/img6.png'
import Img2 from '../assets/img7.png'

const Place = () => {
    return (
        <div className="place">
            <div className="content" data-aos="flip-left">
                <h2>Lugar</h2>

                <div className="img">
                    <img src={Img} alt="Detail" />
                </div>

                <p>Jardín Caballero</p>
                <p>Calle 8 de Abril, San Cristóbal, Nexquipayac.</p>

                <div className="location">
                    <img src={Img2} alt="Location" />
                    <a href="https://maps.app.goo.gl/EpKR95sMaLD1Tkz19" target="_blank" rel="noopener noreferrer">Ver Mapa</a>
                </div>
            </div>
        </div>
    )
}

export default Place
