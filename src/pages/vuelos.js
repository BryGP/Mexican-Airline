import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import '../styles/vuelos.css';

function Vuelos() {
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
                <div className="flight-card">
                    <div className="flight-info">
                        <h3>México City (MEX) - New York (JFK)</h3>
                        <p>Salida: 10:00 AM | Llegada: 3:30 PM</p>
                        <p>Duración: 5h 30m</p>
                    </div>
                    <div className="flight-price">
                        <p>$599 USD</p>
                        <button>Reservar</button>
                    </div>
                </div>
                <div className="flight-card">
                    <div className="flight-info">
                        <h3>Cancún (CUN) - Madrid (MAD)</h3>
                        <p>Salida: 11:30 PM | Llegada: 2:45 PM (siguiente día)</p>
                        <p>Duración: 10h 15m</p>
                    </div>
                    <div className="flight-price">
                        <p>$799 USD</p>
                        <button>Reservar</button>
                    </div>
                </div>
                <div className="flight-card">
                    <div className="flight-info">
                        <h3>Guadalajara (GDL) - Los Angeles (LAX)</h3>
                        <p>Salida: 2:15 PM | Llegada: 4:00 PM</p>
                        <p>Duración: 3h 45m</p>
                    </div>
                    <div className="flight-price">
                        <p>$450 USD</p>
                        <button>Reservar</button>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Vuelos;