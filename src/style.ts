import { Box } from '@mui/material';
import { ComponentProps } from 'react';

export const getAppBoxStyle: (
  isSmallScreen: boolean,
) => ComponentProps<typeof Box> = (isSmallScreen) => ({
  sx: {
    mx: isSmallScreen ? '8vw' : '24vw',
    mt: '4vh',
  },
});
