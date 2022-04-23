import Button from '@mui/material/Button';
import Add from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';

const Container = styled(Button)(({ theme }) => ({
  borderColor: theme.palette.divider,
  color: theme.palette.text.secondary,
  justifyContent: 'left',
  borderRadius: theme.spacing(1),
  '&:hover': {
    backgroundColor: theme.palette.divider,
    color: theme.palette.text.secondary,
    borderColor: theme.palette.divider,
  },
}));

function AddTaskButton() {
  return (
    <Container
      variant="outlined"
      size="large"
      color="primary"
      fullWidth
      startIcon={<Add />}
    >
      Add a task
    </Container>
  );
}

export default AddTaskButton;
