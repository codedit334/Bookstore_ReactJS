import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksSlice';
import './Book.css';

export default function Book(props) {
  const { title, author, id } = props;

  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(deleteBook(e.target.parentNode.dataset.id));
  };

  return (
    <div className="book" data-id={id}>
      <div className="book-wrapper">
        <div className="book-title">
          <span className="book-space">Title:</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className="title-space">{title}</span>
        </div>
        <div className="book-author">
          <span className="book-space">Author:</span>
&nbsp;&nbsp;
          {author}
        </div>
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
