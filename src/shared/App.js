import React from 'react';
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";
import Login from "../pages/Login";
import Signup from '../pages/Signup';
import BookDetail from "../pages/BookDetail";
import { history } from '../redux/ConfigStore';

const App = () => {
  return (
    <div className="App">
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/bookdetail" exact component={BookDetail} />
        </Switch>
      </ConnectedRouter>
    </div>
  );
}



export default App;
