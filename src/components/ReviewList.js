import React, { useEffect } from "react";
import styled from "styled-components";
import ReviewItem from "./ReviewItem";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as reviewActions } from "../redux/modules/review";

const ReviewList = (props) => {
  const dispatch = useDispatch();
  const comment_list = useSelector((store) => store.review.review);

  const { id } = props;

  useEffect(() => {
    dispatch(reviewActions.getReviewAPI(id));
  }, []);

  return (
    <ListWrapper>
      {comment_list.map(c => {
        return (
          <ReviewItem key={c.id} {...c} cid={id} />
        )
      })}
    </ListWrapper>
  );
}

export default ReviewList;

const ListWrapper = styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px auto 100px auto;
  width: 800px;
`;