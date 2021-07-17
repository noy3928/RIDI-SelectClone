import React from 'react';
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";
// import Login from "../pages/Login";
import { history } from '../redux/ConfigStore';
import Header from '../components/Header';
import "../App.css"
import styled from 'styled-components';

const App = () => {
  return (
    <MainContainer >
      <Header />
      <ConnectedRouter history={history}>
        {/* <Switch>
          <Route path="/login" exact component={Login} />
        </Switch> */}
      </ConnectedRouter>
    </MainContainer>
  );
}

const MainContainer = styled.div`
width:100vw;
height:100vh;
box-sizing:border-box;
overflow-x: hidden;
`



export default App;
