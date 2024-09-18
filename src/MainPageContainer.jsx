import { Box } from '@mui/material'
import BannerContainer from './BannerContainer/BannerContainer'
import BookDescriptionContainer from './BookDescriptionContainer/BookDescriptionContainer'


function MainPageContainer() {
  return (
    <Box>
     <BannerContainer />
     <BookDescriptionContainer />
    </Box>
  );
}

export default MainPageContainer;