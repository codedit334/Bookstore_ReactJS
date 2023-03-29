import React from 'react';
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
            <span className="book-title">
              Title:
              {book.title}
            </span>
            <br />
            <span className="book-author">
              Author:
              {book.author}
            </span>
            <br />
            <hr />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}
