import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsExpanded(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <button className="menu-btn" onClick={toggleSidebar}>
        ☰
      </button>
      <aside className={`sidebar ${isExpanded ? 'expanded' : 'collapsed'}`}>
        <Link to="/" title="Inicio">🏠</Link>
        <Link to="/vuelos" title="Vuelos Disponibles">✈️</Link>
        <Link to="/settings" title="Configuración">⚙️</Link>
        <Link to="/checkin" title="Check-In">✅</Link>
        <Link to="/reservations" title="Reservas">📖</Link>
        <Link to="/details" title="Detalles de Vuelo">📄</Link>
        <Link to="/account" title="Usuario">👤</Link>
      </aside>
    </>
  );
}

export default Sidebar;