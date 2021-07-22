import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Color from "../shared/Color";
import { Input } from "../shared/Styles";
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import RatingSummary from "./RatingSummary";
import RatingStar from "../elements/RatingStar"
import ReviewList from "./ReviewList";


import { useSelector, useDispatch } from "react-redux";
import { actionCreators as reviewActions } from "../redux/modules/review";

const ReviewWrite = (props) => {
  const dispatch = useDispatch();

  const [isEdit, setIsEdit] = useState(false);
  const { id } = props;

  const is_login = useSelector((store) => store.user.is_login);
  const username = useSelector((store) => store.user.username);
  const reviewList = useSelector((store) => store.review.review);

  // 내가 쓴 리뷰만 가져오기
  const myComments = reviewList.find(l => l.username === username);
  const [comments, setComments] = useState("");

  //별점메기기 
  const [rateStar, setRateStar] = useState(0);
  const getRateStar = (num) => {
    setRateStar(num)
  }

  console.log("rateStar")

  // 리뷰작성확인
  const onChageReview = (e) => {
    setComments(e.target.value);
  }

  //댓글 작성
  const write = () => {
    if (!is_login) {
      window.alert("로그인 후 작성 가능합니다.");
      return;
    }
    dispatch(reviewActions.addReviewAPI(comments, username, id, rateStar));
    setComments(comments);
    dispatch(reviewActions.writeTextPage(comments));
    setIsEdit(true);
  }

  //댓글 수정
  const editComment = () => {
    dispatch(reviewActions.editReviewAPI({
      bookId: myComments.bookId,
      id: myComments.id,
      comments: comments,
    }));
  }

  //댓글 삭제
  const deleteComment = () => {
    dispatch(reviewActions.deleteReviewAPI({
      bookId: myComments.bookId,
      id: myComments.id,
      comments: comments,
    }));
    setComments("");
  }

  useEffect(() => {
    const getUserName = reviewList.map(l => l.username)
    const searchUser = getUserName.filter((l) => l === username);

    if (searchUser.length === 0) {
      setIsEdit(false);
      return;
    }
    if (is_login && (searchUser[0] === username)) {
      setIsEdit(true);
      setComments(myComments.comments);
    }
    
  }, [reviewList]);

  if (isEdit) {
    return (
      <React.Fragment>
        <ReviewHeaderBox>
          <RatingSummary/>
          <ReviewHeaderRight>
            <RatingStar getRateStar={getRateStar}/>
            <WriteWrapper>
              <Input
                border="none"
                bgColor={Color.lightGray}
                _onChange={onChageReview}
                value={comments}
                multiLine
              ></Input>
              <ButtonWrapper>
                <EditDelBtnWrapper>
                  <EditButton
                    onClick={editComment}>
                    <CreateIcon />
                  </EditButton>
                  <DeleteButton
                    onClick={deleteComment}>
                    <DeleteIcon />
                  </DeleteButton>
                </EditDelBtnWrapper>
              </ButtonWrapper>
            </WriteWrapper>
          </ReviewHeaderRight>
        </ReviewHeaderBox>
        <ReviewList id={id}/>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <ReviewHeaderBox>
          <RatingSummary/>
          <ReviewHeaderRight>
            <RatingStar getRateStar={getRateStar} is_edit={isEdit}/>
            <WriteWrapper>
              <Input
                border="2px solid #d1d5d9"
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
          </ReviewHeaderRight>
        </ReviewHeaderBox>
        <ReviewList id={id} isEdit={isEdit}/>
      </React.Fragment>
    )
  }
}

export default ReviewWrite;

const ReviewHeaderBox = styled.div`
display:flex;
width:800px;
margin:30px auto;
`

const ReviewHeaderRight = styled.div`
width:100%;
`

const WriteWrapper = styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px 0px;
  width: 100%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
`;

const EditDelBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  bottom: 50px;
  right: 15px;
  width: 100%;
`;

const NoticeButton = styled.button`
  width: auto; 
  font-size: 12px;
  height: 30px;
  border: 1px solid ${Color.borderGray};
  border-radius: 5px;
  background-color: ${Color.white};
  color: ${Color.basicGray};
  font-weight: bold;
  padding: 0 18px;
  line-height: 30px;
  text-align: center;
`;

const EditButton = styled.div`
  color: ${Color.basicGray}
`;

const DeleteButton = styled.div`
  color: ${Color.basicGray}
`;

const WriteButton = styled.button`
  width: auto; 
  font-size: 12px;
  height: 30px;
  border: 1px solid ${Color.borderGray};
  border-radius: 5px;
  background-color: ${Color.white};
  color: ${Color.basicGray};
  font-weight: bold;
  padding: 0 15px;
  line-height: 18px;
  text-align: center;
`;


