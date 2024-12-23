import { Outlet } from 'react-router';
import { Fragment } from 'react/jsx-runtime';
import type { Route } from './+types/home';
import { Header } from '~/components/Header';
import { Footer } from '~/components/Footer';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Book Tracker App' },
    { name: 'description', content: 'Book Tracker Application' },
  ];
}

export default function Home() {
  return (
    <Fragment>
      <Header />
      <main className='max-w-screen-lg mx-auto my-4'>
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
}
