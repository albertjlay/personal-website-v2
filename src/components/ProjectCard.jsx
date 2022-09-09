import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const ProjectCard = props => {
  const { sx, title, img, url } = props;
  return (
    <a href={url} target='_blank' rel='noreferrer'>
      <Card sx={sx}>
        <CardMedia component='img' alt={title} image={img} />
        <CardContent>
          <Typography variant='h3'>{title}</Typography>
        </CardContent>
      </Card>
    </a>
  );
};

export default ProjectCard;
