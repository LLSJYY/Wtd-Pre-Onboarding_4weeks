import { createSlice } from '@reduxjs/toolkit';
import { Tpage } from '../util/types/types';

const initialPage  = {
  pageNumber: 1
};

export const pageNumber = createSlice({
  name: 'pageNumber',
  initialState : initialPage,
  reducers: {
    selectedPageNumber (state,action){
      console.log(action);
      state.pageNumber = action.payload;
    }
  }
});


const initialComment  = {  
  comment : {}
};

export const selectedComment = createSlice({
  name: 'selectedComment',
  initialState : initialComment,
  reducers: {
    selectedComments (state,action){
      state.comment = action.payload;
    }
  }
});


export const { selectedComments } = selectedComment.actions;