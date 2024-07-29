import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';
import Slider from '../components/slider';


const App = () => {
    const navigate = useNavigate();

    const clickRankings = () => {
        navigate('/ranking');
    };
    return (
        <div>
            <div className="top-bar">
            <img className='img-icon' src='./images/arm-icon.png'/>
                <h1 className="logo">Armwrestling Cali</h1>
                <nav className="nav-bar">
                    <button onClick={() => navigate('/')}>Inicio</button>
                    <button onClick={() => navigate('/ranking')}>Ranking</button>
                </nav>
            </div>
            <div className="contenedor">
                <Slider />
                <div className="contenido">
                    <h1 className="titulo">Armwrestling Cali</h1>
                    <p>
                        Bienvenido a Armwrestling Cali, el lugar donde la fuerza y la
                        estrategia se encuentran. ¡Únete a nosotros para experimentar la
                        emoción del brazo de hierro!
                    </p>
                </div>
                <br />
                <button className="boton-moderno" name='ranking' onClick={() => clickRankings()} >
                    Ranking de Nuestro Equipo 🦁
                </button>
                <footer className="footer">
                    <div className="contacto">
                        <h2 style={{ color: 'gray' }}>Contactanos</h2>
                        <span style={{ fontWeight: 'bold', color: 'gray' }}>
                            Teléfono : <span style={{ fontWeight: 'normal', color: 'white' }}>+57 3162921181 - +57 31117495150  </span>
                        </span>
                        <br />
                        <span style={{ fontWeight: 'bold', color: 'gray' }}>
                            Dirección: <span style={{ fontWeight: 'normal', color: 'white' }}>Cra. 80, Cali, Parque del Ingenio - Cali, Valle del Cauca </span>
                        </span>
                    </div>
                    <div className="iconos">
                        <i className="fa fa-phone" aria-hidden="true"></i>
                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                    </div>
                </footer>
            </div>
        </div>

    );
};

export default App;