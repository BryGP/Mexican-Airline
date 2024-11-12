import React, { useState, useEffect } from 'react';
import { getFlights } from '../services/api';

const FlightSearch = () => {
    const [flights, setFlights] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFlights = async () => {
            try {
                const data = await getFlights();
                setFlights(data);
                setLoading(false);
            } catch (err) {
                setError('Error fetching flights. Please try again later.');
                setLoading(false);
            }
        };

        fetchFlights();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h2>Available Flights</h2>
            <ul>
                {flights.map(flight => (
                    <li key={flight.id}>{flight.destination} - {flight.departureTime}</li>
                ))}
            </ul>
        </div>
    );
};

export default FlightSearch;