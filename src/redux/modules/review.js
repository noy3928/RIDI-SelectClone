import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from 'axios';
import api from "../../shared/API";

// Action
const ADD_REVIEW = "ADD_REVIEW";
const GET_REVIEW = "GET_REVIEW";
const SET_REVIEW = "SET_REVIEW";
const EDIT_REVIEW = "EDIT_REVIEW";
const REMOVE_REVIEW = "REMOVE_REVIEW";

// ActionCreator
const addReview = createAction(ADD_REVIEW, (comments) => ({ comments }));
const getReview = createAction(GET_REVIEW, (review) => ({ review }));
const setReview = createAction(SET_REVIEW, (bookId, comments) => ({ bookId, comments }));
const editReview = createAction(EDIT_REVIEW, (bookId, comments) => ({ bookId, comments }));
const removeReview = createAction(REMOVE_REVIEW, (commentId) => ({ commentId }));

// initailState
const initailState = {
  list: [],
}

const addReviewAPI = (comments) => {
  return function (dispatch, getState, { history }) {
    console.log(comments);

    api
      .post(`/comment`, comments)
      .then((response) => {
        console.log(response.data);
        dispatch(addReview(response.data));
        console.log("리뷰 작성 완료");
      })
      .catch((error) => {
        console.log("리뷰 작성 실패", error);
      })
  }
}

const getReviewAPI = (bookId) => {
  return function (dispatch, getState, { history }) {
    const username = getState().user.username;
    const comments = getState().review.list;
    console.log(username, bookId);
    console.log(comments);

    api
      .get(`/comment/{bookId}`)
      .then((response) => {
        dispatch(setReview(bookId, comments));
        console.log("리뷰 가져오기 성공");
      })
      .catch((error) => {
        console.log("리뷰 가져오기 실패", error);
      })
  }
}

const editReviewAPI = (bookId, comments) => {
  return function (dispatch, getState, { history }) {
    console.log(bookId, comments);
    api
      .put(`/comment/{bookId}`, comments)
      .then((response) => {
        dispatch(editReview(bookId, response.data));
        console.log("리뷰 수정 성공");
      })
      .catch((error) => {
        console.log("리뷰 수정 실패", error);
      })
  }
}

const removeReviewAPI = (id) => {
  return function (dispatch, getState, { history }) {
    api
      .delete(`/comment/{id}`)
      .then((response) => {
        console.log(response);
        dispatch(removeReview(response.data));
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
    [ADD_REVIEW]: (state, action) => produce(state, (draft) => {
      draft.list.unshift(action.payload.comments);
    }),
    [GET_REVIEW]: (state, action) => produce(state, (draft) => {
      draft.list[action.payload.bookId] = action.payload.comment_list;
    }),
    [SET_REVIEW]: (state, action) => produce(state, (draft) => {
      draft.list[action.payload.bookId] = action.payload.comment_list;
    }),
    [EDIT_REVIEW]: (state, action) => produce(state, (draft) => {
      let idx = draft.list.findIndex((c) => c.id === action.payload.id);
      console.log(action.payload.comments);
      draft.list[idx] = {
        ...action.payload.comments
      }
    }),
    [REMOVE_REVIEW]: (state, action) => produce(state, (draft) => {
      draft.list = draft.list.filter((l, idx) => {
        return l.id !== action.payload.id;
      })
    })
  }, initailState
)

// ActionCreator export
const actionCreators = {
  addReview,
  getReview,
  addReviewAPI,
  getReviewAPI,
  editReviewAPI,
  removeReviewAPI,
}

export { actionCreators };