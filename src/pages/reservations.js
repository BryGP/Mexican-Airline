import React from 'react';
import '../styles/reservations.css';

function Reservations() {
    return (
        <main className="main-content">
            <header>
                <div className="logo">Mexicana</div>
                <input type="search" placeholder="Buscar reserva" className="search-bar" />
            </header>
            <section className="reservations-panel">
                <h2>Mis Reservas</h2>
                <div className="reservation-card">
                    <div className="reservation-header">
                        <h3>México City (MEX) - New York (JFK)</h3>
                        <span className="reservation-status">Confirmado</span>
                    </div>
                    <div className="reservation-details">
                        <p><strong>Fecha:</strong> 15 de Agosto, 2024</p>
                        <p><strong>Hora de Salida:</strong> 10:00 AM</p>
                        <p><strong>Hora de Llegada:</strong> 3:30 PM</p>
                        <p><strong>Número de Reserva:</strong> MX12345</p>
                    </div>
                    <div className="reservation-actions">
                        <button className="action-button">Ver Detalles</button>
                        <button className="action-button">Modificar</button>
                        <button className="action-button cancel">Cancelar</button>
                    </div>
                </div>
                <div className="reservation-card">
                    <div className="reservation-header">
                        <h3>Cancún (CUN) - Madrid (MAD)</h3>
                        <span className="reservation-status">Pendiente de Pago</span>
                    </div>
                    <div className="reservation-details">
                        <p><strong>Fecha:</strong> 22 de Septiembre, 2024</p>
                        <p><strong>Hora de Salida:</strong> 11:30 PM</p>
                        <p><strong>Hora de Llegada:</strong> 2:45 PM (siguiente día)</p>
                        <p><strong>Número de Reserva:</strong> MX67890</p>
                    </div>
                    <div className="reservation-actions">
                        <button className="action-button">Completar Pago</button>
                        <button className="action-button">Modificar</button>
                        <button className="action-button cancel">Cancelar</button>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Reservations;