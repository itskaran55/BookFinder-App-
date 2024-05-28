// src/App.js
// import React, { useState } from 'react';
import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';

const App = () => {
  const [books, setBooks] = useState([''])
  return (
    <>
      <div className='finalApp'>
        <h1>Karan's Book Finder</h1>
        <SearchBar setBooks={setBooks} />
        <BookList books={books} />
      </div>
    </>
  );
};

export default App;
