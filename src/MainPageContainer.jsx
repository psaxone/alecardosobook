import { Box } from '@mui/material'
import BannerContainer from './BannerContainer/BannerContainer'
import BookDescriptionContainer from './BookDescriptionContainer/BookDescriptionContainer'
import Footer from './Footer/Footer'


function MainPageContainer() {
  return (
    <Box>
     <BannerContainer />
     <BookDescriptionContainer />
     <Footer />
    </Box>
  );
}

export default MainPageContainer;