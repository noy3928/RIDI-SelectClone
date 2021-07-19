import React from "react";
import styled from "styled-components";
import Color from "../shared/Color";
import { useSelector } from "react-redux";

const Description = (props) => {
  const book_info = useSelector((state) => state.book.book_info)
  const book = book_info[0]
  console.log(book);

  return (
    // <React.Fragment></React.Fragment>
    <DescWrapper>
      {book.bookIntro == "1" ? "" : <IntroWrapper>
        <IntroTitle>책 소개</IntroTitle>
        <IntroText>
          {book.bookIntro.replace("책 소개\n","").split('\n').map( (line,idx) => {
            return (<div key={idx} style={{margin:"0px"}}>{line}<br/></div>)
          })
        }
        </IntroText>
      </IntroWrapper>}
      {book.writerIntro == "1" ? "" : <IntroWrapper>
        <IntroTitle>저자 소개</IntroTitle>
        <IntroText>
        {book.writerIntro.replace("저자 소개\n","").split('\n').map( (line,idx) => {
            return (<div key={idx} style={{margin:"0px"}}>{line}<br/></div>)
          })
        }
        </IntroText>
      </IntroWrapper>}
      {book.bookIndex == "1" ? "" : <IntroWrapper>
        <IntroTitle>목차</IntroTitle>
        <IntroText>
        {book.bookIndex.replace("목차\n","").split('\n').map( (line,idx) => {
            return (<div key={idx} style={{margin:"0px"}}>{line}<br/></div>)
          })
        }
        </IntroText>
      </IntroWrapper>}
      {book.publicationDate == "1" ? "" : <IntroWrapper>
        <IntroTitle>출간일</IntroTitle>
        <IntroText>
        {book.publicationDate.replace("출간일\n","").split('\n').map( (line,idx) => {
            return (<div key={(idx)} style={{margin:"0px"}}>{line}<br/></div>)
          })
        }
        </IntroText>
      </IntroWrapper>}
    </DescWrapper>
  );
}

export default Description;

const DescWrapper = styled.div`
  width: 100%;
`;

const IntroWrapper = styled.section`
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px auto;
  padding: 30px 0;
  width: 800px;
  border-bottom: 1.5px solid ${Color.borderGray};
  diplay:flex;
  flex-direction:column;
  align-items:flex-start;
`;

const IntroTitle = styled.h2`
  display: flex;
  align-self: flex-start;
  margin: 0px;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.4em;
`;

const IntroText = styled.div`
  overflow: hidden;
  color: ${Color.darkGray};
  font-size: 17px;
  text-align: left;
  line-height: 1.7em;
  margin: 20px 0px 0px 0px;
`;

