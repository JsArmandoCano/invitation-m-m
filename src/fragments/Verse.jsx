import React from 'react'
import '../styles/Verse.css'
import Img from '../assets/img3.png'

const Verse = () => {
    return (
        <div className="verse">
            <div className="content">
                <p>Una sola persona puede ser vencida, pero dos ya pueden defenderse; y si tres unen su fuerzas, ya no es fácil derrotarlas.</p>
                <p data-aos="flip-right" style={{ marginTop: "20px", marginBottom: "40px" }}>Eclesiastés 4:12 TLA</p>
                <div className="img">
                    <img src={Img} alt="Detail" />
                </div>
            </div>
        </div>
    )
}

export default Verse
