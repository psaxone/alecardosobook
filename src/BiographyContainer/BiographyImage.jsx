import React from 'react'
import { Box } from '@mui/material'
import AuthorBW from '../assets/autorb&w.png'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'

function BiographyImage() {

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));

  const styles = {
    imageProps: {
      marginTop: '4px',
      marginLeft: '64px'
    },
    imagePropsSmall: {
      marginTop: '16px',
    }
  }

  return (
    <Box sx={isMd ? styles.imageProps : styles.imagePropsSmall}>
      <img 
        height='350'
        src={AuthorBW} 
        alt='book' 
      />
    </Box>
  );
}

export default BiographyImage;