// import createStore (duh), middleware (enhance redux behavior)
// and compose, which is support for redux developer tools
import { createStore, applyMiddleware, compose } from "react-redux";
// notice we don't need to ref. 'index' for root reducer, it's auto
import rootReducer from "./reducers";
// we pass the above import to applyMiddleware - it warns us if we
// try to mutate state in any way (state safety net)
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

export default function configStore(initState) {
  // add support for redux dev tools
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  // config the store
  return createStore(
    rootReducer, // our reducer, which uses actions to change state
    initState, // baseline state
    composeEnhancers(applyMiddleware(reduxImmutableStateInvariant())) // middleware
  );
}
