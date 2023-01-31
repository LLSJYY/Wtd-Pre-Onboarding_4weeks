import { createSlice } from '@reduxjs/toolkit';

const initialPage  = {
  pageNumber: 1
};

export const pageNumberSlice = createSlice({
  name: 'pageNumber',
  initialState : initialPage,
  reducers: {
    selectedPageNumber (state,action){
      state.pageNumber = action.payload;
    }
  }
});


export const { selectedPageNumber } = pageNumberSlice.actions; 
export default pageNumberSlice.reducer;