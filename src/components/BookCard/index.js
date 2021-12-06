import React from 'react';
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

const BookCard = () => (
  <BookContainer>
    <BookCardWrapper>
      <BookSectionOne>
        <BookCategory>Prayer Book</BookCategory>
        <BookTitle>Dune</BookTitle>
        <BookAuthor>Michael Oladele</BookAuthor>
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

export default BookCard;
