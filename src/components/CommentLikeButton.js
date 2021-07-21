import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Color from "../shared/Color";
import commentButton from "../img/commentButton.svg";
import likeButton from "../img/likeButton.svg";
import likeButtonClick from "../img/likeButtonClick.svg";

import { history } from "../redux/ConfigStore";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as reviewAcions } from "../redux/modules/review";

const CommentLikeButton = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((store) => store.user.is_login);
  const username = useSelector((store) => store.user.username);
  // 현재 내가 누른 댓글id 찾기
  const commentId = props.id;
  const likesCount = useSelector(state => state.review.review[0].likesCount)
  console.log(likesCount)

  const [is_like, setIsLike] = useState(false);

  const addLike = () => {
    if (!is_login) {
      window.alert("로그인 후 이용가능합니다");
      history.push("/login");
      return;
    }
    setIsLike(true);
    dispatch(reviewAcions.addLikeAPI(username, commentId));
  }

  const cancelLike = () => {
    setIsLike(false);
    dispatch(reviewAcions.cancelLikeAPI(username, commentId));
  }

  // useEffect(() => {
  //   dispatch(getReviewAPI())
  // })

  return (
    <Container>
      <Wrapper>
        <ButtonWrapper>
          <CommentBtn />
          댓글
        </ButtonWrapper>
      </Wrapper>
      <Wrapper>
        {is_like ?
          <LikeWrapper onClick={cancelLike}> <LikeBtnClick />
          </LikeWrapper>
          : <LikeWrapper onClick={addLike}> <LikeBtn /> 
          </LikeWrapper>
        }
      </Wrapper>
    </Container>
  );
}

export default CommentLikeButton;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonWrapper = styled.button`
  box-sizing: border-box;
  width: 55px;
  height: 25px;
  display: flex;
  align-items: center;
  border: 1px solid;
  border-color: ${Color.borderGray};
  background: #fff;
  color: ${Color.basicGray};
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
  border-radius: 5px;
  margin-right: 6px;
`;

const CommentBtn = styled.div`
  width: 14px;
  height: 14px;
  display: flex;
  background: url(${commentButton});
  background-size: cover;
  color: ${Color.basicGray};
  background-repeat: no-repeat;
  margin-right: 5px;
`;

const LikeBtn = styled.div`
  width: 14px;
  height: 14px;
  display: flex;
  background: url(${likeButton});
  background-size: cover;
  background-repeat: no-repeat;
  margin-right: 5px;
`;

const LikeBtnClick = styled.div`
  width: 14px;
  height: 14px;
  display: flex;
  background: url(${likeButtonClick});
  background-size: cover;
  background-repeat: no-repeat;
  margin-right: 5px;
`

const LikeWrapper = styled.button`
  box-sizing: border-box;
  width: 55px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  border-color: ${Color.borderGray};
  background: #fff;
  color: #808991;
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
  border-radius: 5px;
`;