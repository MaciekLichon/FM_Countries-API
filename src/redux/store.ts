import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./filtersSlice";
import countriesReducer from "./countriesSlice";

export const store = configureStore({
    reducer: {
        filters: filtersReducer,
        countries: countriesReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// import { combineReducers, createStore, compose, applyMiddleware } from "redux";
// import countriesReducer from "./countriesSlice";
// import filtersReducer from "./filtersRedux";
// import { thunk } from "redux-thunk";
// import initialState from "./initialState";

// const subreducers = {
//     countries: countriesReducer,
//     filters: filtersReducer,
// };

// const reducer = combineReducers(subreducers);

// const store = createStore(
//     reducer,
//     initialState,
//     compose(
//         applyMiddleware(thunk),
//         (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
//     )
// );
