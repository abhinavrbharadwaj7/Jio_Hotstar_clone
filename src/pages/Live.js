import React from 'react';
import { Box, Typography } from '@mui/material';
import StreamPlayer from '../components/StreamPlayer';

function Live() {
  return (
    <Box sx={{
      pt: 8,
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1B0938 0%, #220C44 100%)'
    }}>
      <Box sx={{
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100px',
          background: 'linear-gradient(180deg, rgba(27, 9, 56, 0.9) 0%, rgba(27, 9, 56, 0) 100%)',
          zIndex: 1
        }
      }}>
        <Typography 
          variant="h4" 
          sx={{
            position: 'relative',
            zIndex: 2,
            color: '#FF0B7F',
            textAlign: 'center',
            py: 2,
            fontWeight: 'bold',
            fontFamily: "'Roboto Condensed', sans-serif"
          }}
        >
          LIVE: TATA IPL 2025
        </Typography>
        <StreamPlayer />
      </Box>
    </Box>
  );
}

export default Live;