import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Live from './pages/Live';
import Upcoming from './pages/Upcoming';

function App() {
  return (
    <Router>
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', color: 'text.primary' }}>
        <Navbar />
        <Box component="main" sx={{ pt: 2 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/live" element={<Live />} />
            <Route path="/upcoming" element={<Upcoming />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;