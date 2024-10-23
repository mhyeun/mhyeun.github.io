import { Box, List, ListItemText, Typography } from '@mui/material';
import {
  getHeaderBoxStyle,
  getListStyle,
  getListTextItemStyle,
  getNameTextStyle,
} from './style';

export const Header = () => {
  const bulletPoints = [
    'Software Engineer @ HPA, BX Portfolio Company',
    'Engineering @ UWaterloo, 2023',
    'I like history + transportation + running sometimes',
  ];

  return (
    <Box {...getHeaderBoxStyle()}>
      <Typography {...getNameTextStyle()}>Matthew Hyeun</Typography>
      <Typography>Toronto, Canada</Typography>
      <List {...getListStyle()}>
        {bulletPoints.map((point, idx) => (
          <ListItemText key={idx} {...getListTextItemStyle()}>
            {point}
          </ListItemText>
        ))}
      </List>
    </Box>
  );
};
