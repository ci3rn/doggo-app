import doggosReducersDefaultState from '../doggos.json';
import { createReducer } from '@reduxjs/toolkit';

export default createReducer([] = doggosReducersDefaultState, (builder) => {
    builder
        .addDefaultCase((state, action) => {
            return state;
        });
});

// without using reduxjs/toolkit
// export default (state = doggosReducersDefaultState, action) => {
//     switch(action.type) {
//         default:
//             return state;
//     }
// };