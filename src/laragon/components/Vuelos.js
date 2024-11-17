import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Vuelos() {
  const [vuelos, setVuelos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost/mexican-airline-api/vuelos.php')
      .then(response => {
        setVuelos(response.data);
      })
      .catch(error => {
        console.error('Error fetching vuelos:', error);
      });
  }, []);

  return (
    <div>
      <h2>Vuelos Disponibles</h2>
      {vuelos.map(vuelo => (
        <div key={vuelo.id}>
          <h3>{vuelo.origen} - {vuelo.destino}</h3>
          <p>Fecha: {vuelo.fecha_salida}</p>
          <p>Precio: ${vuelo.precio}</p>
        </div>
      ))}
    </div>
  );
}

export default Vuelos;