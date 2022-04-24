import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import TaskItem from './TaskItem';

import { Task } from '../interfaces/interfaces';
import { useCollectionContext } from '../contexts/CollectionContext';

const Container = styled(Box)(({ theme }) => ({
  margin: theme.spacing(5, 0, 0, 0),
}));

function TasksList() {
  const { collection, handleOnDeleteTask, handleOnCompleteTask } =
    useCollectionContext();

  const { tasks = [], id } = collection;

  const handleOnDelete = (taskId: string) => {
    handleOnDeleteTask(taskId);
  };

  const handleOnChange = (taskId: string) => {
    handleOnCompleteTask(taskId);
  };

  return (
    <Container>
      {tasks.length > 0 ? (
        <>
          <Typography variant="body2">Tasks List</Typography>
          <List>
            {tasks.map((task: Task) => (
              <TaskItem
                {...task}
                key={task.id}
                onDeleteTask={handleOnDelete}
                onComplete={handleOnChange}
              />
            ))}
          </List>
        </>
      ) : null}
    </Container>
  );
}

export default TasksList;
