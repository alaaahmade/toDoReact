import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Title() {
  return (
    <Box>
      <Typography
        variant="h2"
        sx={{
          width: '500px',
          ml: 'calc(50% - 250px)',
          pt: '80px',
          pb: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '5px',
          color: '#D9D9D9',
          fontWeight: 'bolder',
          borderBottom: '2px solid #D9D9D9',
        }}
      >
        <Typography sx={{
          width: '50px',
          height: '2px',
          backgroundColor: '#D9D9D9',
        }}
        />
        {' '}
        TO_DO_APP
        {' '}
        <Typography sx={{
          width: '50px',
          height: '2px',
          backgroundColor: '#D9D9D9',
        }}
        />
      </Typography>
    </Box>
  );
}
