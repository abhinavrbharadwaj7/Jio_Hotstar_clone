import React from 'react';
import { Card, CardContent, Typography, Grid, Avatar, Skeleton } from '@mui/material';
import { SportsCricket } from '@mui/icons-material';

function LiveMatch({ match }) {
  if (!match) {
    return (
      <Card sx={{ maxWidth: 600, margin: '20px auto', backgroundColor: '#2a2a2a', color: 'white' }}>
        <CardContent>
          <Skeleton variant="rectangular" height={200} />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card sx={{ maxWidth: 600, margin: '20px auto', backgroundColor: '#2a2a2a', color: 'white' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom align="center" color="primary">
          LIVE NOW
        </Typography>
        <Grid container alignItems="center" justifyContent="center" spacing={3}>
          <Grid item xs={5} align="right">
            <Avatar src={match.team1.logo} sx={{ width: 60, height: 60 }} />
            <Typography variant="h6">{match.team1.name}</Typography>
            <Typography variant="h4">{match.team1.score}</Typography>
          </Grid>
          <Grid item xs={2} align="center">
            <SportsCricket fontSize="large" />
            <Typography variant="body2">vs</Typography>
          </Grid>
          <Grid item xs={5} align="left">
            <Avatar src={match.team2.logo} sx={{ width: 60, height: 60 }} />
            <Typography variant="h6">{match.team2.name}</Typography>
            <Typography variant="h4">{match.team2.score}</Typography>
          </Grid>
        </Grid>
        <Typography variant="body2" align="center" mt={2}>
          {match.venue} • {match.status}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default LiveMatch;