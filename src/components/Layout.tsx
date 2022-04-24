import Box from '@mui/material/Box';

import { useCollectionContext } from '../contexts/CollectionContext';

import AsideBar from './AsideBar';
import Collection from './Collection';
import Main from './Main';
import TaskForm from './TaskForm';

function Layout() {
  const { isTaskFormOpen, setIsTaskFormOpen } = useCollectionContext();

  const closeTaskForm = () => {
    setIsTaskFormOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AsideBar />
      <Main>
        <Collection />
      </Main>
      <TaskForm isOpen={isTaskFormOpen} onClose={closeTaskForm} />
    </Box>
  );
}

export default Layout;
