// src/components/BookList.js
import React from 'react';
import Book from './Book';

const BookList = ( { books } ) => {
  if (books.length === 0) {
    return <div>No books found</div>;
  }
  return (
    <>
    <div className='bookList'>
      {books.map(b => (
        <Book key={b.id} book={b}/>
      ))}
    </div>
    </>
  );
};

export default BookList;
