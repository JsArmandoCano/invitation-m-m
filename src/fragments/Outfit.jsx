import React from 'react'
import '../styles/Outfit.css'
import Women from '../assets/img8.png'
import Man from '../assets/img9.png'

const Outfit = () => {
    return (
        <div className="outfit">
            <h2>Código de vestimenta</h2>

            <div className="content">
                <div className="details">
                    <img src={Women} alt="Womens" data-aos="fade-right" />
                    <p>Sugerencias: Vestido floreado de color rosa o azul en tonos pastel.</p>
                    <p>Calzado apropiado para jardín.</p>
                </div>
                <div className="details">
                    <img src={Man} alt="Mans" data-aos="fade-left" />
                    <p>Sugerencias: Traje, pantalón de vestir con blazer y camisa, en tonos rosa o azul pastel.</p>
                </div>
            </div>
        </div>
    )
}

export default Outfit
