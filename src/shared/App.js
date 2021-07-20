import React, { useEffect } from 'react';
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";
import Login from "../pages/Login";
import Signup from '../pages/Signup';
import BookDetail from "../pages/BookDetail";
import { history } from '../redux/ConfigStore';
import Header from '../components/Header';
import "../App.css"
import styled from 'styled-components';
import Main from "../pages/Main"
import { useDispatch } from 'react-redux';
import { actionCreators as userActions } from '../redux/modules/user';

const App = () => {
  const dispatch = useDispatch();

  const token = localStorage.getItem("is_token");
  const _is_token = localStorage.getItem(token) ? true : false;

  useEffect(() => {
    dispatch(userActions.loginCheckStorage());
  }, []);

  return (
    <MainContainer >
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/bookdetail/:id" exact component={BookDetail} />
        </Switch>
      </ConnectedRouter>
    </MainContainer>
  );
}

const MainContainer = styled.div`
width:100vw;
height:100vh;
box-sizing:border-box;
overflow-x: hidden;
overflow-y: scroll;
font-family: "NotoSans";
`



export default App;
