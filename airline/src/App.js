import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Agrega más rutas según lo necesites */}
      </Routes>
    </Router>
  );
}

export default App;
