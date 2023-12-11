// selectors
export const getAllCountries = state => state.countries;

// actions
const createActionName = actionName => `app/filters/${actionName}`;
const UPDATE_FILTERS = createActionName('UPDATE_FILTERS');

// action creators
export const updateFilters = payload => ({ type: UPDATE_FILTERS, payload });

// reducer
const filtersReducer = (statePart = {}, action) => {
    switch (action.type) {
        case UPDATE_FILTERS:
            return action.payload;
        default: 
            return statePart;
    }
};

export default filtersReducer;