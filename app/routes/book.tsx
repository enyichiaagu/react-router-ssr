import { useState } from 'react';
import { Link } from 'react-router';
import { IoArrowBackCircle, IoStarOutline } from 'react-icons/io5';
import type { Route } from './+types/book';
import { Button } from '~/components/Button';
import { storage, type Book } from '~/model';

export async function loader({ params }: Route.LoaderArgs) {
  const { bookId } = params;
  const book: Book | undefined = storage.books.find(({ id }) => +bookId === id);

  return book;
}

export default function Book({ loaderData }: Route.ComponentProps) {
  return (
    <div className='w-full mx-5'>
      <Link to='/' className='text-purple-700 flex items-center gap-1 w-fit'>
        <IoArrowBackCircle /> Back to home
      </Link>
      <div className='flex mt-5 max-w-md'>
        <div className='w-48 h-72 shrink-0'>
          {loaderData?.isbn ? (
            <img
              className='w-full h-full'
              src={`https://covers.openlibrary.org/b/isbn/${loaderData.isbn}-L.jpg`}
              alt={`Cover for ${loaderData.title}`}
            />
          ) : (
            <span className='block w-full h-full bg-gray-200'></span>
          )}
        </div>
        <div className='flex flex-col ml-5 grow'>
          <span className='font-medium text-xl'>{loaderData?.title}</span>
          <span>{loaderData?.author}</span>
          <span className='my-5'>
            <input type='checkbox' name='isFinished' id='finished' />
            <label htmlFor='finished'>Finished</label>
          </span>
          <div className='mb-5'>
            <span>Your Rating:</span>
            <span className='text-3xl flex'>
              <IoStarOutline />
              <IoStarOutline />
              <IoStarOutline />
              <IoStarOutline />
              <IoStarOutline />
            </span>
          </div>
          <div className='text-right'>
            <Button>Save</Button>
            <Button variant='delete'>Delete Book</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
