import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className='text-center my-5'>
      <Link to='/about' className='text-purple-700'>
        About the App
      </Link>
    </footer>
  );
}
