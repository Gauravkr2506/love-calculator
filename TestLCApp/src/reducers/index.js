import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import MainReducer from "./main-reducer";

var reducers = combineReducers({
	main_store: MainReducer
});

const enhancer = compose(applyMiddleware(thunk));

const store = createStore(reducers, enhancer);

export default store;
