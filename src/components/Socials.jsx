import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const socialOptions = [
  {
    name: 'Resume',
    url: 'https://albertlaypersonalwebsite.s3.ca-central-1.amazonaws.com/albert-lay-resume-f22.pdf',
    // icon: FolderOpenIcon,
  },
  {
    name: 'Email',
    url: "mailto:albertjlay@gmail.com?subject=Hi%2C%20let's%20work%20together!&body=Tell%20me%20what's%20the%20email%20about%20and%20I'll%20get%20back%20to%20you%20as%20soon%20as%20possible.%0D%0A%0D%0AIn%20the%20meantime%2C%20have%20a%20nice%20day!",
    icon: MailOutlineIcon,
  },
  { name: 'GitHub', url: 'https://github.com/albertjlay/', icon: GitHubIcon },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/albertjlay/', icon: LinkedInIcon },
  // { name: 'Instagram', url: 'https://www.instagram.com/albertjlay/', icon: InstagramIcon },
];

const Socials = props => {
  const { sx } = props;
  return (
    <Box sx={sx}>
      {socialOptions.map(s => {
        const Icon = s.icon;

        return (
          <a key={s.name} href={s.url} target='_blank' rel='noreferrer'>
            <Button
              key={s.name}
              sx={{
                color: '#000',
                '&:hover': { backgroundColor: 'transparent' },
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
