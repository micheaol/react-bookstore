import React, { useState } from 'react';
import BookCard from '../BookCard';
import { BookListWrapper } from './BookListElements';

const BookList = () => {
  const [title] = useState('Dune');
  const [author] = useState('Michael Oladele');

  return (
    <BookListWrapper id="books">

      <BookCard title={title} author={author} />
      <BookCard title={title} author={author} />
      <BookCard title={title} author={author} />
      <BookCard title={title} author={author} />
    </BookListWrapper>
  );
};

export default BookList;
