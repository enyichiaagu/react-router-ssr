import { data } from 'react-router';
import type { Route } from './+types/book-list';
import { BookCard } from '~/components/BookCard';
import { storage } from '~/model';

export async function action({ request }: Route.ActionArgs) {
  let formData = await request.formData();

  let title = formData.get('title') as string | null;
  let author = formData.get('author') as string | null;
  let isbn = formData.get('isbn') as string;

  if (title && author) {
    storage.books.push({
      id: storage.books.length,
      title,
      author,
      isbn: isbn || undefined,
      isFinished: false,
    });
  }

  return data(storage, { status: 201 });
}

export async function loader({}: Route.LoaderArgs) {
  return storage;
}

export default function BookList({ loaderData }: Route.ComponentProps) {
  return (
    <div className='mx-5'>
      {loaderData.books
        .slice()
        .reverse()
        .map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
    </div>
  );
}
