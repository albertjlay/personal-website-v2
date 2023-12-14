import styled from '@emotion/styled';
import { Button } from '@mui/material';

const PillButton = styled(Button)(({ theme, bordercolor }) => ({
  width: '10rem',
  color: theme.palette.text.primary,
  border: `1px solid ${bordercolor || theme.palette.primary.main}`,
  borderRadius: '25px',
  textTransform: 'lowercase',
  '&:hover': {
    borderColor: theme.palette.primary.main,
  },
}));

export default PillButton;
