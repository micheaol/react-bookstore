/* eslint-disable prefer-destructuring */
// import bookStoreApi from '../../apis/bookStoreApi';

const initialState = {
  books: [],
};

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

export const addBook = () => (dispatch) => {
  dispatch({ type: ADD_BOOK });
  return fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ZFiVXR8MDsWp5znsZ8Qa/books').then((book) => dispatch({ type: ADD_BOOK, payload: book.data }));
};

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const bookReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_BOOK:
      return { books: [...state.books, payload] };
    case REMOVE_BOOK:
      return state.books.filter((book) => book.id !== payload.id);
    default:
      return state;
  }
};

export default bookReducer;
