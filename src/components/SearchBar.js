// src/components/SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ setBooks }) => {

  const [query, searchQuery] = useState('');

  const fetchData = async () => {
    let apiKey = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
    let data = await apiKey.json()
    setBooks(data.items || [])
  }

  const handleClick = () => {
    fetchData()
  }

  return (
    <>
      <div className='searchBar'>
        <input type='text' placeholder='Enter your Book Name' value={query} onChange={(s) => searchQuery(s.target.value)} />
        <button onClick={handleClick}>Search</button>
      </div>
    </>
  )
};

export default SearchBar;
