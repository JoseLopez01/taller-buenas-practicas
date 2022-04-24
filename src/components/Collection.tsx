import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import { useCollectionContext } from '../contexts/CollectionContext';
import { Task } from '../interfaces/interfaces';

import AddTaskButton from './AddTaskButton';

import TasksList from './TasksList';

const ButtonContainer = styled('div')(({ theme }) => ({
  margin: theme.spacing(2, 0),
}));

function Collection() {
  const { setIsTaskFormOpen, collection } = useCollectionContext();

  const { name } = collection;

  const openTaskForm = () => {
    setIsTaskFormOpen(true);
  };

  return (
    <>
      <Box>
        <Typography variant="h5">{name}</Typography>
        {collection.tasks && (
          <>
            <ButtonContainer>
              <AddTaskButton onClick={openTaskForm} />
            </ButtonContainer>
          </>
        )}
        <TasksList />
      </Box>
    </>
  );
}

export default Collection;
