const filtersReducerDefaultState = {
    text: '',
    sortBy: 'name'
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_NAME':
            return {
                ...state,
                sortBy: 'name'
            };
        case 'SORT_BY_AGE':
            return {
                ...state,
                sortBy: 'age'
            };
        case 'SORT_BY_WEIGHT':
            return {
                ...state,
                sortBy: 'weight'
            };
        default:
            return state
    }
}

export { filtersReducer as default }