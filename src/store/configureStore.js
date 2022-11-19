import { configureStore, combineReducers } from '@reduxjs/toolkit'
import doggosReducer from '../reducers/doggos';

const reducer = combineReducers({
    doggos: doggosReducer
})

export default () => {
    const store = configureStore({
        reducer
    });
    return store;
};