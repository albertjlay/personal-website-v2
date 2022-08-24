import React from 'react';
import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import laptopMemoji from '../../assets/memojis/laptop.png';
import shrugMemoji from '../../assets/memojis/shrug.png';
import partyMemoji from '../../assets/memojis/party.png';

const aboutContent = [
  {
    header: 'I code.',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil harum quos mollitia qui. Excepturi magnam quia dolore alias neque eaque, non suscipit sed accusantium. Accusamus provident amet vitae. Impedit, eum?',
    image: laptopMemoji,
    alt: 'Memoji of me working on my laptop.',
  },
  {
    header: 'I (try) to have fun!',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil harum quos mollitia qui. Excepturi magnam quia dolore alias neque eaque, non suscipit sed accusantium. Accusamus provident amet vitae. Impedit, eum?',
    image: partyMemoji,
    alt: 'Memoji of me partying.',
  },
  {
    header: "I'm not sure really...",
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil harum quos mollitia qui. Excepturi magnam quia dolore alias neque eaque, non suscipit sed accusantium. Accusamus provident amet vitae. Impedit, eum?',
    image: shrugMemoji,
    alt: 'Memoji of me shrugging.',
  },
];

const About = () => {
  return (
    <section className='about'>
      <svg className='top-wave' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M0 77.6768L50.4 92.7341C100.8 107.628 201.6 137.742 302.4 124.322C403.2 110.901 504 54.2724 604.8 54.7634C705.6 55.2544 806.4 113.192 907.2 121.539C1008 130.05 1108.8 89.1334 1209.6 60.8191C1310.4 32.3411 1411.2 16.6291 1461.6 8.6094L1512 0.753418V352.637H1461.6C1411.2 352.637 1310.4 352.637 1209.6 352.637C1108.8 352.637 1008 352.637 907.2 352.637C806.4 352.637 705.6 352.637 604.8 352.637C504 352.637 403.2 352.637 302.4 352.637C201.6 352.637 100.8 352.637 50.4 352.637H0V77.6768Z'
          fill='#E3E4E0'
        />
      </svg>
      <div className='about-body'>
        <Typography variant='h2'>Who Am I?</Typography>
        <Typography variant='subtitle1'>
          That's a multi-hour conversation, but here's the gist.
        </Typography>
        {aboutContent.map((content, idx) => {
          const Text = () => (
            <Container>
              <Typography variant='h3'>{content.header}</Typography>
              <Typography variant='body1'>{content.body}</Typography>
            </Container>
          );
          const Image = () => <img src={content.image} alt={content.alt} />;
          return (
            <Container key={content.header} className='about-content'>
              {idx % 2 ? <Text /> : <Image />}
              {idx % 2 ? <Image /> : <Text />}
            </Container>
          );
        })}
      </div>
      <svg
        className='bottom-wave'
        width='1512'
        viewBox='0 0 1512 274'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M0 248.773L42 248.282C84 247.628 168 246.646 252 227.169C336 207.857 420 170.213 504 172.996C588 175.614 672 218.822 756 225.533C840 232.407 924 202.947 1008 178.888C1092 154.992 1176 136.334 1260 153.028C1344 169.722 1428 221.441 1470 247.464L1512 273.323V0H1470C1428 0 1344 0 1260 0C1176 0 1092 0 1008 0C924 0 840 0 756 0C672 0 588 0 504 0C420 0 336 0 252 0C168 0 84 0 42 0H0V248.773Z'
          fill='#E3E4E0'
        />
      </svg>
    </section>
  );
};

export default About;
