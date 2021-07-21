import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import api from "../../shared/API";

// Action
const ADD_REVIEW = "ADD_REVIEW";
const GET_REVIEW = "GET_REVIEW";
const EDIT_REVIEW = "EDIT_REVIEW";
const DELETE_REVIEW = "DELETE_REVIEW";
const WRITE_TEXT = "WRITE_TEXT";

// ActionCreator
const addReview = createAction(ADD_REVIEW, (comments) => ({ comments }));
const getReview = createAction(GET_REVIEW, (review) => ({ review }));
const editReview = createAction(EDIT_REVIEW, (comments) => ({ comments }));
const deleteReview = createAction(DELETE_REVIEW, (comments) => ({ comments }));
const writeText = createAction(WRITE_TEXT, (text) => ({ text }));

// initailState
const initailState = {
  review: [],
  text: null,
}

// 리뷰 쓴 내용 화면에 기록
const writeTextPage = (value) => {
  return function (dispatch, getState, { history }) {
    dispatch(writeText(value));
  }
}

// 리뷰 추가 API
const addReviewAPI = (comments, username, id) => {
  return function (dispatch, getState, { history }) {
    api
      .post(`/comment`, {
        comments: comments,
        username: username,
        bookId: id,
        stars: 4
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
        console.log(response.data);
        dispatch(getReview(response.data));
        console.log("리뷰 가져오기 성공");
      })
      .catch((error) => {
        console.log("리뷰 가져오기 실패", error);
      })
  }
}

// 내가 쓴 리뷰 가져오기 API
// const getMyReviewAPI = () => {
//   return function (dispatch, getState, { history }) {
//     api
//       .get(`/usercomment/${bookId}`, {
//         "isWrited": true / false,
//         "comments": "comments",
//         "stars": 4
//       })
//   }
// }

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
    })
  }, initailState
)

// ActionCreator export
const actionCreators = {
  writeTextPage,
  getReview,
  addReviewAPI,
  getReviewAPI,
  deleteReviewAPI,
  editReviewAPI,
}

export { actionCreators };