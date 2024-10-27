import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import '../styles/checkin.css';

function CheckIn() {
    return (
        <main className="main-content">
            <header>
                <Link to="/" className="logo-link">
                    <div className="logo">
                        <img src={logo} alt="Mexicana Logo" />
                    </div>
                </Link>
                <input type="search" placeholder="Buscar" className="search-bar" />
            </header>

            <section className="checkin-panel">
                <h2>Check-In Online</h2>
                <form className="checkin-form">
                    <div className="form-group">
                        <label htmlFor="booking-reference">Referencia de Reserva</label>
                        <input
                            type="text"
                            id="booking-reference"
                            name="booking-reference"
                            placeholder="Ej. ABC123"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="last-name">Apellido</label>
                        <input
                            type="text"
                            id="last-name"
                            name="last-name"
                            placeholder="Ingrese su apellido"
                            required
                        />
                    </div>
                    <button type="submit" className="checkin-button">Iniciar Check-In</button>
                </form>
                <div className="checkin-info">
                    <h3>Información Importante</h3>
                    <ul>
                        <li>El check-in online está disponible desde 24 horas hasta 1 hora antes de la salida del vuelo.</li>
                        <li>Asegúrese de tener a mano su pasaporte o identificación válida.</li>
                        <li>Si viaja con equipaje especial, por favor contacte a nuestro servicio al cliente.</li>
                    </ul>
                </div>
            </section>
        </main>
    );
}

export default CheckIn;