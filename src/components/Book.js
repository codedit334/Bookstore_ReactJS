import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksSlice';

export default function Book(props) {
  const { title, author, id } = props;

  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(deleteBook(e.target.parentNode.dataset.id));
  };

  return (
    <div className="book" data-id={id}>
      <div className="book-title">
        Title:
        {title}
      </div>
      <div className="book-author">
        Author:
        {author}
      </div>
      <button type="button" className="book-delete" onClick={handleClick}>
        Delete
      </button>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
