import { createSlice } from '@reduxjs/toolkit';

const initialComment = {
  comment: {}
};

export const comment = createSlice({
  name: 'selectedComment',
  initialState: initialComment,
  reducers: {
    getComment(state, action) {
      state.comment = action.payload;
    },
  }
});


export const { getComment } = comment.actions;
