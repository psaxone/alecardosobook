import { Box } from '@mui/material'
import ProductCard from './ProductCard'
import BookDescription from './BookDescription'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'

function BookDescriptionContainer() {

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));

  const styles = {
    bookDescriptionContainer: {
      display: 'flex',
      maxWidth: '1800px',
      marginRight: 'auto',
      marginLeft: 'auto',
      padding: '150px 80px'
    },
    bookDescriptionContainerSmall: {
      display: 'flex',
      maxWidth: '1800px',
      flexDirection: 'column',
      margin: '64px 16px',
      alignItems: 'center'
    }
  }

  return (
    <Box sx={isMd ? styles.bookDescriptionContainer : styles.bookDescriptionContainerSmall }>
      <ProductCard />
      <BookDescription />
    </Box>
  );
}

export default BookDescriptionContainer;