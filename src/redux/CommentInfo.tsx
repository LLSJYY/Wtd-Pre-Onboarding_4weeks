import { createSlice } from '@reduxjs/toolkit';

const initialState  = {
    commentId: 1
};

export const commentId = createSlice({
  name: 'commentId',
  initialState,
  reducers: {
    selectedComments (state,action){
      state.commentId = action.payload;
    }
  }
});
