import React from 'react';
import AddBook from '../AddBook';
import BookList from '../BookList';
import Navbar from '../Navbar';

const index = () => (
  <>
    <Navbar />
    <BookList />
    <AddBook />
  </>
);

export default index;
