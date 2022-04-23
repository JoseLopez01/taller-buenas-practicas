import { ReactNode } from 'react';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export interface MenuItemProps {
  children: ReactNode;
}

function MenuItem({ children }: MenuItemProps) {
  return (
    <ListItem disablePadding>
      <ListItemButton>
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
