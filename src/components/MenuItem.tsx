import { ReactNode } from 'react';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';

const Item = styled(ListItemButton)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
}));

export interface MenuItemProps {
  children: ReactNode;
}

function MenuItem({ children }: MenuItemProps) {
  return (
    <ListItem disablePadding>
      <Item>
        <ListItemText
          primaryTypographyProps={{
            color: 'text.secondary',
          }}
          primary={children}
        />
      </Item>
    </ListItem>
  );
}

export default MenuItem;
