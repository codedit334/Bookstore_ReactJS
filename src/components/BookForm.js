import React from 'react';

export default function BookForm() {
  return (
    <div className="book-form">
      <h2>Add Book</h2>
      <form>
        <input placeholder="Book title" />
        <input placeholder="Book author" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
