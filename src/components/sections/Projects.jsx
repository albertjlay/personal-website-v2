import { Card, CardActions, CardContent, CardMedia, Typography, Paper } from '@mui/material';
import React from 'react';
import cc3kImage from '../../assets/projects/cc3k.webp';
import covidWatchdogImage from '../../assets/projects/covid-watchdog.webp';
import nggImage from '../../assets/projects/ngg.webp';
import personalWebsiteImage from '../../assets/projects/personal-website.webp';
import pokedexImage from '../../assets/projects/pokedex.webp';
import statsMadeEasyImage from '../../assets/projects/statsmadeeasy.webp';
import tracenextImage from '../../assets/projects/tracenext.webp';
import tictactoeImage from '../../assets/projects/tic-tac-toe.webp';
import { display } from '@mui/system';

const Projects = () => {
  return (
    <section className='projects'>
      <Typography variant='h2'>What have I been up to?</Typography>
      <Typography variant='subtitle1'>
        Stuffs I built when I was frantically looking for my first job, extremely bored, or in the
        rare cases where I'm feeling particularly inspired.
      </Typography>
      <div className='project-cards'>
        {projectData.map(item => (
          <a className='project-card' href={item.url} target='_blank' rel='noreferrer'>
            <Paper
              sx={{
                width: '250px',
                height: '400px',
                borderRadius: '5px',
                backgroundImage: `url(${item.img})`,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '10px',

                '&:hover': {
                  backgroundColor: '#ffc152',
                  backgroundImage: 'none',
                },
              }}
            >
              <Typography
                sx={{
                  backgroundColor: '#fbf9f9',
                  borderRadius: '50%',
                  width: '200px',
                  height: '200px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: '20px',
                }}
                variant='h4'
              >
                {item.title}
              </Typography>
            </Paper>
          </a>
          // <Card sx={{ display: 'flex', textAlign: 'left' }}>
          //   <CardMedia sx={{ width: '300px' }} component='img' alt={item.title} image={item.img} />
          //   <CardContent>
          //     <Typography gutterBottom variant='h4' component='div'>
          //       Lizard
          //     </Typography>
          //     <Typography variant='body2' color='text.secondary'>
          //       Lizards are a widespread group of squamate reptiles, with over 6,000 species,
          //       ranging across all continents except Antarctica
          //     </Typography>
          //     <CardActions>
          //       <a>Hi</a>
          //     </CardActions>
          //   </CardContent>
          // </Card>
        ))}
      </div>

      {/* <ImageList cols={3} rowHeight={350}>
        {projectData.map(item => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              alt={item.title}
              loading='lazy'
            />
          </ImageListItem>
        ))}
      </ImageList> */}
    </section>
  );
};

const projectData = [
  {
    img: cc3kImage,
    title: 'CC3K',
    url: '',
  },
  {
    img: covidWatchdogImage,
    title: 'Covid Watchdog',
    url: 'https://github.com/jaredjhe/Covid-Watchdog',
  },
  {
    img: tictactoeImage,
    title: 'Tic Tac Toe',
    url: 'https://github.com/albertjlay/tic-tac-toe',
  },
  {
    img: personalWebsiteImage,
    title: 'Personal Website',
    url: '',
  },
  {
    img: pokedexImage,
    title: 'Pokedex',
    url: 'https://github.com/albertjlay/pokedex',
  },
  {
    img: tracenextImage,
    title: 'TraceNext',
    url: '',
  },
  {
    img: statsMadeEasyImage,
    title: 'Stats Made Easy',
    url: 'https://github.com/albertjlay/statsmadeeasy',
  },
  {
    img: nggImage,
    title: 'Number Guessing Game',
    url: 'https://github.com/albertjlay/NGG',
  },
];

export default Projects;
