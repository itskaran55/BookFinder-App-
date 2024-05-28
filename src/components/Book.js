// src/components/Book.js
import React from 'react';

const Book = ({ book }) => {

  if (!book || !book.volumeInfo) {
    return null;
  } 
  const { volumeInfo } = book;

  const { title, authors, description, imageLinks, infoLink } = volumeInfo;

  return (
    <div className="book">
      <h2>{title}</h2>
      <h4>{authors ? authors.join(', ') : 'Unknown Author'}</h4>
      {imageLinks && imageLinks.thumbnail && (
        <img src={imageLinks.thumbnail} alt={title} />
      )}
      <p>{description}</p>
      <a href={infoLink} target="_blank" rel="noopener noreferrer">More Info</a>
    </div>
  );
};

export default Book;
