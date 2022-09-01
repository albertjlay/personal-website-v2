import React from 'react';
import { LightTheme } from './Themes';
import Nav from './components/sections/Nav';
import Home from './components/sections/Home';
import './style.scss';
import { ThemeProvider } from '@emotion/react';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Footer from './components/sections/Footer';
import CallToAction from './components/sections/CallToAction';

function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <div className='App'>
        <Nav />
        <Home />
        <About />
        <Experience />
        <Projects />
        <CallToAction />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
