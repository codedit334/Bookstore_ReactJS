import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookForm from './BookForm';
import Book from './Book';
import './Books.css';
import { fetchBooks } from '../redux/books/booksSlice';

export default function Books() {
  const dispatch = useDispatch();

  const [renderBooks, setRenderBooks] = useState('');

  const books = useSelector((state) => state.books);
  const bookStatus = useSelector((state) => state.books.status);

  useEffect(() => {
    if (bookStatus === 'idle') {
      dispatch(fetchBooks());
    }
  }, [bookStatus, dispatch]);

  useEffect(() => {
    if (bookStatus === 'succeeded') {
      const toRender = Object.keys(books.books).map((key) => (
        <li key={key}>
          <Book
            title={books.books[key][0].title}
            author={books.books[key][0].author}
            id={key}
          />
          <hr />
        </li>
      ));
      setRenderBooks(toRender);
    }
  }, [bookStatus, books]);

  return (
    <div className="books">
      <ul className="books-list">{renderBooks}</ul>
      <BookForm />
    </div>
  );
}
