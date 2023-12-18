import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import countriesReducer from "./countriesRedux";
import filtersReducer from "./filtersRedux";
import { thunk } from "redux-thunk";
import initialState from "./initialState";

const subreducers = {
    countries: countriesReducer,
    filters: filtersReducer
};

const reducer = combineReducers(subreducers);

const store = createStore(
    reducer,
    initialState,
    compose(
        applyMiddleware(thunk),
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;