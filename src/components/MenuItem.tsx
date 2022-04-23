import { ReactNode } from 'react';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export interface MenuItemProps {
  children: ReactNode;
  onClick: () => void;
  isSelected: boolean;
}

function MenuItem({ children, onClick, isSelected }: MenuItemProps) {
  return (
    <ListItem disablePadding>
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
