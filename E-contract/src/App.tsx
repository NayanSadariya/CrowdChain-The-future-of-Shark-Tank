import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import ContractPage from './components/ContractPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/contract" element={<ContractPage />} />
      </Routes>
    </Router>
  );
}

export default App;