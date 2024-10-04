import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="sidebar">
      <Link to="/" title="Inicio">🏠</Link>
      <Link to="/vuelos" title="Vuelos Disponibles">✈️</Link>
      <Link to="/settings" title="Configuración">⚙️</Link>
      <Link to="/checkin" title="Check-In">✅</Link>
      <Link to="/reservations" title="Reservas">📖</Link>
      <Link to="/details" title="Detalles de Vuelo">📄</Link>
      <Link to="/account" title="Usuario">👤</Link>
    </aside>
  );
}

export default Sidebar;