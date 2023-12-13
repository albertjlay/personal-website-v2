import React from 'react';
import { Typography } from '@mui/material';
import HiMemoji from '../../assets/memojis/hi.webp';
import PillButton from '../PillButton';
import { emailInfo, overviewContent, resumeInfo } from '../../content';
import { AttentionSeeker, Fade } from 'react-awesome-reveal';
import Lottie from 'lottie-react';
import avatar from '../../assets/lotties/avatar.json';

const Home = () => {
  return (
    <Fade triggerOnce>
      <main>
        <div className='intro'>
          <Typography variant='subtitle1'>Hey there!</Typography>
          <Typography variant='h1'>
            I'm <span className='name'>Albert</span>
          </Typography>
          <Typography variant='subtitle1' sx={{ marginBottom: '20px' }}>
            {overviewContent}
          </Typography>
          <div className='call-to-action'>
            <PillButton href={emailInfo.url}>say hi!</PillButton>
            <a href={resumeInfo.url} target='_blank' rel='noreferrer'>
              <PillButton>resume</PillButton>
            </a>
          </div>
        </div>
        <AttentionSeeker cascade>
          <Lottie animationData={avatar} loop={true} />;
        </AttentionSeeker>
      </main>
    </Fade>
  );
};

export default Home;
