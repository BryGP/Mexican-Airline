import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

// Miselanea
import avionBlanco from '../assets/img/avionblanco.jpg';
import logo from '../assets/img/logo.png';
import mapa from '../assets/img/mapa.png';

// Files de imagenes y video a utilizar en el catalogo
import acapulco from '../assets/img/acapulco.jpg';
import campeche from '../assets/img/campeche.jpg';
import chetumal from '../assets/img/chetumal.jpg';
import tamaulipas from '../assets/img/tamaulipas.jpg';
import jalisco from '../assets/img/jalisco.jpg';
import oaxaca from '../assets/img/oaxaca.jpg';
import mazatlan from '../assets/img/mazatlan.jpg';
import merida from '../assets/img/merida.jpg';
import monterey from '../assets/img/monterey.jpg';
import nuevol from '../assets/img/nuevol.jpg';
import chiapas from '../assets/img/palenque.jpg';
import ptovall from '../assets/img/ptovall.jpg';
import tijuana from '../assets/img/tijuana.jpg';
import tulum from '../assets/img/tulum.jpg';
import uruapan from '../assets/img/uruapan.jpg';
import josecabo from '../assets/img/josecabo.jpg';
import tabasco from '../assets/img/villahermosa.jpg';
import zihuatanejo from '../assets/img/zihuatanejo.jpg';

const Home = () => {
    const destinations = [
        { id: 1, name: 'Guerrero - Acapulco', image: acapulco },
        { id: 2, name: 'Campeche - Campeche', image: campeche },
        { id: 3, name: 'Quintana Roo - Chetumal', image: chetumal },
        { id: 4, name: 'Tamaulipas - CD Victoria', image: tamaulipas },
        { id: 5, name: 'Guadalajara - Jalisco', image: jalisco },
        { id: 6, name: 'Oaxaca Ixtepec', image: oaxaca },
        { id: 7, name: 'Sinaloa - Mazatlán', image: mazatlan },
        { id: 8, name: 'Yucatán - Mérida', image: merida },
        { id: 9, name: 'Nuevo León - Monterrey', image: monterey },
        { id: 10, name: 'Tamaulipas - Nuevo Laredo', image: nuevol },
        { id: 11, name: 'Chiapas - Palenque', image: chiapas },
        { id: 12, name: 'Jalisco - Puerto Vallarta', image: ptovall },
        { id: 13, name: 'Baja California - Tijuana', image: tijuana },
        { id: 14, name: 'Quintana Roo - Tulum', image: tulum },
        { id: 15, name: 'Michoacán - Uruapan', image: uruapan },
        { id: 16, name: 'Baja California Sur - San José del Cabo', image: josecabo },
        { id: 17, name: 'Tabasco - Villahermosa', image: tabasco },
        { id: 18, name: 'Guerrero - Zihuatanejo', image: zihuatanejo },
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
            </header>

            <section className="flight-booking">
                <div className="background-image" style={{ backgroundImage: `url(${avionBlanco})` }}></div>
                <div className="content">
                    <h2>Planea tu viaje</h2>
                    <form className="flight-form">
                        <div className="form-group">
                            <label htmlFor="origin">Origen</label>
                            <input type="text" id="origin" placeholder="CDMX (MX)" />
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
                        </div>
                    </div>
                ))}
            </section>

            <section className="map-section">
                <h2 className="mapa"> Conoce nuestro mapa:</h2>
                <div className="map-container">
                    <img src={mapa} alt="Mapa de destinos" className="map-img" />
                </div>
            </section>
        </main >
    );
};

export default Home;