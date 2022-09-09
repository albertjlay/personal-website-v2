import React from 'react';
import { Typography } from '@mui/material';
import HiMemoji from '../../assets/memojis/hi.png';
import PillButton from '../PillButton';
import { emailInfo, resumeInfo } from '../../content';
import { Fade, JackInTheBox } from 'react-awesome-reveal';

const Home = () => {
  return (
    <Fade>
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
            <PillButton href={emailInfo.url}>say hi!</PillButton>
            <a href={resumeInfo.url} target='_blank' rel='noreferrer'>
              <PillButton>resume</PillButton>
            </a>
          </div>
        </div>
        <JackInTheBox cascade>
          <img src={HiMemoji} alt='Memoji of me saying hi!' />
        </JackInTheBox>
      </main>
    </Fade>
  );
};

export default Home;
