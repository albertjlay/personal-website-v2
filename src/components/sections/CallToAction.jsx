import { Typography } from '@mui/material';
import React from 'react';
import peaceHandsMemoji from '../../assets/memojis/peace-hands.png';
import PillButton from '../PillButton';

const CallToAction = () => {
  return (
    <section className='call-to-action'>
      <img src={peaceHandsMemoji} alt='peace hands memoji' />
      <div>
        <Typography variant='h2'>That's it from me folks!</Typography>
        <Typography variant='subtitle1' sx={{ marginBottom: '20px' }}>
          Now, let's hear from you! What exciting projects, opportunities, and stories have you got
          in store for me?
        </Typography>
        <div className='action-buttons'>
          <PillButton
            bordercolor='white'
            href="mailto:albertjlay@gmail.com?subject=Hi%2C%20let's%20work%20together!&body=Tell%20me%20what's%20the%20email%20about%20and%20I'll%20get%20back%20to%20you%20as%20soon%20as%20possible.%0D%0A%0D%0AIn%20the%20meantime%2C%20have%20a%20nice%20day!"
          >
            email
          </PillButton>
          <a
            href='https://albertlaypersonalwebsite.s3.ca-central-1.amazonaws.com/resume-albert-lay.pdf '
            target='_blank'
            rel='noreferrer'
          >
            <PillButton bordercolor='white'>resume</PillButton>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
