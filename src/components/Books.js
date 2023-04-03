import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import BookForm from './BookForm';
import './Books.css';

export default function Books() {
  const books = useSelector((state) => state.books);

  return (
    <div className="books">
      <ul className="books-list">
        {books.map((book) => (
          <li key={book.id}>
            <Book title={book.title} author={book.author} id={book.item_id} />
            <hr />
          </li>
        ))}
      </ul>
      <BookForm />
    </div>
  );
}
