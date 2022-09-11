import { Chip } from '@mui/material';
import React from 'react';
import { ProjectType } from '../types';

const ProjectTypeColors = {
  [ProjectType.Frontend]: '#7ec4cf',
  [ProjectType.Backend]: '#d1cfe2',
  [ProjectType.DataScience]: '#d4afb9',
  [ProjectType.Infrastructure]: '#9cadce',
  [ProjectType.Desktop]: '#daeaf6',
};

const ProjectTypeChip = props => {
  const { variant } = props;

  return (
    <Chip
      sx={{ backgroundColor: ProjectTypeColors[variant], margin: '0.25rem', letterSpacing: '1px' }}
      label={variant.description}
    ></Chip>
  );
};

export default ProjectTypeChip;
