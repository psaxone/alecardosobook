import MainPageContainer from './MainPageContainer'
import { createTheme, ThemeProvider } from '@mui/material'

const theme = createTheme({
  typography: {
    fontFamily: [
      'Tinos'
    ].join(','),
  },
  palette: {
    primary: {
      main:'#5f6263',
      light: '#838c89',
      dark: '#292b2c'
    },
    secondary: {
      main: '#979999',
      light: '#acb4b1',
      dark: '#342c2f'
    },
    background: '#e8e8e9'
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <MainPageContainer />
    </ThemeProvider>
  );
}

export default App;
