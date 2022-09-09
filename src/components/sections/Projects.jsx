import { Typography, Paper } from '@mui/material';
import React from 'react';
import { projectContent } from '../../content';

const Projects = () => {
  return (
    <section className='projects' id='projects'>
      <Typography variant='h2'>What have I been up to?</Typography>
      <Typography variant='subtitle1'>
        Stuffs I built when I was frantically looking for my first job, extremely bored, or in the
        rare cases where I'm feeling particularly inspired.
      </Typography>
      <div className='project-cards'>
        {projectContent.map(item => (
          <a
            key={item.title}
            className='project-card'
            href={item.url}
            target='_blank'
            rel='noreferrer'
          >
            <Paper
              sx={{
                width: '250px',
                height: '300px',
                borderRadius: '5px',
                backdropFilter: 'blur(10px)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '10px',
                background: 'rgba(255, 255, 255, .15)',

                '&:hover .project-circle': {
                  backgroundColor: '#fbf9f9',
                },

                '&:before': {
                  content: "''",
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  width: '100%',
                  height: '100%',
                  backgroundImage: `url(${item.img})`,
                  opacity: 0,
                  zIndex: 1,
                  transition: 'opacity 300ms ease-in',
                },
                '&:hover:before': {
                  opacity: 1,
                },
                '@media(max-width: 900px)': {
                  width: '70vw',
                },
              }}
            >
              <Typography
                className='project-circle'
                sx={{
                  borderRadius: '50%',
                  width: '200px',
                  height: '200px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: '20px',
                  zIndex: 2,
                }}
                variant='h4'
              >
                {item.title}
              </Typography>
            </Paper>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
