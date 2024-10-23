import { Box, Chip, Typography } from '@mui/material';
import { content } from '../../content';
import {
  getBlogDateAndCategoryBoxStyle,
  getBlogDateStyle,
  getBlogPreviewBoxStyle,
  getBlogSlugStyle,
  getBlogTitleStyle,
  getPreviewBoxStyle,
} from './style';
import { formatBlogPreviewDate, sortByBlogDateDesc } from './format';
import { useNavigate } from 'react-router-dom';

export const BlogPreview = () => {
  const navigate = useNavigate();
  const blogs = content.sort(sortByBlogDateDesc);

  return (
    <Box {...getPreviewBoxStyle()}>
      {blogs.map((blog) => (
        <Box
          key={blog.id}
          {...getBlogPreviewBoxStyle()}
          onClick={() => navigate(`/blog/${blog.id}`)}
        >
          <Box {...getBlogDateAndCategoryBoxStyle()}>
            <Typography {...getBlogDateStyle()}>
              {formatBlogPreviewDate(blog.date)}
            </Typography>
            <Chip label={blog.category} />
          </Box>
          <Typography {...getBlogTitleStyle()}>{blog.title}</Typography>
          <Typography {...getBlogSlugStyle()}>{blog.slug}</Typography>
        </Box>
      ))}
    </Box>
  );
};
