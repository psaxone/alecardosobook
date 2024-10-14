import { Box, Divider } from '@mui/material'
import BannerContainer from './BannerContainer/BannerContainer'
import BookDescriptionContainer from './BookDescriptionContainer/BookDescriptionContainer'
import Footer from './Footer/Footer'
import MenuAppBar from './AppBar/AppBar';
import BiographyContainer from './BiographyContainer/BiographyContainer';


function MainPageContainer() {
  return (
    <Box>
      <MenuAppBar />
      <BannerContainer />
      <BookDescriptionContainer />
      <Divider variant='middle' />
      <BiographyContainer />
      <Footer />
    </Box>
  );
}

export default MainPageContainer;