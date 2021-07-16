import React from 'react';
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";
import Login from "../pages/Login";
import { history } from '../redux/ConfigStore';

const App = () => {
  return (
    <div className="App">
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/login" exact component={Login} />
        </Switch>
      </ConnectedRouter>
    </div>
  );
}



export default App;
