import React from 'react'
import '../styles/Gift.css'
import Img from '../assets/img10.png'

const Gift = () => {
    return (
        <div className="gift">
            <h2>Mesa de regalos</h2>
            <h6>Lo importante es tu presencia, pero si deseas hacernos un obsequio, te invitamos a elegirlo de nuestra mesa de regalos.</h6>
        
            <div className="content">
                <img src={Img} alt="Gift" data-aos="fade-up" />
                <div>
                    <p>Liverpool:</p>
                    <p>No. de evento 51664730</p>
                </div>
            </div>
        </div>
    )
}

export default Gift
