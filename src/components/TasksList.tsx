import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import TaskItem from './TaskItem';

const Container = styled(Box)(({ theme }) => ({
  margin: theme.spacing(5, 0, 0, 0),
}));

function TasksList() {
  return (
    <Container>
      <Typography variant="body2">Tasks List</Typography>
      <List>
        <TaskItem endDate="Jan, 23" startDate="Jan, 22">
          Task
        </TaskItem>
      </List>
    </Container>
  );
}

export default TasksList;
