import React from 'react';
import Book from './Book';
import BookForm from './BookForm';
import './Books.css';

export default function Books() {
  const books = [
    {
      author: 'The Hunger Games',
      title: 'Suzane Collins',
    },
    {
      author: 'Dune',
      title: 'Frank Herbert',
    },
    {
      author: 'Brave New World',
      title: 'Aldous Huxley',
    },
  ];
  return (
    <div className="books">
      <ul className="books-list">
        {books.map((book) => (
          <li key={books.indexOf(book)}>
            <Book title={book.title} author={book.author} />
            <hr />
          </li>
        ))}
      </ul>
      <BookForm />
    </div>
  );
}
