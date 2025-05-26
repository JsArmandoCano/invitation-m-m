import React from 'react'
import '../styles/Invitation.css'
import Img from '../assets/img12.png'

const Invitation = () => {
    return (
        <div className="invitation">
            <div className="confirm" style={{ paddingRight: "5px" }}>
                <p>Invitado de la novia</p>
                <a href="https://api.whatsapp.com/send?phone=+525532083814&text=Confirmo" target="_blank">Confirmar</a>
            </div>
            <div className="img">
                <img src={Img} alt="Detail" data-aos="zoom-in" />
            </div>
            <div className="confirm" style={{ paddingLeft: "5px" }}>
                <p>Invitado del novio</p>
                <a href="https://api.whatsapp.com/send?phone=+525547871654&text=Confirmo" target="_blank">Confirmar</a>
            </div>
        </div>
    )
}

export default Invitation
