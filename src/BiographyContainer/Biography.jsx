import React from 'react'
import { Box, Typography } from '@mui/material'
import BiographyConstant from '../constants/Biography';

function Biography() {
  const styles = {
    textContainer: {
      width: '60%'
    }
  }

  return (
    <Box sx={styles.textContainer}>
      <Typography variant='h6'>
        {BiographyConstant.biography}
      </Typography>
    </Box>
  );
}

export default Biography;