import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logo from '../assets/img/logo.png';
import '../styles/checkin.css';

function CheckIn() {
    const [bookingReference, setBookingReference] = useState('');
    const [lastName, setLastName] = useState('');
    const [seatNumber, setSeatNumber] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');

        try {
            const response = await axios.post('http://localhost/mexicana-airline/apis/checkin.php', {
                codigo_reserva: bookingReference.trim(),
                apellido: lastName.trim(),
                asiento: seatNumber.trim()
            });

            if (response.data.success) {
                setSuccess(response.data.message);
                // Opcional: limpiar el formulario
                setBookingReference('');
                setLastName('');
                setSeatNumber('');
            }
        } catch (err) {
            console.error('Error details:', err);
            setError(
                err.response?.data?.error ||
                'Error al realizar el check-in. Por favor, verifique sus datos e intente nuevamente.'
            );
        } finally {
            setLoading(false);
        }
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

                {error && (
                    <div className="error-message" style={{ color: 'red', marginBottom: '1rem' }}>
                        {error}
                    </div>
                )}

                {success && (
                    <div className="success-message" style={{ color: 'green', marginBottom: '1rem' }}>
                        {success}
                    </div>
                )}

                <form className="checkin-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="booking-reference">Referencia de Reserva</label>
                        <input
                            type="text"
                            id="booking-reference"
                            value={bookingReference}
                            onChange={(e) => setBookingReference(e.target.value)}
                            placeholder="Ej. MX1234"
                            required
                            disabled={loading}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="last-name">Apellido</label>
                        <input
                            type="text"
                            id="last-name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Ingrese su apellido"
                            required
                            disabled={loading}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="seat-number">Número de Asiento</label>
                        <input
                            type="text"
                            id="seat-number"
                            value={seatNumber}
                            onChange={(e) => setSeatNumber(e.target.value)}
                            placeholder="Ej. 14A"
                            required
                            disabled={loading}
                        />
                    </div>
                    <button
                        type="submit"
                        className="checkin-button"
                        disabled={loading}
                    >
                        {loading ? 'Procesando...' : 'Iniciar Check-In'}
                    </button>
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