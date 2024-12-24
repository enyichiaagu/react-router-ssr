import { useState, type ChangeEvent } from 'react';
import { Link, Form, redirect, useSubmit, data } from 'react-router';
import { IoArrowBackCircle, IoStarOutline, IoStar } from 'react-icons/io5';
import type { Route } from './+types/book';
import { Button } from '~/components/Button';
import { storage, type Book } from '~/model';

export function meta({ data }: Route.MetaArgs) {
  return [{ title: `Edit "${data.title}"` }];
}

export async function action({ params, request }: Route.ActionArgs) {
  let formData = await request.formData();
  let { bookId } = params;
  let newRating = (Number(formData.get('rating')) ||
    undefined) as Book['rating'];
  let isFinished = Boolean(formData.get('isFinished'));

  if (request.method === 'DELETE') {
    storage.books = storage.books.filter(({ id }) => +bookId !== id);
  } else if (newRating) {
    Object.assign(storage.books[+bookId], {
      isFinished,
      rating: newRating,
    });
  }

  return redirect('/');
}

export async function loader({ params }: Route.LoaderArgs) {
  const { bookId } = params;
  const book: Book | undefined = storage.books.find(({ id }) => +bookId === id);

  if (!book) throw data(null, { status: 404 });

  return book;
}

export default function Book({ loaderData }: Route.ComponentProps) {
  const [isFinished, setIsFinished] = useState<boolean>(
    loaderData?.isFinished || false
  );
  const [rating, setRating] = useState<number>(Number(loaderData?.rating));

  const submit = useSubmit();

  function deleteBook(bookId: number | undefined = loaderData?.id) {
    const confirmation = confirm('Are you sure you want to delete this book?');
    confirmation &&
      submit(
        { id: bookId },
        {
          method: 'delete',
        }
      );
  }

  return (
    <div className='mx-5'>
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
          <Form method='post'>
            <span className='my-5 block'>
              <input
                type='checkbox'
                name='isFinished'
                id='finished'
                checked={isFinished}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setIsFinished(e.target.checked)
                }
              />
              <label htmlFor='finished' className='ml-2'>
                Finished
              </label>
            </span>
            <div className='mb-5'>
              <span>Your Rating:</span>
              <span className='text-3xl flex'>
                {[1, 2, 3, 4, 5].map((num) => {
                  return (
                    <span key={num} className='flex'>
                      <input
                        className='hidden'
                        type='radio'
                        name='rating'
                        id={`rating-${num}`}
                        value={num}
                        checked={rating === num}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                          setRating(+e.target.value)
                        }
                      />
                      <label htmlFor={`rating-${num}`}>
                        {num <= rating ? <IoStar /> : <IoStarOutline />}
                      </label>
                    </span>
                  );
                })}
              </span>
            </div>
            <div className='text-right'>
              <Button type='submit'>Save</Button>
              <Button
                variant='delete'
                type='button'
                onClick={() => deleteBook()}
              >
                Delete Book
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
