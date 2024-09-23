import { Box } from '@mui/material'
import ProductCard from './ProductCard'
import BookDescription from './BookDescription';

function BookDescriptionContainer() {
  const styles = {
    bookDescriptionContainer: {
      display: 'flex',
      maxWidth: '1800px',
      marginRight: 'auto',
      marginLeft: 'auto',
      padding: '150px 80px'
    }
  }

  return (
    <Box sx={styles.bookDescriptionContainer}>
      <ProductCard />
      <BookDescription />
    </Box>
  );
}

export default BookDescriptionContainer;