import { ReactNode } from 'react';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DeleteButton from './DeleteButton';

export interface MenuItemProps {
  children: ReactNode;
  isSelected: boolean;
  onClick: () => void;
  onDelete?: () => void;
}

function MenuItem({ children, onClick, isSelected, onDelete }: MenuItemProps) {
  return (
    <ListItem
      disablePadding
      secondaryAction={<DeleteButton onClick={onDelete} />}
    >
      <ListItemButton onClick={onClick} selected={isSelected}>
        <ListItemText
          primaryTypographyProps={{
            color: 'text.secondary',
          }}
          primary={children}
        />
      </ListItemButton>
    </ListItem>
  );
}

export default MenuItem;
