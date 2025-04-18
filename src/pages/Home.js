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
        background: 'linear-gradient(180deg, #0f1014 0%, #1a1c24 100%)',
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
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(45deg, #00b9f5, #2c5cd1, #00b9f5)',
              backgroundSize: '200% 200%',
              animation: `${gradientMove} 15s ease infinite`,
              opacity: 0.1,
              borderRadius: '20px',
            }
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 800,
              mb: 3,
              background: 'linear-gradient(45deg, #00b9f5, #2c5cd1)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Welcome to IPL Hotstar Clone
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
              px: 4,
              py: 1.5,
              fontSize: '1.2rem',
              background: 'linear-gradient(45deg, #00b9f5 30%, #2c5cd1 90%)',
              borderRadius: '30px',
              textTransform: 'none',
              boxShadow: '0 3px 15px rgba(0,185,245,0.3)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 5px 25px rgba(0,185,245,0.5)',
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
