import { Box, List, ListItemText, Typography } from '@mui/material';

export const Header = () => {
  return (
    <Box sx={{ mx: '2vw', my: '2vh' }}>
      <Typography variant="h4" sx={{ mb: '1vh' }}>
        Matthew Hyeun
      </Typography>
      <Typography>Toronto, Canada 🇨🇦</Typography>
      <List sx={{ ml: '4%', listStyleType: 'disc' }}>
        <ListItemText sx={{ display: 'list-item' }}>
          Software Engineer @ HPA, BX Portfolio Company
        </ListItemText>
        <ListItemText sx={{ display: 'list-item' }}>
          Engineering @ UWaterloo, 2023
        </ListItemText>
        <ListItemText sx={{ display: 'list-item' }}>
          I like history + transportation + running sometimes
        </ListItemText>
      </List>
    </Box>
  );
};
