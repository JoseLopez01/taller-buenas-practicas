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
  const { openTaskForm, collection } = useCollectionContext();

  let name: string = 'No collection selected';
  let tasks: Task[] = [];

  if (collection) {
    name = collection.name;
    tasks = collection.tasks;
  }

  return (
    <>
      <Box>
        <Typography variant="h5">{name}</Typography>
        {collection && (
          <ButtonContainer>
            <AddTaskButton onClick={openTaskForm} />
          </ButtonContainer>
        )}
        <TasksList tasks={tasks} />
      </Box>
    </>
  );
}

export default Collection;
