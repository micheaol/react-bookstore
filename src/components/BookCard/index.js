import React from 'react';
import PropTypes from 'prop-types';
import {
  BookCardWrapper,
  BookSectionOne,
  BookCategory,
  BookContainer,
  BookTitle,
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
  BookAuthor,
  BookLineDividerSmall,
} from './BookCardElements';

const BookCard = ({ book, removeBookFromStore }) => (
  <>
    <BookContainer>
      <BookCardWrapper>
        <BookSectionOne data-id={book.id}>
          <BookCategory>{book.category}</BookCategory>
          <BookTitle>{book.title}</BookTitle>
          <BookAuthor>Michael Oladele</BookAuthor>
          <BookCommandsWrapper>
            <Comments>Comments</Comments>
            <BookLineDividerSmall />
            <BookRemove onClick={removeBookFromStore}>Remove</BookRemove>
            <BookLineDividerSmall />
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
  </>
);

BookCard.propTypes = {
  book: PropTypes.node.isRequired,
  removeBookFromStore: PropTypes.node.isRequired,
};

export default BookCard;
