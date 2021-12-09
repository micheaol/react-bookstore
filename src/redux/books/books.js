/* eslint-disable prefer-destructuring */
// import bookStoreApi from '../../apis/bookStoreApi';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  books: [],
};

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const ADD_BOOK_SUCCESS = 'bookStore/books/ADD_BOOK_SUCCESS';
const ADD_BOOK_STARTED = 'bookStore/books/ADD_BOOK_STARTED';
const ADD_BOOK_FAILURE = 'bookStore/books/ADD_BOOK_FAILURE';

export const addBookSuccess = (book) => ({
  type: ADD_BOOK_SUCCESS,
  payload: {
    ...book,
  },
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

export const addBook = ({ itemId = uuidv4(), title, category }) => (dispatch) => {
  dispatch(addBookStarted());
  axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ZFiVXR8MDsWp5znsZ8Qa/books', {
    item_id: itemId,
    title,
    category,
  })
    .then((res) => {
      dispatch(addBookSuccess(res.data));
    })
    .catch((err) => {
      dispatch(addBookFailure(err.message));
    });
};

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const bookReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_BOOK_STARTED:
      return {
        ...state,
      };
    case ADD_BOOK_SUCCESS:
      return {
        ...state,
        books: [...state.books, payload],
      };
    case ADD_BOOK_FAILURE:
      return {
        ...state,
        error: payload.error,
      };
    case ADD_BOOK:
      return { books: [...state.books, payload] };
    case REMOVE_BOOK:
      return state.books.filter((book) => book.id !== payload.id);
    default:
      return state;
  }
};

export default bookReducer;
