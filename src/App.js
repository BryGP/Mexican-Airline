import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Home from './pages/home';
import Reservations from './pages/reservations';
import Vuelos from './pages/vuelos';
import Settings from './pages/settings';
import CheckIn from './pages/checkin';
import FlightDetails from './pages/details';
import Account from './pages/account';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/vuelos" element={<Vuelos />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/checkin" element={<CheckIn />} />
          <Route path="/details/:id" element={<FlightDetails />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;