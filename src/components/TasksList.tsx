import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import TaskItem from './TaskItem';

import { Task } from '../interfaces/interfaces';

const Container = styled(Box)(({ theme }) => ({
  margin: theme.spacing(5, 0, 0, 0),
}));

export interface TasksListProps {
  tasks: Task[];
}

function TasksList({ tasks }: TasksListProps) {
  return (
    <Container>
      {tasks.length > 0 ? (
        <>
          <Typography variant="body2">Tasks List</Typography>
          <List>
            {tasks.map((task: Task) => (
              <TaskItem {...task} key={task.id} />
            ))}
          </List>
        </>
      ) : null}
    </Container>
  );
}

export default TasksList;
