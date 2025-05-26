import { useEffect, useState } from 'react'
import '../styles/Counter.css'
import Img from '../assets/img5.png'

const Counter = () => {

    const fechaDestino = new Date("2025-07-27T00:00:00");
    const [tiempoRestante, setTiempoRestante] = useState({});

    const calcularTiempoRestante = () => {
        const ahora = new Date();
        const diferencia = fechaDestino - ahora;

        if (diferencia <= 0) {
            setTiempoRestante({
                dias: "00",
                horas: "00",
                minutos: "00",
                segundos: "00",
            });
            return;
        }

        const dias = String(Math.floor(diferencia / (1000 * 60 * 60 * 24))).padStart(2, "0");
        const horas = String(Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0");
        const minutos = String(Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
        const segundos = String(Math.floor((diferencia % (1000 * 60)) / 1000)).padStart(2, "0");

        setTiempoRestante({
            dias,
            horas,
            minutos,
            segundos,
        });
    };

    useEffect(() => {
        const intervalo = setInterval(calcularTiempoRestante, 1000);
        return () => clearInterval(intervalo);
    }, []);

    return (
        <div className="counter">
            <div className="count">
                <div data-aos="fade-up">
                    <p className="number">{tiempoRestante.dias || "00"}</p>
                    <p className="time">Días</p>
                </div>
                <div data-aos="fade-up" data-aos-delay="100">
                    <p className="number">{tiempoRestante.horas || "00"}</p>
                    <p className="time">Horas</p>
                </div>
                <div data-aos="fade-up" data-aos-delay="200">
                    <p className="number">{tiempoRestante.minutos || "00"}</p>
                    <p className="time">Minutos</p>
                </div>
                <div data-aos="fade-up" data-aos-delay="300">
                    <p className="number">{tiempoRestante.segundos || "00"}</p>
                    <p className="time">Segundos</p>
                </div>
            </div>

            <div className="img">
                <img src={Img} alt="" />
            </div>

            <h5>Sábado 26 de Julio del 2025</h5>
            <h5>2:30 p.m.</h5>
        </div>
    )
}

export default Counter
