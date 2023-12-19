import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IFiltersState {
    name: string;
    region: string;
}

const initialState: IFiltersState = {
    name: "",
    region: "",
};

const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        updateFilters: (state, action: PayloadAction<IFiltersState>) => {
            state.name = action.payload.name;
            state.region = action.payload.region;
        },
    },
});

export const { updateFilters } = filtersSlice.actions;
export default filtersSlice.reducer;

// -------

// import initialState, { IFiltersState } from "./initialState";

// actions
// const createActionName = (actionName: string) => `app/filters/${actionName}`;
// const UPDATE_FILTERS = createActionName("UPDATE_FILTERS");

// // action creators
// export const updateFilters = (payload: IFiltersState) => ({
//     type: UPDATE_FILTERS,
//     payload,
// });

// // reducer
// const filtersReducer = (statePart = initialState.filters, action) => {
//     switch (action.type) {
//         case UPDATE_FILTERS:
//             return action.payload;
//         default:
//             return statePart;
//     }
// };

// export default filtersReducer;
