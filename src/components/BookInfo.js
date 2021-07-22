import React from "react";
import styled from "styled-components";
import Color from "../shared/Color";
import { useSelector } from "react-redux";
import starImg from "../img/ratingStar.svg"
import ratedStar from "../img/ratedStar.svg"
import _ from "lodash";


const BookInfo = (props) => {
  const bookInfo = useSelector((state) => state.book.book_info)
  const book = bookInfo
  const starNum = _.range(1,6)
  
  const starInfo = useSelector((state) => state.book.starInfo)
  const averageRatingScore = starInfo.avgStars;


  return (
    <BookConatiner url={book.imgUrl}>
      <BookWrapper bgColor={book.bgColor}>
        <BigImage src={book.imgUrl}/>
        <InfoWrapper>
          <Category>{book.categoryDetail}</Category>
          <BookName>{book.bookname}</BookName >
          <Writer>{book.bookDetailElements}</Writer >
          <StarBox>
          <StarRating>
          {starNum.map((num,idx)=>{
        return(
            <StarImg  key={idx} imgURL={num < parseInt(averageRatingScore) + 1 ? ratedStar : starImg }></StarImg>
    )})}
    </StarRating>
          <Star>{starInfo.avgStars.toFixed(1)}점</Star>
          <StarWriter>({starInfo.totalCount}명)</StarWriter>
          </StarBox>
        </InfoWrapper>
      </BookWrapper>
    </BookConatiner>
  );
}

export default BookInfo;
const StarBox = styled.div`
display:flex;
`

const StarRating = styled.div`
display:flex;
justify-content:center;
margin-right:7px;
`

const StarImg = styled.div`
background-image:url(${(props) => props.imgURL ? `${props.imgURL}`: starImg});
background-repeat: no-repeat;
width:16px;
height:16px;
`

const BookConatiner = styled.div`
  background-image: ${(props) => (props.url ? `url(${props.url});`:"")}
  background-repeat: no-repeat;
  background-position: center top;
  background-size: 40%;
  width: 100%;
`;

const BookWrapper = styled.div`
  display: flex; 
  margin: 0px auto;
  padding: 50px 0;
  justify-content: center;
  align-items: center;
  ${(props)=> props.bgColor ? `${props.bgColor};`:""};
`;

//rgba(121, 11, 53, 0.95)

const InfoWrapper = styled.div`
  margin: 0 0 0 60px;
  width: 540px;
`;

const BigImage = styled.img`
  width: 200px;
  height: auto;
`;

const Category = styled.ul`
  color: ${Color.white};
  padding: 0px;
  font-size: 13px;
`;

const BookName = styled.h1`
  color: ${Color.white};
  font-weight: bold;
  font-size: 30px;
  line-height: 40px;
  margin-top: 18px;
`;

const Writer = styled.p`
  color: ${Color.white};
  font-weight: bold;
  font-size: 13px;
`;

const Star = styled.span`
  color: ${Color.star};
  font-size: 13px;
  font-weight: 700;
  line-height: 15px;
`;

const StarWriter = styled.span`
  font-size: 12px;  
  line-height: 15px;
  color: ${Color.white};
`;