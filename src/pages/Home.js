import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { keyframes } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const gradientMove = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

function Home() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #1B0938 0%, #220C44 100%)',
        pt: 8
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            textAlign: 'center',
            p: 4,
            borderRadius: '20px',
            position: 'relative',
            backdropFilter: 'blur(10px)',
            background: 'rgba(255, 255, 255, 0.05)',
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 800,
              mb: 3,
              color: '#FF0B7F',
              textShadow: '0 0 20px rgba(255, 11, 127, 0.5)',
              fontFamily: "'Roboto Condensed', sans-serif"
            }}
          >
            TATA IPL 2024
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: '#ffffff',
              opacity: 0.9,
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6,
              textShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            Watch live matches and stay updated with the latest IPL action
          </Typography>
          
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/live')}
            startIcon={<PlayCircleOutlineIcon />}
            sx={{
              mt: 4,
              px: 6,
              py: 2,
              fontSize: '1.2rem',
              backgroundColor: '#FF0B7F',
              borderRadius: '30px',
              textTransform: 'none',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#D1095F',
                transform: 'scale(1.05)',
                boxShadow: '0 0 30px rgba(255, 11, 127, 0.4)',
              }
            }}
          >
            Watch Live
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Home;
