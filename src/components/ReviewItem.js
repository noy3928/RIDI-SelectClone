import React from "react";
import styled from "styled-components";
import Color from "../shared/Color";
import CommentLikeButton from "./CommentLikeButton";

const ReviewItem = (props) => {
  const { username, comments, createdAt, id } = props;

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
        <ContentBox>
          <Content>
            {comments}
          </Content>
          <ButtonBox>
            <CommentLikeButton id={id} />
          </ButtonBox>
        </ContentBox>
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
  width: 100%;
`;

const ReviewerInfo = styled.div`
  display: flex;
  align-self: flex-start;
  flex-direction: column;
  width: 20%;
  padding-top: 3px;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-end;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
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
  padding-right: 5px;
  margin: 0px 0px 30px 0px;
  color: #212529;
  font-size: 13px;
  line-height: 1.7em;
`;
