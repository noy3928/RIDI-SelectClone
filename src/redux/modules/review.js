import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import api from "../../shared/API";
import Cookies from "universal-cookie";
const cookies = new Cookies();

// Action
const ADD_REVIEW = "ADD_REVIEW";
const GET_REVIEW = "GET_REVIEW";
const EDIT_REVIEW = "EDIT_REVIEW";
const DELETE_REVIEW = "DELETE_REVIEW";
const WRITE_TEXT = "WRITE_TEXT";
const LIKE = "LIKE";
const GET_LIKE = "GET_LIKE";
const GET_ISWRITTEN = "GET_ISWRITTEN"

// ActionCreator
const addReview = createAction(ADD_REVIEW, (comments) => ({ comments }));
const getReview = createAction(GET_REVIEW, (review) => ({ review }));
const editReview = createAction(EDIT_REVIEW, (comments) => ({ comments }));
const deleteReview = createAction(DELETE_REVIEW, (comments) => ({ comments }));
const writeText = createAction(WRITE_TEXT, (text) => ({ text }));
const like = createAction(LIKE, (commentId) => ({ commentId }));
const getLike = createAction(GET_LIKE, (review) => ({ review }));
const getIsWritten = createAction(GET_ISWRITTEN, (review)=>({ review }));

// initailState
const initailState = {
  review: [],
  text: null,
  user_comment_info: {},
}

// 리뷰 쓴 내용 화면에 기록
const writeTextPage = (value) => {
  return function (dispatch, getState, { history }) {
    dispatch(writeText(value));
  }
}

// 리뷰 추가 API
const addReviewAPI = (comments, username, id, star) => {
  return function (dispatch, getState, { history }) {
    api
      .post(`/comment`, {
        comments: comments,
        username: username,
        bookId: id,
        stars: star
      })
      .then((response) => {
        dispatch(writeTextPage(response.data.comments));
        dispatch(addReview(response.data));
        console.log("리뷰 작성 완료");
      })
      .catch((error) => {
        console.log("리뷰 작성 실패", error);
      })
  }
}

// 리뷰 가져오기 API
const getReviewAPI = (bookId) => {
  return function (dispatch, getState, { history }) {
    api
      .get(`/comment/${bookId}`)
      .then((response) => {
        dispatch(getReview(response.data));
      })
      .catch((error) => {
        console.log("리뷰 가져오기 실패", error);
      })
  }
}

// 리뷰 수정 API
const editReviewAPI = (comments) => {
  return function (dispatch, getState, { history }) {
    const id = comments.id;
    const bookId = comments.bookId;

    api
      .put(`/comment/${id}`, comments)
      .then((response) => {
        dispatch(editReview(response.data.comments));
        dispatch(getReviewAPI(bookId));
        console.log("리뷰 수정 성공");
      })
      .catch((error) => {
        console.log("리뷰 수정 실패", error);
      })
  }
}

// 리뷰 삭제 API
const deleteReviewAPI = (comments) => {
  return function (dispatch, getState, { history }) {
    const id = comments.id;
    const bookId = comments.bookId;

    api
      .delete(`/comment/${id}`)
      .then((response) => {
        dispatch(deleteReview(id));
        dispatch(getReviewAPI(bookId));
        console.log("리뷰 삭제 성공");
      })
      .catch((error) => {
        console.log("리뷰 삭제 실패", error);
      })
  }
}

// 좋아요 클릭
const LikeAPI = (username, commentId) => {
  return function (dispatch, getState, { history }) {
    api
      .post(`/likeIt/${commentId}`, {
        username: username,
        commentId: commentId
      },
      )
      .then((response) => {
        console.log("------------", response);
        dispatch(like(commentId));
        console.log("좋아요 성공");
      })
      .catch((error) => {
        console.log("좋아요 실패", error);
      })
  }
}

// 좋아요 정보 가져오기
const getLikeAPI = () => {
  return function (dispatch, getState, { history }) {
    // bookId 어디서 받아오지?
    // 근데 좋아요만 따로 가져와야하나? 아닌 것 같음
    const bookId = getState().review
    api
      .get(`/comment/${bookId}`)
      .then((response) => {
        console.log(response.data);
        dispatch(getLike());
      })
      .catch((error) => {
        console.log("좋아요 정보 가져오기 실패", error);
      })
  }
}

const getIsWrittenAPI = (bookId) => {
  return function (dispatch, getState, { history }) {
    console.log("------------북 아이디 체크",bookId)

    api
      .get(`/usercomment/${bookId}`)
      .then((response) => {

        console.log("----------getIsWritten함수가 실행됩니다.", response);
        console.log(response.data)
        dispatch(getIsWritten(response.data))

      })
      .catch((error) => {
        console.log("-------getIsWritten함수", error);
        dispatch(getIsWritten(false))
      })
  }
}


// Reducer
export default handleActions(
  {
    [WRITE_TEXT]: (state, action) => produce(state, (draft) => {
      draft.text = action.payload.text;
    }),
    [ADD_REVIEW]: (state, action) => produce(state, (draft) => {
      draft.review.unshift(action.payload.comments);
    }),
    [GET_REVIEW]: (state, action) => produce(state, (draft) => {
      draft.review = action.payload.review;
    }),
    [EDIT_REVIEW]: (state, action) => produce(state, (draft) => {
      draft.comments = action.payload.comments;
    }),
    [DELETE_REVIEW]: (state, action) => produce(state, (draft) => {
      draft.comments = action.payload.comments;
    }),
    [GET_LIKE]: (state, action) => produce(state, (draft) => {
      draft.review = action.payload.review;
    }),
    [LIKE]: (state, action) => produce(state, (draft) => {
      let idx = draft.review.findIndex((l) => l.id === action.payload.commentId);
      if (draft.review[idx].likeItChecker) {
        draft.review[idx] = {
          ...draft.review[idx],
          likesCount: draft.review[idx].likesCount - 1,
          likeItChecker: !draft.review[idx].likeItChecker,
        };
      } else {
        draft.review[idx] = {
          ...draft.review[idx],
          likesCount: draft.review[idx].likesCount + 1,
          likeItChecker: !draft.review[idx].likeItChecker,
        };
      }
    }),
    [GET_ISWRITTEN] : (state, action) =>produce(state, (draft) => {
      draft.user_comment_info = action.payload.review;
    })
  }, initailState
)

// ActionCreator export
const actionCreators = {
  writeTextPage,
  addReviewAPI,
  getReviewAPI,
  deleteReviewAPI,
  editReviewAPI,
  LikeAPI,
  getLikeAPI,
  getIsWrittenAPI,
}

export { actionCreators };