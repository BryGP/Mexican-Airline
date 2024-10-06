import React from 'react';
import { Link } from 'react-router-dom'; // Si estás usando React Router
import '../App.css';

const Home = () => {
    return (
        <div>
            <aside className="sidebar">
                <Link to="/vuelos" title="Vuelos Disponibles">✈️</Link>
                <Link to="/settings" title="Configuración">⚙️</Link>
                <Link to="/checkin" title="Check-In">✅</Link>
                <Link to="/reservations" title="Reservas">📖</Link>
                <Link to="/details" title="Detalles de Vuelo">📄</Link>
                <Link to="/account" title="Usuario">👤</Link>
            </aside>

            <main className="main-content">
                <header>
                    <div className="logo">Mexicana</div>
                    <input type="search" placeholder="Buscar" className="search-bar" />
                </header>

                <section className="flight-booking">
                    <div className="background-image"></div>
                    <div className="content">
                        <h2>Planea tu viaje</h2>
                        <form className="flight-form">
                            <div className="form-group">
                                <label htmlFor="origin">Origen</label>
                                <input type="text" id="origin" placeholder="Qro (MX)" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="destination">Destino</label>
                                <input type="text" id="destination" placeholder="Italy (EUR)" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="date">¿Cuándo?</label>
                                <input type="date" id="date" placeholder="Nov 24, 2024" />
                            </div>
                            <button type="submit">Buscar</button>
                        </form>
                    </div>
                </section>

                <h2>Popularidad en Viajes:</h2>

                <section className="popular-destinations">
                    <div className="destination-card">
                        <img src="/main/assets/img/cmdx.jpg" alt="Destino 1" />
                        <div className="content">
                            <h3>CMDX - MX</h3>
                            <p>Sep 21, 2024</p>
                        </div>
                    </div>
                    <div className="destination-card">
                        <img src="/main/assets/img/china.jpg" alt="Destino 2" />
                        <div className="content">
                            <h3>China - HGK</h3>
                            <p>Nov 12, 2024</p>
                        </div>
                    </div>
                    <div className="destination-card offer-card">
                        <video src="/main/assets/videos/fondo.mp4" autoPlay loop muted playsInline className="background-video"></video>
                        <div className="content">
                            <h3>80% Off</h3>
                            <p>¡Viaja a través del mundo!</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Home;