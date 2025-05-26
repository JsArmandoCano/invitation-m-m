import React, { useEffect, useState } from 'react'
import '../styles/Tickets.css'
import Img from '../assets/img11.png'
import data from '../helpers/data'

const Tickets = () => {

    const [invited, setInvited] = useState(null);

    useEffect(() => {
        const pathname = new URLSearchParams(window.location.search);
        const paramValue = pathname.get('name');

        if(paramValue!==undefined) {
            const guess = data.find(inv => inv.id === paramValue);
            setInvited(guess);
        }
    }, []);

    return (
        <div className="tickets">
            <div className="content">
                <div className="name">
                    <p>{invited?.invited}</p>
                </div>
                <div className="num">
                    <p>Número de boletos</p>
                    <h4>{invited?.tickets}</h4>
                </div>

                <img src={Img} alt="Flower" data-aos="fade-right" />
            </div>
        </div>
    )
}

export default Tickets
