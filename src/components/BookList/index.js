/* eslint-disable max-len */
/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { connect } from 'react-redux';
import _ from 'lodash';
import { deleteBook, fetchBooks, removeBook } from '../../redux/books/books';

import BookCard from '../BookCard';
import { BookListWrapper } from './BookListElements';

const BookList = () => {
  // const { books } = booksData;
  // const [booksArray] = books;
  // console.log(booksData);
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  // const filtered = books.filter((boo) => boo);
  // console.log(filtered);

  const removeBookFromStore = (e) => {
    const listItem = e.target.parentNode.parentNode;
    const bookId = listItem.getAttribute('data-id');
    // const book = _.find(books, { id: bookId });
    // console.log(book);
    // dispatch(removeBook(book));
    dispatch(deleteBook(bookId));
  };

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <BookListWrapper id="books">
      {books && books.map((book) => <BookCard book={book} key={book.id} removeBookFromStore={removeBookFromStore}/>)}
    </BookListWrapper>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     booksData: state.books,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchBooks: () => dispatch(fetchBooks()),
//   };
// };

export default BookList;
