import React from 'react';
import {
  FormContainer,
  AddBookInput,
  CategoryInput,
  FormWrapper,
} from './AddBookElements';

const AddBook = () => (
  <FormWrapper>
    <FormContainer>
      <AddBookInput />
      <CategoryInput />

    </FormContainer>
  </FormWrapper>
);

export default AddBook;
