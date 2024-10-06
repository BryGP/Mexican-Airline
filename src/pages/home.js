import React from 'react';
import '../styles/styles.css';
import avionBlanco from '../assets/img/avionblanco.jpg';
import cmdx from '../assets/img/cmdx.jpg';
import china from '../assets/img/china.jpg';
import videoOffer from '../assets/videos/80 OFF.mp4';

const Home = () => {
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
                <div className="destination-card">
                    <img src={cmdx} alt="CMDX - MX" />
                    <div className="content">
                        <h3>CMDX - MX</h3>
                        <p>Sep 21, 2024</p>
                    </div>
                </div>

                <div className="destination-card">
                    <img src={china} alt="China - HGK" />
                    <div className="content">
                        <h3>China - HGK</h3>
                        <p>Nov 12, 2024</p>
                    </div>
                </div>

                <div className="destination-card offer-card">
                    <video src={videoOffer} autoPlay loop muted playsInline className="background-video"></video>
                    <div className="content">
                        <h3>80% Off</h3>
                        <p>¡Viaja a través del mundo!</p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;