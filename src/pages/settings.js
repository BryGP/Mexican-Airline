import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import '../styles/settings.css';

function Settings() {
    // Estado para las configuraciones
    const [settings, setSettings] = useState({
        language: 'es',
        currency: 'MXN',
        timeFormat: '12',
        dateFormat: 'dd/mm/yyyy',
        theme: 'light',
        highContrast: false,
        largerText: false,
    });

    // Cargar configuraciones desde localStorage al inicio
    useEffect(() => {
        document.body.className = settings.theme === 'dark' ? 'dark-theme' : 'light-theme'; // Aplicar tema al cargar
        const savedSettings = JSON.parse(localStorage.getItem('siteSettings'));
        if (savedSettings) {
            setSettings(savedSettings);
            applyTheme(savedSettings.theme);
        }
    }, [settings.theme]);

    // Guardar configuraciones al hacer submit
    const handleSave = (e) => {
        e.preventDefault();
        localStorage.setItem('siteSettings', JSON.stringify(settings));
        applyTheme(settings.theme); // Aplicar tema dinámicamente
        applyAccessibilityOptions(settings); // Aplicar opciones de accesibilidad
        alert('¡Cambios guardados!');
    };

    // Manejar cambios en los inputs
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setSettings((prevSettings) => ({
            ...prevSettings,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    // Aplicar tema dinámicamente
    const applyTheme = (theme) => {
        document.body.className = ''; // Reiniciar clases
        if (theme === 'dark') document.body.classList.add('dark-theme');
        if (theme === 'light') document.body.classList.add('light-theme');
    };

    const applyAccessibilityOptions = (settings) => {
        if (settings.highContrast) {
            document.body.classList.add('high-contrast');
        } else {
            document.body.classList.remove('high-contrast');
        }

        if (settings.largerText) {
            document.body.style.fontSize = '18px'; // Aumenta el tamaño del texto
        } else {
            document.body.style.fontSize = '16px'; // Tamaño normal
        }
    };
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

            <section className="settings-panel">
                <h2>Configuración General del Sitio</h2>
                <form className="settings-form" onSubmit={handleSave}>
                    <div className="form-group">
                        <label htmlFor="language">Idioma del Sitio</label>
                        <select id="language" name="language" value={settings.language} onChange={handleChange}>
                            <option value="es">Español</option>
                            <option value="en">English</option>
                            <option value="fr">Français</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="currency">Moneda Predeterminada</label>
                        <select id="currency" name="currency" value={settings.currency} onChange={handleChange}>
                            <option value="MXN">Peso Mexicano (MXN)</option>
                            <option value="USD">US Dollar (USD)</option>
                            <option value="EUR">Euro (EUR)</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="timeFormat">Formato de Hora</label>
                        <select id="timeFormat" name="timeFormat" value={settings.timeFormat} onChange={handleChange}>
                            <option value="24">24 horas</option>
                            <option value="12">12 horas (AM/PM)</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="dateFormat">Formato de Fecha</label>
                        <select id="dateFormat" name="dateFormat" value={settings.dateFormat} onChange={handleChange}>
                            <option value="dd/mm/yyyy">DD/MM/YYYY</option>
                            <option value="mm/dd/yyyy">MM/DD/YYYY</option>
                            <option value="yyyy-mm-dd">YYYY-MM-DD</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="theme">Tema del Sitio</label>
                        <select id="theme" name="theme" value={settings.theme} onChange={handleChange}>
                            <option value="light">Claro</option>
                            <option value="dark">Oscuro</option>
                            <option value="auto">Automático (según sistema)</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="accessibility">Opciones de Accesibilidad</label>
                        <div className="checkbox-group">
                            <input
                                type="checkbox"
                                id="high-contrast"
                                name="highContrast"
                                checked={settings.highContrast}
                                onChange={handleChange}
                            />
                            <label htmlFor="high-contrast">Alto contraste</label>
                        </div>
                        <div className="checkbox-group">
                            <input
                                type="checkbox"
                                id="larger-text"
                                name="largerText"
                                checked={settings.largerText}
                                onChange={handleChange}
                            />
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