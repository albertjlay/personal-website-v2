import { Typography, Paper } from '@mui/material';
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { projectContent } from '../../content';
import ProjectTypeChip from '../ProjectTypeChip';

const Projects = () => {
  return (
    <section className='projects' id='projects'>
      <Typography variant='h2'>What have I been up to?</Typography>
      <Typography variant='subtitle1'>Stuffs I tinkered with here and there.</Typography>
      <Typography variant='subtitle2' sx={{ marginBottom: '20px' }}>
        Check out the ones labelled 💛 for some of my favorite projects!
      </Typography>
      <Fade triggerOnce fraction={0.1}>
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
                  height: '350px',
                  borderRadius: '5px',
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: '10px',
                  background: 'rgba(255, 255, 255, .3)',

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
                  '@media(max-width: 900px)': {
                    padding: '1em',

                    '&:before': {
                      content: 'none',
                      position: 'static',
                    },
                  },
                  '@media (hover: hover) and (pointer: fine)': {
                    '&:hover .project-info': {
                      backgroundColor: 'rgba(251, 249, 249, 0.8)',
                    },
                    '&:hover:before': {
                      opacity: 1,
                    },
                  },
                }}
              >
                <div className='project-info'>
                  {item.featured && (
                    <Typography sx={{ fontSize: '14px', fontWeight: '700' }} variant='subtitle1'>
                      💛
                    </Typography>
                  )}
                  <Typography sx={{ fontSize: '20px', marginBottom: '10px' }} variant='h4'>
                    {item.title}
                  </Typography>
                  <div className='project-types'>
                    {item.types.map(t => (
                      <ProjectTypeChip key={t.description} variant={t} />
                    ))}
                  </div>
                  <Typography variant='body1' sx={{ margin: '10px', fontSize: '0.85rem' }}>
                    {item.description}
                  </Typography>
                </div>
              </Paper>
            </a>
          ))}
        </div>
      </Fade>
    </section>
  );
};

export default Projects;
