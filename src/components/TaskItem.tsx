import { format } from 'date-fns';

import MuiCheckbox from '@mui/material/Checkbox';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';

import { Task } from '../interfaces/interfaces';
import { useEffect, useState } from 'react';
import DeleteButton from './DeleteButton';

const Container = styled(ListItem)(({ theme }) => ({
  margin: theme.spacing(1, 0, 0, 0),
  backgroundColor: theme.palette.divider,
  height: theme.spacing(10),
  borderRadius: theme.spacing(1),
  '&:hover': {
    backgroundColor: theme.palette.grey.A700,
  },
}));

const CheckBox = styled(MuiCheckbox)(({ theme }) => ({
  color: theme.palette.success.main,
  '&.Mui-checked': {
    color: theme.palette.success.main,
  },
}));

export interface TaskItemProps extends Task {
  onDeleteTask: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

function TaskItem({ onDeleteTask, onComplete, ...task }: TaskItemProps) {
  const [checked, setChecked] = useState(false);

  const { id, name, completed, endDate, startDate } = task;

  useEffect(() => {
    setChecked(completed);
  }, [completed]);

  const formattedStartDate = format(new Date(startDate), 'MMM, dd - hh:mm a');
  const formattedEndDate = format(new Date(endDate), 'MMM, dd - hh:mm a');
  const secondary = `${formattedStartDate} - ${formattedEndDate}`;

  const handleOnChange = () => {
    onComplete(id);
    setChecked(!checked);
  };

  return (
    <Container
      secondaryAction={<DeleteButton onClick={() => onDeleteTask(id)} />}
    >
      <ListItemIcon>
        <CheckBox checked={checked} onChange={handleOnChange} />
      </ListItemIcon>
      <ListItemText primary={name} secondary={secondary} />
    </Container>
  );
}

export default TaskItem;
