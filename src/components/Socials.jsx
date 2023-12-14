import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { socialContent } from '../content';

const Socials = props => {
  const { sx } = props;
  return (
    <Box sx={sx}>
      {socialContent.map(s => {
        const Icon = s.icon;

        return (
          <a key={s.name} href={s.url} target='_blank' rel='noreferrer'>
            <Button
              key={s.name}
              sx={{
                color: '#000',
                '&:hover, &:hover svg': {
                  backgroundColor: 'transparent',
                  color: '#5e8e44',
                  transition: 'all 150ms linear',
                },
              }}
            >
              {s.icon ? (
                <Icon sx={{ color: '#000' }} />
              ) : (
                <Typography sx={{ textTransform: 'lowercase', fontSize: '1.2rem' }} variant='body1'>
                  {s.name}
                </Typography>
              )}
            </Button>
          </a>
        );
      })}
    </Box>
  );
};

export default Socials;
