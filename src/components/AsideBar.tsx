import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import MenuItem from './MenuItem';

const Container = styled(Drawer)(({ theme }) => ({
  '& .MuiPaper-root': {
    backgroundColor: theme.palette.divider,
  },
}));

const Content = styled(Box)(({ theme }) => ({
  width: theme.spacing(25),
  padding: theme.spacing(2, 1),
}));

function AsideBar() {
  return (
    <Container
      open
      variant="persistent"
      ModalProps={{
        keepMounted: true,
      }}
    >
      <Content>
        <Typography variant="h6">Collections</Typography>
        <List>
          <MenuItem>Inbox</MenuItem>
        </List>
      </Content>
    </Container>
  );
}

export default AsideBar;
