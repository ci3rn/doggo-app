// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// SORT_BY_NAME
export const sortByName = () => ({ type: 'SORT_BY_NAME' });

// SORT_BY_AGE
export const sortByAge = () => ({ type: 'SORT_BY_AGE' });

// SORT_BY_WEIGHT
export const sortByWeight = () => ({ type: 'SORT_BY_WEIGHT' });