import { Fragment } from 'react/jsx-runtime';
import { Link } from 'react-router';
import type { Route } from './+types/about';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'About Book Tracker App' },
    { name: 'description', content: 'About this Application' },
  ];
}

export default function About() {
  return (
    <Fragment>
      <h1 className='px-8 py-4 text-3xl font-medium'>
        <Link to='/'>Book Tracker App</Link>
      </h1>
      <main className='max-w-screen-lg mx-auto my-4'>
        <p className='mb-2 mx-5'>
          This app was built for readers who love the simplicity of tracking
          what they’ve read and what they want to read next. With just the
          essentials, it’s designed to keep your reading list organized without
          the distractions of unnecessary features.
        </p>
        <p className='mb-2 mx-5'>
          We believe the joy of reading should stay front and center. Whether
          it’s noting down the books you’ve finished or keeping a simple list of
          what’s next, this app focuses on helping you stay connected to your
          reading journey in the most straightforward way possible.
        </p>
        <p className='mb-2 mx-5'>
          Sometimes less is more, and that’s the philosophy behind this app. By
          keeping things minimal, it offers a clean and easy way to manage your
          reading habits so you can spend less time tracking and more time
          diving into your next great book.
        </p>
      </main>
    </Fragment>
  );
}
