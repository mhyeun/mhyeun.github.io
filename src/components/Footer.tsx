import { Box, Typography } from '@mui/material';

export const Footer = () => {
  return (
    <Box sx={{ mt: '1vh' }}>
      <Typography variant="body2" align="center">
        mhyeun - © {new Date().getFullYear()}
      </Typography>
    </Box>
  );
};

export default Footer;
