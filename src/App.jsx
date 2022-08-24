import React from 'react';
import { LightTheme } from './Themes';
import Nav from './components/sections/Nav';
import Home from './components/sections/Home';
import './style.scss';
import { ThemeProvider } from '@emotion/react';
import About from './components/sections/About';

function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <div className='App'>
        <Nav />
        <Home />
        <About />
      </div>
    </ThemeProvider>
  );
}

export default App;
