import { ReactNode } from 'react';

import MuiCheckbox from '@mui/material/Checkbox';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';

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

export interface TaskItemProps {
  children: ReactNode;
  startDate?: string;
  endDate?: string;
}

function TaskItem({ children, endDate, startDate }: TaskItemProps) {
  const secondary = `${startDate} - ${endDate}`;

  return (
    <Container>
      <ListItemIcon>
        <CheckBox />
      </ListItemIcon>
      <ListItemText primary={children} secondary={secondary} />
    </Container>
  );
}

export default TaskItem;
