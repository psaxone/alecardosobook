import { Box, Typography } from '@mui/material'
import Author from '../../src/assets/BannerB&W.png'


function BannerContainer() {
  const styles = {
    textContainer: {
      color: 'white',
      alignItems: 'center',
      display: 'flex',
      marginLeft: '32px'
    },
    boxContainer: {
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      padding: '250px 0px',
      backgroundImage: `url(${Author})`,
      backgroundAttachment: 'scroll',
      backgroundPosition: 'center'
    }
  }
  return (
  <Box sx={styles.boxContainer}>
      <Box sx={styles.textContainer}>
        <Typography
          variant='h2'
        >
          Alejandro Cardoso
        </Typography>
      </Box>
    </Box>
  );
}

export default BannerContainer;