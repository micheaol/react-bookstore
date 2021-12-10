import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/books';
import {
  FormContainer,
  AddBookInput,
  CategoryInput,
  FormWrapper,
  Headings,
  Button,
} from './AddBookElements';

const AddBook = () => {
  const dispatch = useDispatch();

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      title: e.target.title.value,
      category: e.target.category.value,

    };

    dispatch(addBook(newBook));
    e.target.title.value = '';
    e.target.category.value = '';
  };

  return (
    <FormWrapper id="add-books">
      <Headings>ADD NEW BOOK</Headings>
      <FormContainer onSubmit={submitBookToStore}>
        <AddBookInput placeholder="Book title" name="title" />
        <CategoryInput placeholder="Under construction" name="category" />
        <Button type="submit">ADD BOOK</Button>
      </FormContainer>
    </FormWrapper>
  );
};

export default AddBook;
