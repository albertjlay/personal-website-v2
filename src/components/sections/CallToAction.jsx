import { Typography } from '@mui/material';
import React from 'react';
import { AttentionSeeker, Fade } from 'react-awesome-reveal';
import peaceHandsMemoji from '../../assets/memojis/peace-hands.webp';
import { emailInfo, resumeInfo } from '../../content';
import PillButton from '../PillButton';

const CallToAction = () => {
  return (
    <section className='call-to-action'>
      <AttentionSeeker>
        <img src={peaceHandsMemoji} alt='peace hands memoji' />
      </AttentionSeeker>

      <Fade triggerOnce>
        <div>
          <Typography variant='h2'>That's it from me folks!</Typography>
          <Typography variant='subtitle1' sx={{ marginBottom: '20px' }}>
            Now, let's hear from you! What exciting projects, opportunities, and stories have you
            got in store for me?
          </Typography>
          <div className='action-buttons'>
            <PillButton bordercolor='white' href={emailInfo.url}>
              email
            </PillButton>
            <a href={resumeInfo.url} target='_blank' rel='noreferrer'>
              <PillButton bordercolor='white'>resume</PillButton>
            </a>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default CallToAction;
