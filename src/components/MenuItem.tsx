import { ReactNode } from 'react';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export interface MenuItemProps {
  children: ReactNode;
  onClick: () => void;
}

function MenuItem({ children, onClick }: MenuItemProps) {
  return (
    <ListItem disablePadding>
      <ListItemButton onClick={onClick}>
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
