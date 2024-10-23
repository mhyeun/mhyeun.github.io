import { useParams } from 'react-router-dom';
import { Box, Chip, Typography } from '@mui/material';
import { content } from '../../content';
import {
  getBlogPostBoxStyle,
  getBlogTitleStyle,
  getOopsTextStyle,
  getBlogDateStyle,
} from './style';
import { formatBlogPreviewDate } from '../BlogPreview/format';
import Markdown from 'react-markdown';

import style from './markdown-styles.module.css';
import remarkGfm from 'remark-gfm';

export const BlogPost = () => {
  const { blogId } = useParams();

  const blog = content.find((c) => c.id === blogId);

  return (
    <Box {...getBlogPostBoxStyle()}>
      {!blog ? (
        <Typography {...getOopsTextStyle()}>Something went wrong.</Typography>
      ) : (
        <>
          <Typography {...getBlogTitleStyle()}>{blog.title}</Typography>
          <Typography {...getBlogDateStyle()}>
            {formatBlogPreviewDate(blog.date)}
          </Typography>
          <Box>
            <Chip label={blog.category} />
          </Box>
          <Markdown remarkPlugins={[remarkGfm]} className={style.reactMarkDown}>
            {blog.content}
          </Markdown>
        </>
      )}
    </Box>
  );
};
