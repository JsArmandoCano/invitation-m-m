import React from 'react'
import '../styles/Pharase.css'
import Img from '../assets/img2.png'

const Phrase = () => {
    return (
        <div className="pharase">
            <div className="content">
                <img src={Img} alt="Detail" />
                <p data-aos="fade-right">Queremos que formes parte del mejor día de nuestras vidas.</p>
                <img src={Img} alt="Detail" />
            </div>
        </div>
    )
}

export default Phrase
