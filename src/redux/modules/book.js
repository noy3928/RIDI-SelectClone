import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import api from "../../shared/API"


// Action
const LOAD_BOOKS = "book/LOAD_BOOKS";
const GET_BOOKDETAIL = "book/GET_BOOKDETAIL"
const CHANGE_CATEGORY = "book/CHANGE_CATEGORY";
const GET_PAGENUM = "book/GET_PAGENUM";
const GET_STARINFO = "book/GET_STARINFO";

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
const getPageNum = createAction(GET_PAGENUM, (pageNum) => ({
  pageNum,
}))
const getStarInfo = createAction(GET_STARINFO, (star_info) =>({
  star_info,
}))

// initailState
const initialState = {
  book_list: [],
  book_info: { bookIntro: "1", bookIndex: "1", publicationDate: "1", writerIntro: "1" },
  category: 100,
  pageNum: 10,
  starInfo: {
    avgStars: 0,
    starDetailInfo:
    {star1Count: 0,
    star2Count: 0,
    star3Count: 0,
    star4Count: 0,
    star5Count: 0},
    totalCount: 0}
}

const loadBookAPI = (pageNumber = 1) => {
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

    api.get(`/bookdetail/${id}`).then((res) => {
      let starObject = {}

      if(res.data.stars == null){
        starObject["star5Count"] = 0;
        starObject["star4Count"] = 0;
        starObject["star3Count"] = 0;
        starObject["star2Count"] = 0;
        starObject["star1Count"] = 0;
        starObject["is_null"] = true;
      }else{
        starObject = {...res.data.stars, "is_null":false}
      }

      const starInfo = {
        "avgStars" : res.data.avgStars,
        "totalCount":res.data.countStars,
        "starDetailInfo":starObject,
      }

      dispatch(getStarInfo(starInfo))
      dispatch(getBookDetail(res.data))
    }).catch((err) => {
      console.log("Detail load error!", err);
    })
  };
}

const getCategoryNum = (category = 100) => {
  return function (dispatch, getState, { history }) {
    dispatch(changeCategory(category))
  }
}

const getPageNumAPI = () => {
  return function (dispatch, getState, { history }) {
    const category = getState().book.category;
    api
      .get(`/category/${category}?page=1`)
      .then((res) => {
        const totalPageNum = res.data.totalPages;
        dispatch(getPageNum(totalPageNum))
      }).catch((err) => {
        console.log("Getting pagenumber error!", err);
      })
  }
}

// Reducer
export default handleActions(
  {
    [LOAD_BOOKS]: (state, action) =>
      produce(state, (draft) => {
        draft.book_list = action.payload.book_list;
      }),
    [CHANGE_CATEGORY]: (state, action) => produce(state, (draft) => {
      draft.category = action.payload.category;
    }),
    [GET_BOOKDETAIL]: (state, action) => produce(state, (draft) => {
      draft.book_info = action.payload.book_info
    }),
    [GET_PAGENUM]: (state, action) => produce(state, (draft) => {
      draft.pageNum = action.payload.pageNum
    }),
    [GET_STARINFO] : (state, action) => produce(state, (draft) => {
      draft.starInfo = action.payload.star_info
    })
  },
  initialState
);

const actionCreators = {
  loadBookAPI,
  getCategoryNum,
  getBookDetailAPI,
  getPageNumAPI,
};
export { actionCreators };

// ActionCreator export