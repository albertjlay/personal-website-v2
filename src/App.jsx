import React from 'react';
import { LightTheme } from './Themes';
import Nav from './components/Nav';
import Home from './components/Home';
import './style.scss';
import { ThemeProvider } from '@emotion/react';

function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <div className='App'>
        <Nav />
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
