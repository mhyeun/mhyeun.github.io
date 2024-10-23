import { Blog } from '../../content';

export const formatBlogPreviewDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const sortByBlogDateDesc = (a: Blog, b: Blog) =>
  new Date(b.date).getTime() - new Date(a.date).getTime();
