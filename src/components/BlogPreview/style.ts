import { Box, Typography } from '@mui/material';
import { ComponentProps } from 'react';

export const getPreviewBoxStyle: () => ComponentProps<typeof Box> = () => ({
  sx: {
    mx: '2vw',
  },
});

export const getBlogPreviewBoxStyle: () => ComponentProps<typeof Box> = () => ({
  sx: {
    my: '4vh',
    cursor: 'pointer',
  },
});

export const getBlogDateAndCategoryBoxStyle: () => ComponentProps<
  typeof Box
> = () => ({
  display: 'flex',
  mb: '0.5vh',
  alignItems: 'center',
});

export const getBlogDateStyle: () => ComponentProps<
  typeof Typography
> = () => ({
  variant: 'subtitle1',
  sx: {
    color: 'gray',
    mr: '12px',
  },
});

export const getBlogTitleStyle: () => ComponentProps<
  typeof Typography
> = () => ({
  variant: 'h6',
});

export const getBlogSlugStyle: () => ComponentProps<
  typeof Typography
> = () => ({
  variant: 'caption',
});
