import React from 'react';
import { Typography } from '@mui/material';
import HiMemoji from '../../assets/memojis/hi.png';
import PillButton from '../PillButton';

const Home = () => {
  return (
    <main>
      <div className='intro'>
        <Typography variant='subtitle1'>Hey there!</Typography>
        <Typography variant='h1'>
          I'm <span className='name'>Albert</span>
        </Typography>
        <Typography variant='subtitle1' sx={{ marginBottom: '20px' }}>
          It’s great having you here. Come take a look around! If you have any questions or just
          want to chat, don’t be shy and shoot me a message.
        </Typography>
        <div className='call-to-action'>
          <PillButton href="mailto:albertjlay@gmail.com?subject=Hi%2C%20let's%20work%20together!&body=Tell%20me%20what's%20the%20email%20about%20and%20I'll%20get%20back%20to%20you%20as%20soon%20as%20possible.%0D%0A%0D%0AIn%20the%20meantime%2C%20have%20a%20nice%20day!">
            say hi!
          </PillButton>
          <PillButton href='https://albertlaypersonalwebsite.s3.ca-central-1.amazonaws.com/resume-albert-lay.pdf'>
            resume
          </PillButton>
        </div>
      </div>
      <img src={HiMemoji} alt='Memoji of me saying hi!' />
    </main>
  );
};

export default Home;
