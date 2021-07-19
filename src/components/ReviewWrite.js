import React from "react";
import styled from "styled-components";
import Color from "../shared/Color";
import { Input } from "../shared/Styles";

const ReviewWrite = (props) => {

  return (
    <WriteWrapper>
      <Input
        multiLine
        placeholder="리뷰 작성 시 광고 및 욕설, 비속어나 타인을 비방하는 문구를 사용하시면 비공개될 수 있습니다."
      ></Input>
      <ButtonWrapper>
        <NoticeButton>
          리뷰작성 유의사항
        </NoticeButton>
        <WriteButton>
          리뷰 남기기
        </WriteButton>
      </ButtonWrapper>
    </WriteWrapper>
  );
}

export default ReviewWrite;

const WriteWrapper = styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
  width: 800px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
`;

const NoticeButton = styled.button`
  width: auto; 
  height: 30px;
  border: 1px solid ${Color.borderGray};
  border-radius: 5px;
  background-color: ${Color.white};
  color: ${Color.basicGray};
  font-weight: bold;
  padding: 0 15px;
  line-height: 30px;
  text-align: center;
`;

const WriteButton = styled.button`
  cursor: default;
  opacity: .5;
  width: 95px;
  height: 30px;
  border: 1px solid ${Color.borderBlue};
  border-radius: 5px;
  background-color: ${Color.basicBlue};
  color: ${Color.white};
  font-weight: bold;
`;


