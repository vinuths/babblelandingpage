import React from 'react';
import { Backdrop, CircularProgress } from '@mui/material';

const MinimalLoader = ({ open }) => {
  return (
    <Backdrop
      sx={{
        color: '#fff',
        zIndex: 9999,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
      }}
      open={open}
    >
      <CircularProgress color="primary" size={60} />
    </Backdrop>
  );
};

export default MinimalLoader;