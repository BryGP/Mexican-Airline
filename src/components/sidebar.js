import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css'; // Asegúrate de que está importando el CSS correcto

function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <button className="menu-btn" onClick={toggleSidebar}>
        {isExpanded ? '⬅️' : '➡️'}
      </button>
      <aside className={`sidebar ${isExpanded ? 'expanded' : 'collapsed'}`} aria-label="Barra lateral de navegación">
        <Link to="/" title="Inicio" aria-label="Inicio">🏠</Link>
        <Link to="/vuelos" title="Vuelos Disponibles" aria-label="Vuelos Disponibles">✈️</Link>
        <Link to="/settings" title="Configuración" aria-label="Configuración">⚙️</Link>
        <Link to="/checkin" title="Check-In" aria-label="Check-In">✅</Link>
        <Link to="/reservations" title="Reservas" aria-label="Reservas">📖</Link>
        <Link to="/details" title="Detalles de Vuelo" aria-label="Detalles de Vuelo">📄</Link>
        <Link to="/account" title="Usuario" aria-label="Usuario">👤</Link>
      </aside>
    </>
  );
}

export default Sidebar;
