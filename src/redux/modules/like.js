// import { createAction, handleActions } from "redux-actions";
// import { produce } from "immer";
// import api from "../../shared/API";

// // LikeAction
// const ADD_LIKE = "ADD_LIKE";
// const CANCEL_LIKE = "CANCEL_LIKE";

// // LikeActionCreator
// const addLike = createAction(ADD_LIKE, (like) => ({ like }));
// const cancelLike = createAction(CANCEL_LIKE, (like) => ({ like }));

// // initailState
// const initialState = {
//   likeList: [],
//   likesItChecker: false
// }

// // 좋아요 클릭
// const addLikeAPI = (username, commentId) => {
//   return function (dispatch, getState, { history }) {
//     api
//       .post(`/likeIt/${commentId}`, {
//         username: username,
//         commentId: commentId
//       })
//       .then((response) => {
//         console.log(response.config.data);
//         dispatch(addLike(response.config.data));
//         console.log("좋아요 성공");
//       })
//       .catch((error) => {
//         console.log("좋아요 실패", error);
//       })
//   }
// }

// // 좋아요 취소
// const cancelLikeAPI = (username, commentId) => {
//   return function (dispatch, getState, { history }) {
//     api
//       .post(`/likeIt`, {
//         username: username,
//         commentId: commentId
//       })
//       .then((response) => {
//         console.log(response.data);
//         dispatch(cancelLike(response.data));
//         console.log("좋아요 취소 성공");
//       })
//       .catch((error) => {
//         console.log("좋아요 취소 실패", error);
//       })
//   }

// }

// // LikeReducer
// export default handleActions(
//   {
//     [ADD_LIKE]: (state, action) => produce(state, (draft) => {
//       draft.likeList.push(action.payload.like);
//       draft.likesItChecker = true;

//     }),
//     [CANCEL_LIKE]: (state, action) => produce(state, (draft) => {
//       const index = draft.like.findIndex((l) => l.id === action.palyload.id);
//       draft.like.splice(index, 1);
//     })
//   }, initialState
// );

// // ActionCreator export
// const actionCreators = {
//   addLikeAPI,
//   cancelLikeAPI,
// }

// export { actionCreators };