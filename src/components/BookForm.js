import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { bookAdded } from '../redux/books/booksSlice';

export default function BookForm() {
  const titleVal = useRef();
  const authorVal = useRef();
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    if (!titleVal.current.value || !authorVal.current.value) return;
    dispatch(
      bookAdded({
        item_id:
          Math.random().toString(36).substring(2, 15)
          + Math.random().toString(36).substring(2, 15),
        title: titleVal.current.value,
        author: authorVal.current.value,
      }),
    );
    titleVal.current.value = '';
    authorVal.current.value = '';
  };
  return (
    <div className="book-form">
      <h2>Add Book</h2>
      <form>
        <input placeholder="Book title" ref={titleVal} />
        <input placeholder="Book author" ref={authorVal} />
        <input type="submit" onClick={handleClick} value="Submit" />
      </form>
    </div>
  );
}
