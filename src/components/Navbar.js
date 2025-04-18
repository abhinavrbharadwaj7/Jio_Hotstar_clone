import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';

function Navbar() {
  return (
    <AppBar position="fixed" sx={{ 
      background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
      boxShadow: 'none',
      backdropFilter: 'blur(5px)'
    }}>
      <Toolbar>
        <SportsCricketIcon sx={{ color: '#00b9f5', marginRight: '10px', fontSize: '2rem' }} />
        <Typography variant="h5" sx={{ 
          flexGrow: 1, 
          fontWeight: 'bold',
          color: '#00b9f5'
        }}>
          Disney+ Hotstar
        </Typography>
        <Box sx={{ '& button': { mx: 1 } }}>
          <Button 
            component={Link} 
            to="/"
            sx={{ 
              color: 'white',
              '&:hover': { color: '#00b9f5' }
            }}
          >
            Home
          </Button>
          <Button 
            component={Link} 
            to="/live"
            sx={{ 
              color: 'white',
              '&:hover': { color: '#00b9f5' }
            }}
          >
            Live
          </Button>
          <Button 
            component={Link} 
            to="/upcoming"
            sx={{ 
              color: 'white',
              '&:hover': { color: '#00b9f5' }
            }}
          >
            Schedule
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;