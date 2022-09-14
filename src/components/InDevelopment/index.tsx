import { Handyman } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';
import React from 'react';

const InDevelopment: React.FC = () => {
  return <Grid display="flex" flexDirection="column" justifyContent="center" alignItems="center" sx={{ width: '100vw', height: 'calc(100vh - 60px)' }}>
    <Handyman sx={{ fontSize: 80 }} />
    <Typography sx={{ fontSize: 56}}>Em desenvolvimento</Typography>
  </Grid>;
}

export default InDevelopment;