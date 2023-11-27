import React from 'react';
import { useNavigate } from 'react-router-dom';
import List from './List';
import './ListItem.css';
import Swal from 'sweetalert2';


const Ranking = () => {
    const ListItem = ({ name }) => {
        return (
            <div className="list-item">
                <p>{name}</p>
            </div>
        );
    };

    const mostrarMensaje = () => {
        Swal.fire({
          title: 'En Desarrollo',
          text: 'Esta característica aún está en desarrollo.',
          icon: 'info',
          confirmButtonText: '¡Entendido!',
        });
      }; 
      const data = [
        { name: 'Jorge Parra', points: 22 },
        { name: 'Johan Cañas', points: 21 },
        { name: 'José Alejandro Ramos', points: 18 },
        { name: 'Alejandro Morales', points: 20 },
        { name: 'Daniel Ramirez', points: 19 },
        { name: 'Miguel del castillo', points: 9 },
        { name: 'Juan Gabriel Garcia', points: 17 },
        { name: 'Daniel Salguero', points: 16 },
        { name: 'Wladimir Brito', points: 15 },
        { name: 'Samuel Duque', points: 14 },
        { name: 'Jhonny Antonio Gil', points: 13 },
        { name: 'Jaime Ibarra', points: 12 },
        { name: 'Juan Andrés Muñoz', points: 11 },
        { name: 'Manu', points: 10 },
        { name: 'Michael Heilbron', points: 8 },
        { name: 'Christian Ramos', points: 7 },
        { name: 'Jaime Ibarra', points: 6 },
        { name: 'Larry', points: 5 },
        { name: 'Sneyder', points: 4 },
        { name: 'Luis Gabriel', points: 3 },
      ];

    return (
        <div className="contenedor">
            <div className="contenido">
                <h1 className="titulo">Lista de Nuestras Bestias 🐻</h1>
            </div>
            <br />
            <div>
                <List data={data} />
            </div>
            <br />

            <button className="boton-moderno" name='ranking'  onClick={mostrarMensaje}>
            🤜 ¡ENFRENTAMIENTOS! 🤛
            </button>
            <br />

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

export default Ranking;