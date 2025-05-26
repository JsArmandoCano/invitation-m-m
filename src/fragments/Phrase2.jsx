import React from 'react'
import '../styles/Pharase.css'
import Img from '../assets/img2.png'

const Phrase2 = () => {
    return (
        <div className="pharase">
            <div className="content">
                <img src={Img} alt="Detail" />
                <p data-aos="fade-left">Respetamos al Espíritu Santo, por tanto, no se permite el acceso de bebidas alcohólicas ni cigarros.</p>
                <p data-aos="fade-left">Gracias por su comprensión.</p>
                <img src={Img} alt="Detail" />
            </div>
        </div>
    )
}

export default Phrase2
