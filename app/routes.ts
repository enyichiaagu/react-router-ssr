import {
  type RouteConfig,
  index,
  route,
  layout,
} from '@react-router/dev/routes';

export default [
  layout('routes/home.tsx', [
    index('routes/book-list.tsx'),
    route('book/:bookId', 'routes/book.tsx'),
  ]),
  route('about', 'routes/about.tsx'),
] satisfies RouteConfig;
