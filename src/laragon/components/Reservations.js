import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import '../styles/reservations.css';

function Reservations() {
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        fetch('http://localhost/mexicana/api/reservaciones.php')
            .then(response => response.json())
            .then(data => setReservations(data))
            .catch(error => console.error('Error:', error));
    }, []);

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

            <section className="reservations-panel">
                <h2>Mis Reservas</h2>
                {reservations.map(reservation => (
                    <div key={reservation.id} className="reservation-card">
                        <div className="reservation-header">
                            <h3>{reservation.origen} - {reservation.destino}</h3>
                            <span className="reservation-status">{reservation.estado}</span>
                        </div>
                        <div className="reservation-details">
                            <p><strong>Fecha:</strong> {reservation.fecha_reserva}</p>
                            <p><strong>Número de Reserva:</strong> {reservation.id}</p>
                        </div>
                        <div className="reservation-actions">
                            <button className="action-button">Ver Detalles</button>
                            <button className="action-button">Modificar</button>
                            <button className="action-button cancel">Cancelar</button>
                        </div>
                    </div>
                ))}
            </section>
        </main>
    );
}

export default Reservations;