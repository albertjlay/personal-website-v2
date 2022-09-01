import { Typography } from '@mui/material';
import React from 'react';
import Socials from '../Socials';
import peaceHandsMemoji from '../../assets/memojis/peace-hands.png';

const Footer = () => {
  return (
    <footer>
      <Typography variant='body1'>&copy; 2022 Albert Lay</Typography>
      <Socials />
    </footer>
  );
};

export default Footer;
