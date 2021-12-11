/* eslint-disable no-case-declarations */
import _ from 'lodash';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const initialState = [];

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const ADD_BOOK_SUCCESS = 'bookStore/books/ADD_BOOK_SUCCESS';
const ADD_BOOK_STARTED = 'bookStore/books/ADD_BOOK_STARTED';
const ADD_BOOK_FAILURE = 'bookStore/books/ADD_BOOK_FAILURE';
const FETCH_BOOKS_SUCCESS = 'bookStore/books/FETCH_BOOKS_SUCCESS';
const FETCH_BOOKS_STARTED = 'bookStore/books/FETCH_BOOKS_STARTED';
const FETCH_BOOKS_FAILURE = 'bookStore/books/FETCH_BOOKS_FAILURE';

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const fetchBooksSuccess = (payload) => ({
  type: FETCH_BOOKS_SUCCESS,
  payload,
});

export const fetchBookStarted = () => ({
  type: FETCH_BOOKS_STARTED,
});

export const fetchBookFailure = (error) => ({
  type: FETCH_BOOKS_FAILURE,
  payload: error,
});

export const addBookSuccess = (payload) => ({
  type: ADD_BOOK_SUCCESS,
  payload,
});

export const addBookStarted = () => ({
  type: ADD_BOOK_STARTED,
});

export const addBookFailure = (error) => ({
  type: ADD_BOOK_FAILURE,
  payload: {
    error,
  },
});

export const fetchBooks = () => (dispatch) => {
  dispatch(fetchBookStarted());
  axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ZFiVXR8MDsWp5znsZ8Qa/books').then((res) => {
    const books = res.data;
    const bookData = [];
    _.forEach(books, ([book], key) => bookData.push({ id: key, ...book }));
    dispatch(fetchBooksSuccess(bookData));
  }).catch((err) => {
    const erroMesage = err.message;
    dispatch(fetchBookFailure(erroMesage));
  });
};

export const addBook = ({ itemId = uuidv4(), title, category }) => (dispatch) => {
  dispatch(addBookStarted());
  axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ZFiVXR8MDsWp5znsZ8Qa/books', {
    item_id: itemId,
    title,
    category,
  })
    .then(() => {
    })
    .catch((err) => {
      dispatch(addBookFailure(err.message));
    });
};

export const deleteBook = (id) => (dispatch) => {
  axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ZFiVXR8MDsWp5znsZ8Qa/books/${id}`);
  dispatch(removeBook(id));
};

const bookReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_BOOK_STARTED:
      return state;
    case FETCH_BOOKS_STARTED:
      return state;
    case FETCH_BOOKS_SUCCESS:
      return payload;
    case FETCH_BOOKS_FAILURE:
      return state;
    case ADD_BOOK_SUCCESS:
      return payload;
    case ADD_BOOK_FAILURE:
      return state;
    case ADD_BOOK:
      return payload;
    case REMOVE_BOOK:
      const newState = _.filter(state, (book) => book.id !== payload);
      return newState;
    default:
      return state;
  }
};

export default bookReducer;
