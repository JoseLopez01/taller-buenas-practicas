import { Box, Toolbar, Typography } from '@mui/material';
import AsideBar from './AsideBar';
import Main from './Main';

function Layout() {
  return (
    <Box sx={{ display: 'flex' }}>
      <AsideBar />
      <Main>Hola</Main>
    </Box>
  );
}

export default Layout;
