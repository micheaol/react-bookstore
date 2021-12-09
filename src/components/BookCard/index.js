/* eslint-disable react/prop-types */
import React from 'react';
// import { useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
// import _ from 'lodash';
import {
  BookCardWrapper,
  BookSectionOne,
  BookCategory,
  BookContainer,
  BookTitle,
  // BookAuthor,
  BookCommandsWrapper,
  Comments,
  BookRemove,
  BookEdit,
  BookSectionTwo,
  CircleCenter,
  CompletedWrapper,
  CompletedPerc,
  CompletedText,
  BookSectionThree,
  BookChapter,
  BookLesson,
  UpdateProgress,
  BookLineDivider,
} from './BookCardElements';
// import { removeBook } from '../../redux/books/books';

const BookCard = ({ book, removeBookFromStore }) => {
  // const dispatch = useDispatch();
  // const book = useSelector((state) => state.book);
  // _.forEach(book, (b) => console.log(b));
  console.log('book card');

  return (
    <BookContainer>
      <BookCardWrapper>
        <BookSectionOne data-id={book.id}>
          <BookCategory>{book.category}</BookCategory>
          <BookTitle>{book.title}</BookTitle>
          {/* <BookAuthor>Hi</BookAuthor> */}
          <BookCommandsWrapper>
            <Comments>Comments</Comments>
            <BookRemove onClick={removeBookFromStore}>Remove</BookRemove>
            <BookEdit>Edit</BookEdit>
          </BookCommandsWrapper>
        </BookSectionOne>
        <BookSectionTwo>
          <CircleCenter />
          <CompletedWrapper>
            <CompletedPerc>8%</CompletedPerc>
            <CompletedText>Completed</CompletedText>
          </CompletedWrapper>
        </BookSectionTwo>
        <BookLineDivider />
        <BookSectionThree>
          <BookChapter>Current Chapter</BookChapter>
          <BookLesson>Chapter3: ALessonLearned </BookLesson>
          <UpdateProgress>Update progress</UpdateProgress>
        </BookSectionThree>
      </BookCardWrapper>
    </BookContainer>
  );
};

// BookCard.propTypes = {
//   title: PropTypes.node.isRequired,
//   author: PropTypes.node.isRequired,
// };

export default BookCard;
