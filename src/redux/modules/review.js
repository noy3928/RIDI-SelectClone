+import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from 'axios';

// Action
const ADD_REVIEW = "ADD_REVIEW";
const GET_REVIEW = "GET_REVIEW";

// ActionCreator
const addReview = createAction(ADD_REVIEW, (bookId, comments) => ({ bookId, comments }));
const getReview = createAction(GET_REVIEW, (review) => ({ review }));

// initailState
const initailState = {
  list: [],
}

const addReviewAPI = (bookId, comments) => {
  return function (dispatch, getState, { history }) {
    const username = getState().user.username;
    console.log(username, comments, bookId);

    axios({
      method: "post",
      url: "http://3.36.103.48/comment",
      data: {
        "username": username,
        "comments": comments,
        "bookId": bookId,
        "stars": 4
      }
    }).then((response) => {
      dispatch(addReview(bookId, comments));
      console.log("리뷰 작성 완료");
    }).catch((error) => {
      console.log("리뷰 작성 실패", error);
    })
  }
}

// 진행중
// const getReviewAPI = (bookId) => {
//   return function (dispatch, getState, { history }) {
//     // bookId에서 comments 객체를 찾아서 보여준다. 
//     const username = getState().user.username;
//     console.log(username, bookId);

//     axios({
//       method: "get",
//       url: "http://3.36.103.48/comment/{bookId}",
//       data: {
//         "username": username,
//         "comments": comments,
//         "bookId": bookId,
//         "stars": 4
//         "createdAt": createdAT,
//       }
//     }).then((response) => {
//       dispatch(setReview.)
//     })
//   }
// }

// Reducer
export default handleActions(
  {
    [ADD_REVIEW]: (state, action) => produce(state, (draft) => {
      draft.list.push(action.payload.comments);
    }),
    [GET_REVIEW]: (state, action) => produce(state, (draft) => {

    })
  }, initailState
)


// ActionCreator export
const actionCreators = {
  addReview,
  addReviewAPI,
}

export { actionCreators };