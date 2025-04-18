import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import LiveTvIcon from '@mui/icons-material/LiveTv';

function Navbar() {
  return (
    <AppBar position="fixed" sx={{ 
      background: 'linear-gradient(to bottom, #1B0938 0%, rgba(27, 9, 56, 0.8) 100%)',
      boxShadow: 'none',
    }}>
      <Toolbar>
        <LiveTvIcon sx={{ color: '#FF0B7F', marginRight: '10px', fontSize: '2rem' }} />
        <Typography variant="h5" sx={{ 
          flexGrow: 1, 
          fontWeight: 'bold',
          color: '#FF0B7F',
          fontFamily: "'Roboto Condensed', sans-serif"
        }}>
          JIO IPL
        </Typography>
        <Box sx={{ '& button': { mx: 1 } }}>
          <Button 
            component={Link} 
            to="/"
            sx={{ 
              color: 'white',
              '&:hover': { color: '#FF0B7F' }
            }}
          >
            Home
          </Button>
          <Button 
            component={Link} 
            to="/live"
            sx={{ 
              color: 'white',
              backgroundColor: 'rgba(255, 11, 127, 0.2)',
              '&:hover': { 
                backgroundColor: 'rgba(255, 11, 127, 0.3)',
                color: '#FF0B7F'
              }
            }}
          >
            Live
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;