import { Box } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import Biography from './Biography'
import BiographyImage from './BiographyImage';

function BiographyContainer() {

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));

  const styles = {
    BiographyContainer: {
      display: 'flex',
      maxWidth: '1800px',
      marginRight: 'auto',
      marginLeft: 'auto',
      padding: '150px 80px'
    },
    BiographyContainerSmall: {
      display: 'flex',
      maxWidth: '1800px',
      flexDirection: 'column',
      margin: '64px 16px',
      alignItems: 'center'
    }
  }

  return (
    <Box sx={isMd ? styles.BiographyContainer : styles.BiographyContainerSmall }>
      <Biography />
      <BiographyImage />
    </Box>
  );
}

export default BiographyContainer;