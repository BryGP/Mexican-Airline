import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import logo from '../assets/img/logo.png';
import '../styles/details.css';

function FlightDetails() {
    const { id } = useParams();
    const [flight, setFlight] = useState(null);
    const [passenger, setPassenger] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => { fetchFlightDetails(); fetchPassengerDetails(); }, [id]);

    const fetchFlightDetails = async () => {
        try {
            const response = await axios.get(`http://localhost/mexicana-airline/apis/details.php?id=${id}`);
            setFlight(response.data);
        } catch (err) {
            setError('Error al cargar los detalles del vuelo.');
        }
    };

    const fetchPassengerDetails = async () => {
        try {
            const userId = 1; // Puedes cambiarlo dinámicamente según sesión o parámetro
            const res = await axios.get(`http://localhost/mexicana-airline/apis/account.php?id=${userId}`);
            setPassenger(res.data);
        } catch (err) {
            console.error("Error durante la solicitud del pasajero:", err);
            setError('Error al cargar la información del pasajero.');
        }
    };

    if (error) return <div className="error-message">{error}</div>;
    if (!flight) return <div>Cargando detalles...</div>;

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

            <section className="flight-details-panel">
                <h2>Detalles del Vuelo</h2>

                <div className="flight-info">
                    <div className="route-info">
                        <div className="departure">
                            <h3>{flight.origen}</h3>
                            <p>{new Date(flight.fecha_salida).toLocaleDateString()}</p>
                            <p>{new Date(flight.fecha_salida).toLocaleTimeString()}</p>
                        </div>
                        <div className="flight-duration">
                            <p>{flight.capacidad} Pasajeros</p>
                            <div className="route-line"></div>
                            <p>Precio: ${flight.precio}</p>
                        </div>
                        <div className="arrival">
                            <h3>{flight.destino}</h3>
                            <p>{new Date(flight.fecha_llegada).toLocaleDateString()}</p>
                            <p>{new Date(flight.fecha_llegada).toLocaleTimeString()}</p>
                        </div>
                    </div>

                    <div className="flight-details">
                        <p><strong>Número de Vuelo:</strong> {flight.numero_vuelo}</p>
                        <p><strong>Tipo de Aeronave:</strong> {flight.id_aeronave}</p>
                    </div>
                </div>

                <div className="passenger-info">
                    <h3>Información del Pasajero</h3>
                    <p><strong>Nombre:</strong> {passenger.nombre}</p>
                    <p><strong>Correo Electrónico:</strong> {passenger.email}</p>
                    <p><strong>Fecha de Registro:</strong> {new Date(passenger.fecha_registro).toLocaleDateString()}</p>
                </div>

                <div className="additional-services">
                    <h3>Servicios Adicionales</h3>
                    <ul>
                        <li>Asiento Preferencial</li>
                        <li>Comida Especial</li>
                        <li>Seguro de Viaje</li>
                    </ul>
                </div>

                <div className="action-buttons">
                    <button className="action-button">Descargar Pase de Abordar</button>
                    <button className="action-button">Modificar Reserva</button>
                </div>
            </section>
        </main>
    );
}

export default FlightDetails;