import { Box } from '@mui/material'
import BannerContainer from './BannerContainer/BannerContainer'
import BookDescriptionContainer from './BookDescriptionContainer/BookDescriptionContainer'
import Footer from './Footer/Footer'
import MenuAppBar from './AppBar/AppBar';


function MainPageContainer() {
  return (
    <Box>
      <MenuAppBar />
      <BannerContainer />
      <BookDescriptionContainer />
      <Footer />
    </Box>
  );
}

export default MainPageContainer;