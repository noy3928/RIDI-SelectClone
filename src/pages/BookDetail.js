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
  console.log("------북디테일화면에서 아이디 값",parseInt(book_id))

  useEffect(() => {
    dispatch(bookActions.getBookDetailAPI(book_id))
    console.log("-------19번 줄 북 아이디 값을 받아옵니다.")
    dispatch(bookActions.getBookDetailId(parseInt(book_id)))
    console.log("-------19번 줄 북 아이디 값을 받아옵니다.")
  }, [])

  return (
    <>
      <HeaderLine is_detail={true} bgColor={bgColor}/>
      <BookInfo />
      <Description />
      <ReviewWrite />
      <Footer/>
    </>
  );
}







export default BookDetail;