import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import Layout from './components/Layout';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout />
    </ThemeProvider>
  );
}

export default App;
