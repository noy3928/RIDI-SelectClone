import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Color from "../shared/Color";
import { Input } from "../shared/Styles";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as reviewActions } from "../redux/modules/review";

const ReviewWrite = (props) => {
  const dispatch = useDispatch();
  const [comments, setComments] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const { id } = props;

  const is_login = useSelector((store) => store.user.is_login);
  const _username = useSelector((store) => store.user.username);
  const reviewList = useSelector((store) => store.review.review);

  // useEffect(() => {
  //   const testTest = (isName) => {
  //     if (isName.username === username) {
  //       console.log(isName.username);
  //       console.log(username);
  //       return true;
  //     }
  //   }

  //   const is_same_username = reviewList.filter(testTest);

  //   console.log("--------useEffect안에서", _username);
  //   const searchUser = reviewList.filter(function (element) { return element.username === _username });
  //   console.log(searchUser); // 현재 로그인한 사용자가 쓴 글만 찾아서 배열 안에 넣음
  //   console.log("---------useEffect안에서", _username);

  //   if (searchUser.length === 0) {
  //     return;
  //   }

  //   const writedUser = searchUser[0].username;
  //   console.log(writedUser);
  //   console.log(_username);

  //   if (is_login && (writedUser === _username)) {
  //     setIsEdit(true);
  //   }

  // }, []);

  useEffect(() => {
    console.log("--------useEffect안에서", _username);
    const searchUser = reviewList.filter(function (element) { return element.username === _username });
    console.log(searchUser); // 현재 로그인한 사용자가 쓴 글만 찾아서 배열 안에 넣음
    console.log("---------useEffect안에서", _username);

    if (searchUser.length === 0) {
      return;
    }

    const writedUser = searchUser[0].username;
    console.log(writedUser);
    console.log(_username);

    if (is_login && (writedUser === _username)) {
      setIsEdit(true);
    }

    dispatch(reviewActions.writeTextPage());
  }, []);


  const onChageReview = (e) => {
    setComments(e.target.value);
  }

  const write = () => {
    if (!is_login) {
      window.alert("로그인 후 작성 가능합니다.");
      return;
    }

    dispatch(reviewActions.addReviewAPI(
      {
        comments: comments,
        username: _username,
        bookId: id,
        stars: 4
      }
    ));
    setComments(comments);
    dispatch(reviewActions.writeTextPage(comments));
    setIsEdit(true);
  }

  const editComment = () => {
    dispatch(reviewActions.editReviewAPI(id, {
      comments: comments,
      username: _username,
    }));
  }

  const deleteComment = () => {
    dispatch(reviewActions.deleteReviewAPI(id));
  }

  if (isEdit) {
    return (
      <WriteWrapper>
        <Input
          border="none"
          bgColor={Color.lightGray}
          _onChange={onChageReview}
          value={comments}
          multiLine
        ></Input>
        <ButtonWrapper>
          <NoticeButton>
            리뷰작성 유의사항
          </NoticeButton>
          <EditDelBtnWrapper>
            <WriteButton
              onClick={editComment}>
              수정하기
            </WriteButton>
            <WriteButton
              onClick={deleteComment}>
              삭제하기
            </WriteButton>
          </EditDelBtnWrapper>
        </ButtonWrapper>
      </WriteWrapper>
    );
  } else {
    return (
      <WriteWrapper>
        <Input
          border="0.5px solid #d1d5d9"
          _onChange={onChageReview}
          value={comments}
          multiLine
          placeholder="리뷰 작성 시 광고 및 욕설, 비속어나 타인을 비방하는 문구를 사용하시면 비공개될 수 있습니다."
        ></Input>
        <ButtonWrapper>
          <NoticeButton>
            리뷰작성 유의사항
          </NoticeButton>
          <WriteButton
            onClick={write}
          >
            리뷰 남기기
          </WriteButton>
        </ButtonWrapper>
      </WriteWrapper>
    )
  }

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

const EditDelBtnWrapper = styled.div`
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


