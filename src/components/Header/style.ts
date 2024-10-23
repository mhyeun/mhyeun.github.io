import { Box, List, ListItemText, Typography } from '@mui/material';
import { ComponentProps } from 'react';

export const getHeaderBoxStyle: () => ComponentProps<typeof Box> = () => ({
  sx: {
    mx: '2vw',
    my: '2vh',
  },
});

export const getNameTextStyle: () => ComponentProps<
  typeof Typography
> = () => ({
  variant: 'h4',
  sx: {
    mb: '1vh',
  },
});

export const getListStyle: () => ComponentProps<typeof List> = () => ({
  sx: {
    ml: '2vw',
    listStyleType: 'disc',
  },
});

export const getListTextItemStyle: () => ComponentProps<
  typeof ListItemText
> = () => ({
  sx: {
    display: 'list-item',
  },
});
