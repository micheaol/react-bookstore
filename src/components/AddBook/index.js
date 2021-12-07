import React from 'react';
import Button from '../ButtonElements';
import {
  FormContainer,
  AddBookInput,
  CategoryInput,
  FormWrapper,
  Headings,
} from './AddBookElements';

const AddBook = () => (
  <FormWrapper>
    <Headings>ADD NEW BOOK</Headings>
    <FormContainer>
      <AddBookInput placeholder="Book title" />
      <CategoryInput placeholder="Under construction" />
      <Button>ADD BOOK</Button>
    </FormContainer>
  </FormWrapper>
);

export default AddBook;
