import { createTheme } from '@mui/material/styles';

export const LightTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#5e8e44',
    },
    secondary: {
      main: '#e08b76',
    },
    background: {
      default: '#fbf9f9',
    },
    text: {
      primary: '#000',
    },
  },
  typography: {
    fontFamily: 'sans-serif',
    h1: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 300,
    },
    subtitle1: {
      fontSize: '1.2rem',
      fontWeight: 300,
    },
    body1: {
      fontWeight: 300,
    },
    button: {
      fontWeight: 300,
    },
  },
});
