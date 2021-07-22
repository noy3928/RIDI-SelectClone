import React, { useEffect } from "react";
import BookInfo from "../components/BookInfo";
import Description from "../components/Description";
import ReviewWrite from "../components/ReviewWrite";
import HeaderLine from "../elements/HeaderLine"
import Footer from "../components/Footer";

import { useDispatch, useSelector } from "react-redux";
import book, { actionCreators as bookActions } from "../redux/modules/book"

const BookDetail = (props) => {
  const dispatch = useDispatch();
  const book_id = props.match.params.id;
  const bgColor = useSelector((state) => state.book.book_info.bgColor)

  useEffect(() => {
    dispatch(bookActions.getBookDetailAPI(book_id))

  }, [])

  return (
    <>
      <HeaderLine is_detail={true} bgColor={bgColor}/>
      <BookInfo />
      <Description />
      <ReviewWrite id={book_id} />
      <Footer/>
    </>
  );
}







export default BookDetail;