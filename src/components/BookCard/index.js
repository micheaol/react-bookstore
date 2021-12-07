import React from 'react';
import PropTypes from 'prop-types';
import {
  BookCardWrapper,
  BookSectionOne,
  BookCategory,
  BookContainer,
  BookTitle,
  BookAuthor,
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

const BookCard = ({ title, author }) => (
  <BookContainer>
    <BookCardWrapper>
      <BookSectionOne>
        <BookCategory>Prayer Book</BookCategory>
        <BookTitle>{title}</BookTitle>
        <BookAuthor>{author}</BookAuthor>
        <BookCommandsWrapper>
          <Comments>Comments</Comments>
          <BookRemove>Remove</BookRemove>
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

BookCard.propTypes = {
  title: PropTypes.node.isRequired,
  author: PropTypes.node.isRequired,
};

export default BookCard;
