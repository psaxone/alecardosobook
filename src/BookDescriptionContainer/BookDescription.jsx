import React from 'react'
import { Box, Typography } from '@mui/material'
import BookDescriptionText from '../constants/BookDescription'

function BookDescription() {
  const styles = {
    textContainer: {
      width: '60%'
    }
  }

  return (
    <Box sx={styles.textContainer}>
      <Typography variant='h6'>
        {BookDescriptionText.bookDescription}
      </Typography>
    </Box>
  );
}

export default BookDescription;