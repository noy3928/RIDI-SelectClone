import React, { useEffect } from "react";
import BookInfo from "../components/BookInfo";
import Description from "../components/Description";
import ReviewWrite from "../components/ReviewWrite";
import ReviewList from "../components/ReviewList";

import { useDispatch } from "react-redux";
import { actionCreators as bookActions } from "../redux/modules/book"

const BookDetail = (props) => {
  const dispatch = useDispatch();
  const book_id = props.match.params.id;
  useEffect(() => {
    dispatch(bookActions.getBookDetailAPI(book_id))
  }, [book_id])

  return (
    <>
      {/* <BookInfo />
      <Description /> */}
      <ReviewWrite id={book_id} />
      <ReviewList id={book_id} />
    </>
  );
}

export default BookDetail;