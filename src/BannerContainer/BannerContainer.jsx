import { Box, Typography } from '@mui/material'
import Author from '../../src/assets/autorb&w.png'


function BannerContainer() {
  const styles = {
    boxContainer: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    textBackground: {
      display: 'flex',
      backgroundColor: 'black',
      width: '60%'
    },
    textContainer: {
      color: 'white',
      alignItems: 'center',
      display: 'flex',
      marginLeft: '32px'
    },
    imageContainer: {
      width: '40%'
    }
  }
  return (
    <Box sx={styles.boxContainer}>
      <Box sx={styles.textBackground}>
        <Box sx={styles.textContainer}>
          <Typography
            variant='h2'
            align='center'
          >
            Alejandro Cardoso
          </Typography>
        </Box>
      </Box>
      <Box sx={styles.imageContainer}>
        <img src={Author} alt='autor'/>
      </Box>
      
    </Box>
  );
}

export default BannerContainer;