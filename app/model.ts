export interface Book {
  id: number;
  title: string;
  author: string;
  isFinished: boolean;
  isbn?: string;
  rating?: 1 | 2 | 3 | 4 | 5;
}

interface Data {
  books: Book[];
}

export const storage: Data = {
  books: [
    {
      id: 0,
      title: `Numbers Don't Lie: 71 Stories to Help Us Understand the Modern World`,
      author: 'Vaclav Smil',
      isbn: `978-0241454411`,
      isFinished: true,
      rating: 4,
    },
  ],
};
