import React from 'react';
import { AppBar, Toolbar, Box, Button } from '@mui/material';
import logo from '../assets/logo.png';
import Socials from './Socials';

const sections = ['about', 'experiences', 'projects', 'resume'];

const NavBar = () => {
  return (
    <AppBar position='sticky' color='transparent' sx={{ boxShadow: 'none' }}>
      <Toolbar>
        <img src={logo} alt="Albert Lay's personal logo" className='logo' sx={{ flexGrow: 1 }} />
        <Box sx={{ flexGrow: 1 }}>
          {sections.map(s => (
            <Button
              key={s}
              sx={{
                color: '#000',
                textTransform: 'lowercase',
                '&:hover': { backgroundColor: 'transparent' },
                fontSize: '1.2rem',
                padding: '0 30px',
              }}
            >
              {s}
            </Button>
          ))}
        </Box>
        <Socials justifyContent='flex-end' sx={{ flexGrow: 0 }} />
      </Toolbar>
    </AppBar>

    // <div>
    // <div className="left">
    //   <img src={logo} alt="Logo for albertjlay.com" />
    //   <nav>

    //   </nav>
    // </div>
    // <div className="right"></div>
    // </div>
  );
};

export default NavBar;
