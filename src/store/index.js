import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import reducer from "../reducers";
import rootSaga from "../sagas/events";

// create the sagas middleware
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// mount it on the Store
export default createStore(
    reducer,
    composeEnhancers(applyMiddleware(sagaMiddleware)));

// then run the sagas
sagaMiddleware.run(rootSaga);