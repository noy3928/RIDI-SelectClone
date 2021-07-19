import React from "react";
import BookInfo from "../components/BookInfo";
import Description from "../components/Description";
import ReviewWrite from "../components/ReviewWrite";
import ReviewList from "../components/ReviewList";

const BookDetail = (props) => {
  const book_id = props.match.params.id;
  return (
    <>
      <BookInfo id={book_id}/>
      <Description id={book_id}/>
      <ReviewWrite />
      <ReviewList />
    </>
  );
}

export default BookDetail;