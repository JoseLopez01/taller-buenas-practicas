import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';

import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import MenuItem from './MenuItem';
import AddCollection from './AddCollection';
import { useCollectionContext } from '../contexts/CollectionContext';
import { useEffect, useState } from 'react';

const Container = styled(Drawer)(({ theme }) => ({
  width: theme.spacing(25),
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: theme.spacing(26),
  },
  '& .MuiPaper-root': {
    backgroundColor: theme.palette.divider,
  },
}));

const Content = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(2, 0),
}));

function AsideBar() {
  const {
    collections,
    collection,
    handleOnDeleteCollection,
    setSelectedCollection,
  } = useCollectionContext();

  const { id: collectionId } = collection;

  return (
    <Container
      open
      variant="persistent"
      ModalProps={{
        keepMounted: true,
      }}
    >
      <Content>
        <Typography variant="body1" sx={{ paddingLeft: 1 }}>
          Collections
        </Typography>
        <List>
          {collections.map(({ name, id }) => (
            <MenuItem
              key={id}
              isSelected={id === collectionId}
              onDelete={() => handleOnDeleteCollection(id)}
              onClick={() => setSelectedCollection(id)}
            >
              {name}
            </MenuItem>
          ))}
          <AddCollection />
        </List>
      </Content>
    </Container>
  );
}

export default AsideBar;
