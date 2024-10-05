import React from 'react';
import '../styles/details.css';

function FlightDetails() {
    return (
        <main className="main-content">
            <header>
                <div className="logo">Mexicana</div>
                <input type="search" placeholder="Buscar vuelo" className="search-bar" />
            </header>
            <section className="flight-details-panel">
                <h2>Detalles del Vuelo</h2>
                <div className="flight-info">
                    <div className="route-info">
                        <div className="departure">
                            <h3>México City (MEX)</h3>
                            <p>15 de Agosto, 2024</p>
                            <p>10:00 AM</p>
                        </div>
                        <div className="flight-duration">
                            <p>5h 30m</p>
                            <div className="route-line"></div>
                            <p>Vuelo Directo</p>
                        </div>
                        <div className="arrival">
                            <h3>New York (JFK)</h3>
                            <p>15 de Agosto, 2024</p>
                            <p>3:30 PM</p>
                        </div>
                    </div>
                    <div className="flight-details">
                        <p><strong>Número de Vuelo:</strong> MX1234</p>
                        <p><strong>Tipo de Avión:</strong> Boeing 787 Dreamliner</p>
                        <p><strong>Estado del Vuelo:</strong> En Horario</p>
                    </div>
                </div>
                <div className="passenger-info">
                    <h3>Información del Pasajero</h3>
                    <p><strong>Nombre:</strong> Juan Pérez</p>
                    <p><strong>Asiento:</strong> 14A (Ventana)</p>
                    <p><strong>Clase:</strong> Económica</p>
                    <p><strong>Equipaje:</strong> 1 Maleta (23kg)</p>
                </div>
                <div className="additional-services">
                    <h3>Servicios Adicionales</h3>
                    <ul>
                        <li>Selección de Asiento</li>
                        <li>Comida Especial: Vegetariana</li>
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