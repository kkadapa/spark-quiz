import React from 'react';
import { CssBaseline, Container, ThemeProvider, createTheme } from '@mui/material';
import Quiz from './components/Quiz';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Quiz />
      </Container>
    </ThemeProvider>
  );
}

export default App;
