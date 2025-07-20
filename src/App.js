import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import IPODetails from './pages/IPODetails';
import AddIPO from './pages/AddIPO';
import EditIPO from './pages/EditIPO';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/ipo/:id" element={<IPODetails />} />
        <Route path="/add" element={<AddIPO />} />
        <Route path="/edit/:id" element={<EditIPO />} />
      </Routes>
    </Router>
  );
}

export default App;
