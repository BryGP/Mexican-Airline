import React from 'react';
import '../styles/settings.css';

function Settings() {
    return (
        <main className="main-content">
            <header>
                <div className="logo">Mexicana</div>
                <input type="search" placeholder="Buscar configuraciones" className="search-bar" />
            </header>
            <section className="settings-panel">
                <h2>Configuración General del Sitio</h2>
                <form className="settings-form">
                    <div className="form-group">
                        <label htmlFor="site-language">Idioma del Sitio</label>
                        <select id="site-language" name="site-language">
                            <option value="es">Español</option>
                            <option value="en">English</option>
                            <option value="fr">Français</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="default-currency">Moneda Predeterminada</label>
                        <select id="default-currency" name="default-currency">
                            <option value="MXN">Peso Mexicano (MXN)</option>
                            <option value="USD">US Dollar (USD)</option>
                            <option value="EUR">Euro (EUR)</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="time-format">Formato de Hora</label>
                        <select id="time-format" name="time-format">
                            <option value="24">24 horas</option>
                            <option value="12">12 horas (AM/PM)</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="date-format">Formato de Fecha</label>
                        <select id="date-format" name="date-format">
                            <option value="dd/mm/yyyy">DD/MM/YYYY</option>
                            <option value="mm/dd/yyyy">MM/DD/YYYY</option>
                            <option value="yyyy-mm-dd">YYYY-MM-DD</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="site-theme">Tema del Sitio</label>
                        <select id="site-theme" name="site-theme">
                            <option value="light">Claro</option>
                            <option value="dark">Oscuro</option>
                            <option value="auto">Automático (según sistema)</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="accessibility">Opciones de Accesibilidad</label>
                        <div className="checkbox-group">
                            <input type="checkbox" id="high-contrast" name="high-contrast" />
                            <label htmlFor="high-contrast">Alto contraste</label>
                        </div>
                        <div className="checkbox-group">
                            <input type="checkbox" id="larger-text" name="larger-text" />
                            <label htmlFor="larger-text">Texto más grande</label>
                        </div>
                    </div>
                    <button type="submit" className="save-button">Guardar Cambios</button>
                </form>
            </section>
        </main>
    );
}

export default Settings;