import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import jwtDecode from "jwt-decode";
import Cookies from "universal-cookie";
import api from "../../shared/API";

const cookies = new Cookies();

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
    api
      .post(`/user/signup`, {
        "username": id,
        "password": pwd,
        "passwordChecker": pwd_check,
      })
      .then((response) => {
        history.replace('/login');
        console.log("회원가입 성공");
      })
      .catch((error) => {
        console.log("회원가입 실패", error);
      })
  }
}

const loginAPI = (id, pwd) => {
  return function (dispatch, getState, { history }) {
    api
      .post(`user/login`, {
        "username": id,
        "password": pwd,
      })
      .then((response) => {
        cookies.set("refresh_token", response.data);
        const token = cookies.get("refresh_token");
        const id = jwtDecode(token).sub;

        dispatch(setUser({
          username: id,
        }))
        console.log("로그인 성공");
        history.push("/");

      })
      .catch((error) => {
        console.log("로그인 실패");
      })
  }
}

const logOutRemoveCookie = () => {
  return function (dispatch, getState, { history }) {
    dispatch(logOut());
    console.log("로그아웃 성공")
  }
}

const loginCheck = () => {
  return function (dispatch, getState, { history }) {
    const token = cookies.get("refresh_token");
    const id = jwtDecode(token).sub;
    dispatch(setUser({
      username: id,
    }))
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
      window.location.reload();
      cookies.remove("refresh_token");
      draft.user = null;
      draft.is_login = false;
    })
  }, initailState
)

// ActionCreator export
const actionCreators = {
  signupAPI,
  loginAPI,
  logOutRemoveCookie,
  loginCheck,
}

export { actionCreators };