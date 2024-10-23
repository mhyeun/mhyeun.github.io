import { Box, Typography } from '@mui/material';
import { ComponentProps } from 'react';

export const getFooterBoxStyle: () => ComponentProps<typeof Box> = () => ({
  sx: {
    mt: '1vh',
  },
});

export const getFooterTextStyle: () => ComponentProps<
  typeof Typography
> = () => ({
  variant: 'body2',
  align: 'center',
});
