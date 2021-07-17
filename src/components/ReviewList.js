import React from "react";
import styled from "styled-components";
import Color from "../shared/Color";

const ReviewList = (props) => {

  return (
    <ReviewWrapper>
      <Wrapper>
        <ReviewerInfo>
          <User>
            yeon1234
          </User>
          <Date>
            2021.05.12
          </Date>
        </ReviewerInfo>
        <Content>
          시간 가는 줄도 모르고 완독했습니다. 구병모 작가님 소설들의 등장인물들은 항상 입체적이라는 느낌이 듭니다. 인물들에게 정이
          쌓였는지, 여운이 길게 남네요.. 너무 만족스럽습니다. 감사합니다.
          그리고 문체에 관해선 문장의 호흡이 여느 소설보다는 긴 느낌이 있습니다. 하지만 번역체는 아니고, 작가님의 개성이
        </Content>
      </Wrapper>
    </ReviewWrapper>
  );
}

export default ReviewList;

const ReviewWrapper = styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px auto;
  padding-top: 15px;
  width: 800px;
  border-top: 1px solid ${Color.borderLightGray};
`;

const Wrapper = styled.div`
  display: flex;
`;

const ReviewerInfo = styled.div`
display: flex;
flex-direction: column;
width: 30%;
padding-top: 3px;
`;

const User = styled.span`
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const Date = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: ${Color.basicGray};
  line-height: 16px;
`;

const Content = styled.p`
  margin: 0px;
  padding: 0 5px 10px 0px;
  color: #212529;
  font-size: 13px;
  line-height: 1.5em;
`;