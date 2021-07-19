import React, { useEffect } from "react";
import styled from "styled-components";
import Color from "../shared/Color";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as reviewActions } from "../redux/modules/review";

const ReviewList = (props) => {
  const dispatch = useDispatch();
  const comment_list = useSelector(store => store.review.review);
  console.log(comment_list);

  const { id } = props;

  useEffect(() => {
    dispatch(reviewActions.getReviewAPI(id));
  }, []);

  console.log(id);
  return (
    <>
      {comment_list.map(c => {
        return (
          <ReviewItem key={c.id} {...c} />
        )
      })}
    </>
  );
}

export default ReviewList;


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
        <DelBtn>
          삭제
        </DelBtn>
      </Wrapper>
    </ReviewWrapper>
  );
}

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

const DelBtn = styled.button`
  width: 10px;
  height: 10px;
`;