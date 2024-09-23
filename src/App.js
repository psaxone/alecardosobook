import MainPageContainer from './MainPageContainer'
import { createTheme, ThemeProvider } from '@mui/material'

const theme = createTheme({
  typography: {
    fontFamily: [
      'Tinos'
    ].join(','),
  },});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <MainPageContainer />
    </ThemeProvider>
  );
}

export default App;
