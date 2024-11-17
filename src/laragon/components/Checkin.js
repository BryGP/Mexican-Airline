import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import '../styles/checkin.css';

function CheckIn() {
    const [bookingReference, setBookingReference] = useState('');
    const [lastName, setLastName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost/mexicana/api/checkin.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id_reservacion: bookingReference,
                // Aquí deberías incluir la lógica para verificar el apellido
            }),
        })
            .then(response => response.json())
            .then(data => {
                alert(data.message);
                // Aquí podrías redirigir al usuario o mostrar más información
            })
            .catch(error => console.error('Error:', error));
    };

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
                <form className="checkin-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="booking-reference">Referencia de Reserva</label>
                        <input
                            type="text"
                            id="booking-reference"
                            name="booking-reference"
                            placeholder="Ej. ABC123"
                            required
                            value={bookingReference}
                            onChange={(e) => setBookingReference(e.target.value)}
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
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="checkin-button">Iniciar Check-In</button>
                </form>
                {/* ... resto del componente ... */}
            </section>
        </main>
    );
}

export default CheckIn;