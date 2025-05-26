import React from 'react'
import '../styles/Pharase.css'
import Img from '../assets/img2.png'

const Phrase3 = () => {
    return (
        <div className="pharase">
            <div className="content">
                <img src={Img} alt="Detail" />
                <p data-aos="fade-right">Favor de confirmar asistencia antes del 8 de Junio.</p>
                <img src={Img} alt="Detail" />
            </div>
        </div>
    )
}

export default Phrase3
