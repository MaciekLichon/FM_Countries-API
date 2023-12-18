import initialState, { IFiltersState } from "./initialState";

// selectors

// actions
const createActionName = (actionName: string) => `app/filters/${actionName}`;
const UPDATE_FILTERS = createActionName('UPDATE_FILTERS');

// action creators
export const updateFilters = (payload: IFiltersState) => ({ type: UPDATE_FILTERS, payload });

// reducer
const filtersReducer = (statePart = initialState.filters, action) => {
    switch (action.type) {
        case UPDATE_FILTERS:
            return action.payload;
        default: 
            return statePart;
    }
};

export default filtersReducer;