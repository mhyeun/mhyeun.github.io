import {
  Box,
  Divider,
  ThemeProvider,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { theme } from './theme';
import { BlogPost, BlogPreview, Footer, Header } from './components';
import { Navigate, Route, Routes } from 'react-router-dom';
import { getAppBoxStyle } from './style';

const App = () => {
  const muiTheme = useTheme();
  const isSmallScreen = useMediaQuery(muiTheme.breakpoints.down('sm'));

  return (
    <ThemeProvider theme={theme}>
      <Box {...getAppBoxStyle(isSmallScreen)}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Divider />
                <BlogPreview />
              </>
            }
          />
          <Route path="/blog/:blogId" element={<BlogPost />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Divider />
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default App;
