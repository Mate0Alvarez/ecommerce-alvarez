import React from 'react'
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const CircularLoading = () => {
  return (
    <Box sx={{ mt: "55px", display: "flex" }}>
      <CircularProgress color="info" />
    </Box>
  )
}

export default CircularLoading;