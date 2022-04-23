import { Box, Toolbar, Typography } from '@mui/material';
import AsideBar from './AsideBar';
import Collection from './Collection';
import Main from './Main';

function Layout() {
  return (
    <Box sx={{ display: 'flex' }}>
      <AsideBar />
      <Main>
        <Collection />
      </Main>
    </Box>
  );
}

export default Layout;
