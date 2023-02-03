import { configureStore } from '@reduxjs/toolkit';
import { commentsApi } from '../Api';
import { pageNumberSlice } from './page/pageCount';
export const store = configureStore({
  reducer: {
    [commentsApi.reducerPath]: commentsApi.reducer,
    pageNumberSlice : pageNumberSlice.reducer
  },
  devTools:true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(commentsApi.middleware)
});

