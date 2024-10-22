import { Box, Typography } from '@mui/material';
import rawContent from '../content/content.json';
import { Blog } from '../content';

const content = rawContent as Blog[];
content.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export const BlogPreview = () => {
  return (
    <Box sx={{ mx: '2vw' }}>
      {content.map((blog) => (
        <Box key={blog.id} sx={{ my: '4vh' }}>
          <Typography variant="subtitle1" sx={{ color: 'grey' }}>
            {new Date(blog.date).toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </Typography>
          <Typography variant="h6">{blog.title}</Typography>
          <Typography variant="caption">{blog.slug}</Typography>
        </Box>
      ))}
    </Box>
  );
};
