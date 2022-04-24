import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import { CollectionContextProvider } from './contexts/CollectionContext';

import Layout from './components/Layout';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CollectionContextProvider>
          <CssBaseline />
          <Layout />
        </CollectionContextProvider>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
