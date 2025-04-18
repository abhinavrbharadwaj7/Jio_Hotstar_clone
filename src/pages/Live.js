import React from 'react';
import { Box, Typography } from '@mui/material';
import StreamPlayer from '../components/StreamPlayer';

function Live() {
  return (
    <Box sx={{
      pt: 8,
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #0f1014 0%, #1a1c24 100%)'
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
          background: 'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
          zIndex: 1
        }
      }}>
        <Typography 
          variant="h4" 
          sx={{
            position: 'relative',
            zIndex: 2,
            color: '#00b9f5',
            textAlign: 'center',
            py: 2,
            fontWeight: 'bold'
          }}
        >
          Watch Live IPL Match
        </Typography>
        <StreamPlayer />
      </Box>
    </Box>
  );
}

export default Live;