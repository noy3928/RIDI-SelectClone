import React from "react";
import styled from "styled-components";
import Color from "../shared/Color";

const BookInfo = (props) => {

  return (
    <BookConatiner>
      <BookWrapper>
        <BigImage
          src="https://img.ridicdn.net/cover/734001567/xxlarge?dpi=xxhdpi"
        />
        <InfoWrapper>
          <Category>소설 > 한국소설</Category>
          <BookName>파과</BookName >
          <Writer>구병모</Writer >
          <Star>4.4점</Star>
          <StarWriter>(19명)</StarWriter>
        </InfoWrapper>
      </BookWrapper>
    </BookConatiner>
  );
}

export default BookInfo;

const BookConatiner = styled.div`
  background-image: url("https://img.ridicdn.net/cover/734001567/xxlarge?dpi=xxhdpi");
  background-repeat: no-repeat;
  width: 100%;
`;

const BookWrapper = styled.div`
  display: flex; 
  margin: 0px auto;
  padding: 50px 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(121, 11, 53, 0.95);
`;

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