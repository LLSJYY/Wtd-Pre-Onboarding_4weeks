import { createSlice } from '@reduxjs/toolkit';
import { Tcomments } from '../util/types/types';

const initialState = {
  value: Array<Tcomments>,
};

export const counterSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    increment: (state,action) => {
     console.log(state,action);
    },
    decrement: (state) => {
    },
  },
});


export default counterSlice.reducer;
