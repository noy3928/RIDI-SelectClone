import React from "react";
import styled from "styled-components";
import Color from "../shared/Color";

const ReviewItem = (props) => {
  const { username, comments, createdAt } = props;

  return (
    <ReviewWrapper>
      <Wrapper>
        <ReviewerInfo>
          <User>
            {username}
          </User>
          <Date>
            {createdAt}
          </Date>
        </ReviewerInfo>
        <Content>
          {comments}
        </Content>
      </Wrapper>
    </ReviewWrapper>
  );
}

export default ReviewItem;

const ReviewWrapper = styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px auto;
  padding: 15px 0;
  width: 800px;
  border-top: 1px solid ${Color.borderLightGray};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const ReviewerInfo = styled.div`
display: flex;
align-self: flex-start;
flex-direction: column;
width: 20%;
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
  width: 80%;
  padding-right: 5px;
  margin: 0px;
  color: #212529;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.5em;
`;
