import { Grid } from '@mui/material';
import React from 'react';

const ModalBG: React.FC<any> = ({ children }) => {
  return <Grid sx={{ overflow: 'hidden', position: 'absolute', height: '100vh', width: '100vw', backgroundColor: '#56CCF24F', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>{children}</Grid>;
}

export default ModalBG;