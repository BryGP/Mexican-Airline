import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logo from '../assets/img/logo.png';
import '../styles/vuelos.css';

function Vuelos() {
    const [vuelos, setVuelos] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchVuelos = async () => {
            try {
                const response = await axios.get('http://localhost/mexicana-airline/apis/vuelos.php');
                console.log('API Response:', response.data); // Debug log
                setVuelos(response.data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching vuelos:', err);
                setError(err.message);
                setLoading(false);
            }
        };

        fetchVuelos();
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

            <section className="flights-list">
                <h2>Vuelos Disponibles</h2>

                {loading && <p>Cargando vuelos...</p>}

                {error && (
                    <div className="error-message">
                        Error al cargar los vuelos: {error}
                    </div>
                )}

                {!loading && !error && vuelos.length === 0 && (
                    <p>No hay vuelos disponibles en este momento.</p>
                )}

                {vuelos.map(vuelo => (
                    <div key={vuelo.id} className="flight-card">
                        <div className="flight-info">
                            <h3>{vuelo.origen} - {vuelo.destino}</h3>
                            <p>Salida: {new Date(vuelo.fecha_salida).toLocaleString()} |
                                Llegada: {new Date(vuelo.fecha_llegada).toLocaleString()}</p>
                            <p>Duración: {calculateDuration(vuelo.fecha_salida, vuelo.fecha_llegada)}</p>
                        </div>
                        <div className="flight-price">
                            <p>${vuelo.precio} USD</p>
                            <button onClick={() => handleReservar(vuelo.id)}>Reservar</button>
                        </div>
                    </div>
                ))}
            </section>
        </main>
    );
}

// Función auxiliar para calcular la duración del vuelo
function calculateDuration(start, end) {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const diff = endDate - startDate;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m`;
}

// Función para manejar la reservación
function handleReservar(vueloId) {
    // Aquí implementarías la lógica de reservación
    console.log('Reservando vuelo:', vueloId);
}

export default Vuelos;