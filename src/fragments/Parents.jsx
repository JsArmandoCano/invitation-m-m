import React from 'react'
import '../styles/Parents.css'
import Img from '../assets/img4.png'

const Parents = () => {
    return (
        <div className="parents">
            <h3>Nuestros padres</h3>

            <div className="content" style={{ overflow: "hidden" }}>
                <div className="names">
                    <p data-aos="fade-down-right" data-aos-delay="100" style={{ textAlign: "end", paddingRight: "5px" }}>Jorge A. Martínez García</p>
                    <div data-aos="fade-up-right" data-aos-delay="100">
                        <p style={{ textAlign: "end", paddingRight: "5px" }}>Areli M. Canales Guerrero</p>
                        <h6 data-aos="fade-up-right" style={{ textAlign: "end", paddingRight: "5px" }}>En las mansiones celestiales</h6>
                    </div>
                </div>
                <div className='img'>
                    <img src={Img} alt="Detail" />
                </div>
                <div className="names">
                    <p data-aos="fade-down-left" data-aos-delay="100" style={{ paddingLeft: "5px" }}>Joel Olivares Olguín</p>
                    <p data-aos="fade-up-left" data-aos-delay="100" style={{ paddingLeft: "5px" }}>Judith Maldonado Casarreal</p>
                </div>
            </div>
        </div>
    )
}

export default Parents
