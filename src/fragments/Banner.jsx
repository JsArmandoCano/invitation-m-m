import React from 'react'
import '../styles/Banner.css'
import Img from '../assets/img1.png'

const Banner = () => {
    return (
        <div className="banner">
            <div className="cap"></div>
            <p className="animate__animated animate__fadeInDown">Nuestra boda</p>
            <img src={Img} alt="Detail" />
            <h2>Magdiel & Montserrat</h2>
            <img src={Img} alt="Detail" />
            <h5 className="animate__animated animate__fadeInUp">26 de Julio</h5>
        </div>
    )
}

export default Banner
