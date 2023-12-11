import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import initialState from "./initialState";
import countriesReducer from "./countriesRedux";
import filtersReducer from "./filtersRedux";
import { thunk } from "redux-thunk";

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
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;