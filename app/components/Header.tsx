import { Link } from 'react-router';
import { BookForm } from './BookForm';

export function Header() {
  return (
    <header className='flex justify-between items-center px-8 py-4'>
      <h1 className='text-3xl font-medium'>
        <Link to='/'>Book Tracker App</Link>
      </h1>
      <BookForm />
    </header>
  );
}
