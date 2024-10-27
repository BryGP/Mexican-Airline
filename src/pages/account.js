import React from 'react';
import '../styles/account.css';
//import profilePlaceholder from '../assets/img/profile-placeholder.jpg';

function Account() {
    return (
        <main className="main-content">
            <header>
                <div className="logo">Mexicana</div>
                <input type="search" placeholder="Buscar en mi cuenta" className="search-bar" />
            </header>
            <section className="account-panel">
                <h2>Mi Cuenta</h2>
                <div className="account-info">
                    <div className="profile-picture">                        
                        
                        <button className="change-photo">Cambiar foto</button>
                    </div>
                    <div className="user-details">
                        <h3>Juan Pérez</h3>
                        <p>Miembro desde: Enero 2020</p>
                        <p>Nivel de Socio: Oro</p>
                        <p>Puntos acumulados: 50,000</p>
                    </div>
                </div>
                <div className="account-sections">
                    <div className="section">
                        <h3>Información Personal</h3>
                        <form className="account-form">
                            <div className="form-group">
                                <label htmlFor="name">Nombre Completo</label>
                                <input type="text" id="name" name="name" defaultValue="Juan Pérez" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Correo Electrónico</label>
                                <input type="email" id="email" name="email" defaultValue="juan.perez@email.com" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Teléfono</label>
                                <input type="tel" id="phone" name="phone" defaultValue="+52 1 55 1234 5678" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="address">Dirección</label>
                                <textarea id="address" name="address" defaultValue="Calle Ejemplo 123, Ciudad de México, México" />
                            </div>
                            <button type="submit" className="save-button">Guardar Cambios</button>
                        </form>
                    </div>
                    <div className="section">
                        <h3>Preferencias de Viaje</h3>
                        <form className="preferences-form">
                            <div className="form-group">
                                <label htmlFor="seat-preference">Preferencia de Asiento</label>
                                <select id="seat-preference" name="seat-preference">
                                    <option value="window">Ventana</option>
                                    <option value="aisle">Pasillo</option>
                                    <option value="middle">Centro</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="meal-preference">Preferencia de Comida</label>
                                <select id="meal-preference" name="meal-preference">
                                    <option value="regular">Regular</option>
                                    <option value="vegetarian">Vegetariana</option>
                                    <option value="vegan">Vegana</option>
                                    <option value="kosher">Kosher</option>
                                </select>
                            </div>
                            <button type="submit" className="save-button">Guardar Preferencias</button>
                        </form>
                    </div>
                </div>
                <div className="account-actions">
                    <button className="action-button">Cambiar Contraseña</button>
                    <button className="action-button">Historial de Viajes</button>
                    <button className="action-button">Gestionar Métodos de Pago</button>
                </div>
            </section>
        </main>
    );
}

export default Account;