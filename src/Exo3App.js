import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AffichageProfil from './Exo3AffichageProfil';
import { profiles } from './Exo3profiles'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/:id" element={<AffichageProfil profiles={profiles} />} />
      </Routes>
    </Router>
  );
}

export default App;
