import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';
import avionBlanco from '../assets/img/avionblanco.jpg';
import logo from '../assets/img/logo.png';

// Files de imagenes y video a utilizar en el catalogo
import cmdx from '../assets/img/cmdx.jpg';
import china from '../assets/img/china.jpg';
import videoOffer from '../assets/videos/80 OFF.mp4';
import paris from '../assets/img/pawi.jpg';
import tokyo from '../assets/img/tokyo.jpg';
import newyork from '../assets/img/newyork.jpg';
import rio from '../assets/img/rio.jpg';

const Home = () => {
    const destinations = [
        { id: 1, name: 'Guerrero - Acapulco', image: cmdx },
        { id: 2, name: 'Campeche - Campeche', image: china },
        { id: 3, name: 'Quintana Roo - Chetumal', image: paris },
        { id: 4, name: 'Tamaulipas - CD Victoria', image: tokyo },
        { id: 5, name: 'Guadalajara - Jalisco', image: newyork },
        { id: 6, name: 'Oaxaca Ixtepec', image: rio },
        { id: 7, name: 'Sinaloa - Mazatlán', image: rio },
        { id: 8, name: 'Yucatán - Mérida', image: rio },
        { id: 9, name: 'Nuevo León - Monterrey', image: rio },
        { id: 10, name: 'Tamaulipas - Nuevo Laredo', image: rio },
        { id: 11, name: 'Chiapas - Palenque', image: rio },
        { id: 12, name: 'Jalisco - Puerto Vallarta', image: rio },
        { id: 13, name: 'Baja California - Tijuana', image: rio },
        { id: 14, name: 'Quintana Roo - Tulum', image: rio },
        { id: 15, name: 'Michoacán - Uruapan', image: rio },
        { id: 16, name: 'Baja California Sur - San José del Cabo', image: rio },
        { id: 17, name: 'Tabasco - Villahermosa', image: rio },
        { id: 18, name: 'Guerrero - Zihuatanejo', image: rio },
    ];

    const [currentIndex] = useState(0);

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

            <section className="flight-booking">
                <div className="background-image" style={{ backgroundImage: `url(${avionBlanco})` }}></div>
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
                            <input type="date" id="date" />
                        </div>
                        <button type="submit">Buscar</button>
                    </form>
                </div>
            </section>

            <h2>Nuestros Destinos:</h2>

            <section className="popular-destinations">
                {destinations.map((destination, index) => (
                    <div
                        key={index}
                        className={`destination-card ${index === currentIndex ? 'active' : ''}`}>

                        <img src={destination.image} alt={destination.name} />
                        <div className="content">
                            <h3>{destination.name}</h3>
                            <p>{destination.date}</p>
                        </div>
                    </div>
                ))}

                <div className="video-offer">
                    <video src={videoOffer} autoPlay muted loop></video>
                    <div className="content">
                        <h3>¡Oferta del 80% de Descuento!</h3>
                        <p>¡Viaja a través del mundo</p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;