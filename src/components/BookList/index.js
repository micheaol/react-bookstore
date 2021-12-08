/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import BookCard from '../BookCard';
import { BookListWrapper } from './BookListElements';

const BookList = () => {
  const books = useSelector((state) => state.books);
  const [title, updateTitle] = useState('Dune');
  const [author, updateAuthor] = useState('Michael Oladele');

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
