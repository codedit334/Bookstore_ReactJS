import React from 'react';
import PropTypes from 'prop-types';

export default function Book(props) {
  const { title, author } = props;
  return (
    <div className="book">
      <div className="book-title">
        Title:
        {title}
      </div>
      <div className="book-author">
        Author:
        {author}
      </div>
      <div className="book-delete">
        <button type="button">Delete</button>
      </div>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
