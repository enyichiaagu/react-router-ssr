import { useState } from 'react';
import { Form } from 'react-router';
import * as Dialog from '@radix-ui/react-dialog';
import { Button } from './Button';

export function BookForm() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <Button>Add Book</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='bg-black/50 fixed inset-0' />
        <Dialog.Content className='bg-white fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 px-8 py-4 w-5/6 max-w-sm'>
          <Dialog.Title className='font-medium text-xl py-2'>
            Add New Book
          </Dialog.Title>
          <Dialog.Description>Start tracking a new book</Dialog.Description>
          <Form
            method='post'
            onSubmit={() => setIsOpen(false)}
            action='/?index'
            className='mt-2'
          >
            <div>
              <label htmlFor='title'>Book Title</label>
              <br />
              <input
                name='title'
                type='text'
                className='border border-black'
                id='title'
                required
              />
            </div>
            <div>
              <label htmlFor='author'>Author</label>
              <br />
              <input
                name='author'
                type='text'
                id='author'
                className='border border-black'
                required
              />
            </div>
            <div>
              <label htmlFor='isbn'>ISBN (Optional)</label>
              <br />
              <input
                name='isbn'
                type='text'
                id='isbn'
                className='border border-black'
              />
            </div>

            <div className='mt-4 text-right'>
              <Dialog.Close asChild>
                <Button variant='cancel'>Cancel</Button>
              </Dialog.Close>
              <Button type='submit'>Save</Button>
            </div>
          </Form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
