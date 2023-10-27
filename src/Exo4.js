import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Exo4NavBar';

function App() {
    return (
        <Router>
            <NavBar /> 
            <Routes>
                <Route path="/" element={<h1>Accueil</h1>} />
                <Route path="/profil" element={<h1>Profil</h1>} />
                <Route path="/contact" element={<h1>Contact</h1>} />
            </Routes>
        </Router>
    );
}

export default App;
