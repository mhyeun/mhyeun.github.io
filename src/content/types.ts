export type Blog = {
  id: string;
  category: 'tech' | 'running' | 'meta' | 'nerdy' | 'random';
  title: string;
  slug: string;
  date: string;
  content: string;
};
