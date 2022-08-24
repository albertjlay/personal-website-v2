import { createTheme } from '@mui/material/styles';

export const LightTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#ffc152',
    },
    secondary: {
      main: '#e3e4e0',
    },
    background: {
      default: '#fbf9f9',
    },
    text: {
      primary: '#000',
    },
  },
  typography: {
    fontFamily: '"Oswald", sans-serif',
    h1: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: '1.2rem',
    },
    button: {
      fontWeight: 300,
    },
  },
});
