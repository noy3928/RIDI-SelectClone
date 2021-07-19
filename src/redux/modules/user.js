import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from 'axios';

// Action
const SET_USER = "SET_USER";
const LOG_OUT = "LOG_OUT";

// ActionCreator
const setUser = createAction(SET_USER, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));

// initailState
const initailState = {
  username: null,
  is_login: false,
}

const signupAPI = (id, pwd, pwd_check) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: "post",
      url: "http://3.36.103.48/user/signup",
      data: {
        "username": id,
        "password": pwd,
        "passwordChecker": pwd_check,
      }
    }).then((response) => {
      history.replace('/login');
      console.log("회원가입 성공");
    }).catch((error) => {
      console.log("회원가입 실패", error);
    })
  }
}

const loginAPI = (id, pwd) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: "post",
      url: "http://3.36.103.48/user/login",
      data: {
        "username": id,
        "password": pwd,
      }
    }).then((response) => {
      console.log(response.data);
      if (response.data) {
        localStorage.setItem("is_token", response.data);
        localStorage.setItem("login_id", id);

        dispatch(setUser({
          username: id,
        }))
        console.log("로그인 성공");
        history.push("/");
      }
    }).catch((error) => {
      console.log("로그인 실패");
    })
  }
}

const logOutLocalStorage = () => {
  return function (dispatch, getState, { history }) {
    localStorage.removeItem("is_token");
    localStorage.removeItem("login_id");
    dispatch(logOut());
  }
}

const loginCheckStorage = () => {
  return function (dispatch, getState, { history }) {
    const token = localStorage.getItem("is_token");
    const id = localStorage.getItem("login_id");
    if (!token) {
      return;
    } else {
      dispatch(setUser({
        username: id,
      }))
    }
  }
}

// Reducer
export default handleActions(
  {
    [SET_USER]: (state, action) => produce(state, (draft) => {
      draft.username = action.payload.user.username;
      draft.is_login = true;
    }),
    [LOG_OUT]: (state, action) => produce(state, (draft) => {
      draft.user = null;
      draft.is_login = false;
    })
  }, initailState
)

// ActionCreator export
const actionCreators = {
  signupAPI,
  loginAPI,
  logOutLocalStorage,
  loginCheckStorage,
}

export { actionCreators };