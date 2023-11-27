import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/home.css'; // Asegúrate de tener un archivo de estilos

const App = () => {
    const navigate = useNavigate();

    const clickRankings = () => {
        navigate('/ranking');
      };
    return (
        <div className="contenedor">
            <img src="https://scontent.fclo1-4.fna.fbcdn.net/v/t39.30808-6/396697564_122108296430084330_1754194032335457189_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEMsMIRt3twYT1EH2R8UyoT-oQiPcNEKlH6hCI9w0QqUVg2Kcn0u3-L378hY3Gg_WU0huY656gLVT7oSVj0jlEZ&_nc_ohc=t7-02tzAYdAAX8Ajv1C&_nc_ht=scontent.fclo1-4.fna&oh=00_AfDJkhlTt0kAA8-pn73CUtDajvQeju3xFEPK_X-H9VrMLA&oe=6567AB24" alt="Armwrestling Cali" className="logo" />
            <div className="contenido">
                <h1 className="titulo">Armwrestling Cali</h1>
                <p>
                    Bienvenido a Armwrestling Cali, el lugar donde la fuerza y la
                    estrategia se encuentran. ¡Únete a nosotros para experimentar la
                    emoción del brazo de hierro!
                </p>
            </div>
            <br/>
            <button className="boton-moderno" name='ranking' onClick={()=>clickRankings()} >
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

    );
};

export default App;