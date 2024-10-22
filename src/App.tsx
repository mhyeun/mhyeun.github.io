import { Box, Divider, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { Footer, Header } from './components';
import { BlogPreview } from './components/BlogPreview';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ mx: '24vw', mt: '4vh' }}>
        <Header />
        <Divider />
        <BlogPreview />
        <Divider />
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default App;
