import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import api from "../../shared/API"


// Action
const LOAD_BOOKS = "book/LOAD_BOOKS";
const CHANGE_CATEGORY = "book/CHANGE_CATEGORY";

// ActionCreator
const loadBooks = createAction(LOAD_BOOKS, (book_list) => ({
    book_list,
  }));
const changeCategory = createAction(CHANGE_CATEGORY, (category) => ({
  category,
  }));

// initailState
const initialState = {
  book_list: [],
  category: 100,
}

const loadBookAPI = (pageNumber=1) => {
  return function (dispatch, getState, { history }) {
    //함수안에 두가지 인자가 필요한데, 이 두가지 인자를 서로 다른 컴포넌트에서 받아와야하기 때문에 
    //category번호는 리덕스를 사용하기로 결정.
    const category = getState().category;
    console.log(category)

    api
      .get(`/book/${category}?page=${pageNumber}`)
      .then((res) => {
        dispatch(loadBooks(res.data))
      })
      .catch((err) => {
        console.log("list load error!", err);
      });
  };
};

const getCategoryNum = (category=100) => {
  return function(dispatch, getState, {history}){
    dispatch(changeCategory(category))
  }
}

// Reducer
export default handleActions(
    {
      [LOAD_BOOKS]: (state, action) =>
        produce(state, (draft) => {
          draft.book_list = action.payload.book_list;
        }),
      [CHANGE_CATEGORY]:(state,action) => produce(state,(draft) => {
        draft.category = action.payload.category;
      })
      },
    initialState
  );

  const actionCreators = {
    loadBookAPI,
    getCategoryNum,
  };
  export { actionCreators };

// ActionCreator export