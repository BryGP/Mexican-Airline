import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logo from '../assets/img/logo.png';
import '../styles/reservations.css';

function Reservations() {
    const [reservations, setReservations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchReservations();
    }, []);

    const fetchReservations = async () => {
        try {
            const response = await axios.get('http://localhost/mexicana-airline/apis/reservations.php');
            setReservations(response.data);
            setLoading(false);
        } catch (err) {
            setError('Error al cargar las reservaciones. Por favor, intente de nuevo más tarde.');
            setLoading(false);
        }
    };

    const handleAction = async (action, reservationId) => {
        try {
            let response;
            switch (action) {
                case 'view':
                    // Implement view logic (e.g., redirect to details page)
                    console.log(`Ver detalles de la reserva ${reservationId}`);
                    break;
                case 'modify':
                    // Implement modify logic
                    console.log(`Modificar la reserva ${reservationId}`);
                    break;
                case 'cancel':
                    response = await axios.post('http://localhost/mexicana-airline/apis/reservations.php', {
                        action: 'cancel',
                        id: reservationId
                    });
                    if (response.data.success) {
                        fetchReservations(); // Refresh the list
                    }
                    break;
                case 'pay':
                    response = await axios.post('http://localhost/mexicana-airline/apis/reservations.php', {
                        action: 'pay',
                        id: reservationId
                    });
                    if (response.data.success) {
                        fetchReservations(); // Refresh the list
                    }
                    break;
                default:
                    console.error('Acción no reconocida');
            }
        } catch (err) {
            setError('Error al procesar la acción. Por favor, intente de nuevo.');
        }
    };

    if (loading) return <div>Cargando reservaciones...</div>;
    if (error) return <div className="error-message">{error}</div>;

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
                            <span className={`reservation-status ${reservation.estado.toLowerCase()}`}>
                                {reservation.estado}
                            </span>
                        </div>
                        <div className="reservation-details">
                            <p><strong>Fecha:</strong> {new Date(reservation.fecha_reserva).toLocaleDateString()}</p>
                            <p><strong>Hora de Salida:</strong> {new Date(reservation.fecha_salida).toLocaleTimeString()}</p>
                            <p><strong>Hora de Llegada:</strong> {new Date(reservation.fecha_llegada).toLocaleTimeString()}</p>
                            <p><strong>Número de Reserva:</strong> {reservation.id}</p>
                            <p><strong>Precio Total:</strong> ${reservation.precio_total}</p>
                        </div>
                        <div className="reservation-actions">
                            <button className="action-button" onClick={() => handleAction('view', reservation.id)}>
                                <Link to={`/details/${reservation.id}`} className='link-button'>
                                    Ver Detalles
                                </Link>
                            </button>
                            {reservation.estado !== 'Cancelada' && (
                                <>
                                    <button className="action-button" onClick={() => handleAction('modify', reservation.id)}>
                                        Modificar
                                    </button>
                                    <button className="action-button cancel" onClick={() => handleAction('cancel', reservation.id)}>
                                        Cancelar
                                    </button>
                                </>
                            )}
                            {reservation.estado === 'Pendiente de Pago' && (
                                <button className="action-button pay" onClick={() => handleAction('pay', reservation.id)}>
                                    Completar Pago
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </section>
        </main>
    );
}

export default Reservations;