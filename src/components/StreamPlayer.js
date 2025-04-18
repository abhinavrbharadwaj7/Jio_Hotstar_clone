import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const PlayerWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  height: '75vh',
  position: 'relative',
  backgroundColor: '#0c111b',
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
  '& iframe': {
    width: '100%',
    height: '100%',
    border: 'none'
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '100px',
    background: 'linear-gradient(0deg, #0c111b 0%, transparent 100%)',
    pointerEvents: 'none'
  }
}));

const StreamPlayer = () => (
  <PlayerWrapper>
    <iframe
      src="https://user65873.hls-video.net/hls/token/a3f0c81db39d64f85b6f6a5cfaa1b2ce/stream.m3u8"
      title="Live Stream"
      allowFullScreen
    />
  </PlayerWrapper>
);

export default StreamPlayer;
