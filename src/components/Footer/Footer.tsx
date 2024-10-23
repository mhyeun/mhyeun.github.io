import { Box, Typography } from '@mui/material';
import { getFooterBoxStyle, getFooterTextStyle } from './style';

export const Footer = () => {
  return (
    <Box {...getFooterBoxStyle()}>
      <Typography {...getFooterTextStyle()}>
        mhyeun - © {new Date().getFullYear()}
      </Typography>
    </Box>
  );
};

export default Footer;
