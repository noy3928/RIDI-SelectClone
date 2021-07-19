import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import api from "../../shared/API"


// Action
const LOAD_BOOKS = "book/LOAD_BOOKS";
const GET_BOOKDETAIL = "book/GET_BOOKDETAIL"
const CHANGE_CATEGORY = "book/CHANGE_CATEGORY";

// ActionCreator
const loadBooks = createAction(LOAD_BOOKS, (book_list) => ({
    book_list,
  }));
const getBookDetail = createAction(GET_BOOKDETAIL, (book_info) => ({
  book_info,
}))
const changeCategory = createAction(CHANGE_CATEGORY, (category) => ({
  category,
  }));


// initailState
const initialState = {
  book_list: [],
  book_info:[{bookIntro:"1",bookIndex:"1",publicationDate:"1",writerIntro:"1"}],
  category: 100,
}

const loadBookAPI = (pageNumber=1) => {
  return function (dispatch, getState, { history }) {
    //함수안에 두가지 인자가 필요한데, 이 두가지 인자를 서로 다른 컴포넌트에서 받아와야하기 때문에 
    //category번호는 리덕스를 사용하기로 결정.
    const category = getState().book.category;
    console.log(category)
    api
      .get(`/category/${category}?page=${pageNumber}`)
      .then((res) => {
        dispatch(loadBooks(res.data.content))
      })
      .catch((err) => {
        console.log("list load error!", err);
      });
  };
};

const getBookDetailAPI = (id) => {
  return function (dispatch, getState, { history }) {

    api.get(`/book/${id}`).then((res)=> {
      // console.log(res.data)
      dispatch(getBookDetail(res.data))
    })
  };
}

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
      }),
      [GET_BOOKDETAIL]:(state,action) => produce(state,(draft)=> {
        draft.book_info = action.payload.book_info
      }),
      },
    initialState
  );

  const actionCreators = {
    loadBookAPI,
    getCategoryNum,
    getBookDetailAPI,
  };
  export { actionCreators };

// ActionCreator export