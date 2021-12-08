const initialState = {
  books: [],
};

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

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
