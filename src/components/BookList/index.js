import React from 'react';
import BookCard from '../BookCard';
import { BookListWrapper } from './BookListElements';

const BookList = () => (
  <BookListWrapper id="books">

    <BookCard />
    <BookCard />
    <BookCard />
    <BookCard />
  </BookListWrapper>
);

export default BookList;
