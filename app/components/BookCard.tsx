import { Link } from 'react-router';
import type { Book } from '~/model';

export function BookCard({
  id,
  title,
  author,
  isFinished,
  isbn,
  rating,
}: Book) {
  return (
    <Link
      to={`book/${id}`}
      className='block flex px-5 py-4 max-w-lg mb-2.5 border border-black hover:shadow-md'
    >
      <div className='w-12 shrink-0'>
        {isbn ? (
          <img
            className='w-full h-16'
            src={`https://covers.openlibrary.org/b/isbn/${isbn}-S.jpg`}
            alt={`Cover for ${title}`}
          />
        ) : (
          <span className='w-full h-16 block bg-gray-200'></span>
        )}
      </div>
      <div className='flex flex-col ml-4 grow'>
        <span className='font-medium'>{title}</span>
        <span>{author}</span>
        <div className='flex justify-between'>
          <span>Rating: {rating ? `${rating}/5` : 'None'}</span>
          <span>{isFinished && 'Finished'}</span>
        </div>
      </div>
    </Link>
  );
}
