import { Box, Typography } from '@mui/material';
import { ComponentProps } from 'react';

export const getBlogPostBoxStyle: () => ComponentProps<typeof Box> = () => ({
  sx: {
    mx: '2vw',
    my: '2vh',
  },
});

export const getOopsTextStyle: () => ComponentProps<
  typeof Typography
> = () => ({
  sx: {
    mx: '2vw',
    my: '2vh',
  },
});

export const getBlogTitleStyle: () => ComponentProps<
  typeof Typography
> = () => ({
  variant: 'h5',
  mb: '0.5vh',
});

export const getBlogDateStyle: () => ComponentProps<
  typeof Typography
> = () => ({
  variant: 'subtitle1',
  sx: {
    color: 'gray',
    mr: '0.5vw',
    mb: '0.5vh',
  },
});
