/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook, fetchBooks } from '../../redux/books/books';

import BookCard from '../BookCard';
import { BookListWrapper } from './BookListElements';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  const removeBookFromStore = (e) => {
    const listItem = e.target.parentNode.parentNode;
    const bookId = listItem.getAttribute('data-id');
    dispatch(deleteBook(bookId));
  };

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <BookListWrapper id="books">
      {books && books.map((book) => <BookCard book={book} key={book.id} removeBookFromStore={removeBookFromStore} />)}
    </BookListWrapper>
  );
};

export default BookList;
