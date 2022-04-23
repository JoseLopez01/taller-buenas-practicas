import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import { useCollectionContext } from '../context/CollectionContext';

import AddTaskButton from './AddTaskButton';
import TaskForm from './TaskForm';
import TasksList from './TasksList';

const ButtonContainer = styled('div')(({ theme }) => ({
  margin: theme.spacing(2, 0),
}));

function Collection() {
  const { openTaskForm } = useCollectionContext();

  return (
    <>
      <Box>
        <Typography variant="h5">Collection</Typography>
        <ButtonContainer>
          <AddTaskButton onClick={openTaskForm} />
        </ButtonContainer>
        <TasksList />
      </Box>
    </>
  );
}

export default Collection;
