import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";
import thunk from "redux-thunk";
import Book from "./modules/book"

import user from "./modules/user";
import review from "./modules/review";
// import book from "./modules/product";
// import comment from "./modules/image";

const history = createBrowserHistory();
const rootReducer = combineReducers({
<<<<<<< HEAD
  user,
=======
  book: Book,
  // user,
>>>>>>> bfaa09ed91381b785c5b1a5acdc361b50ffda067
  // book,
  review,
  router: connectRouter(history),
});

const middlewares = [thunk.withExtraArgument({ history })];

const env = process.env.NODE_ENV;
if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const store = createStore(rootReducer, enhancer);

export { history };
export default store;