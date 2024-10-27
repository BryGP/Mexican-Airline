import React, { useState, useEffect } from 'react';
import '../styles/styles.css';
import avionBlanco from '../assets/img/avionblanco.jpg';

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
        { id: 1, name: 'CMDX - MX', date: 'Sep 21, 2024', image: cmdx },
        { id: 2, name: 'China - HGK', date: 'Nov 12, 2024', image: china },
        { id: 3, name: 'Paris - FR', date: 'Dec 24, 2024', image: paris },
        { id: 4, name: 'Tokyo - JP', date: 'Jan 15, 2025', image: tokyo },
        { id: 5, name: 'New York - USA', date: 'Feb 28, 2025', image: newyork },
        { id: 6, name: 'Rio - BR', date: 'Mar 10, 2025', image: rio }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Cambiar de imagen cada 5 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((currentIndex + 1) % destinations.length);
        }, 5000); // 5000ms = 5s

        return () => clearInterval(interval);
    }, []);

    return (
        <main className="main-content">
            <header>
                <div className="logo">Mexicana</div>
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

            <h2>Popularidad en Viajes:</h2>

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