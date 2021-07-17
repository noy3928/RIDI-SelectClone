import React from "react";
import BookInfo from "../components/BookInfo";
import Description from "../components/Description";
import ReviewWrite from "../components/ReviewWrite";
import ReviewList from "../components/ReviewList";

const BookDetail = (props) => {
  return (
    <>
      <BookInfo />
      <Description />
      <ReviewWrite />
      <ReviewList />
    </>
  );
}

export default BookDetail;