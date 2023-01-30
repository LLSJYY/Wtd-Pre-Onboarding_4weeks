import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { commentsApi } from './Api';
import { pageNumberSlice } from './redux/page/pageCount';
import { comment } from './redux/comment';
export const store = configureStore({
  reducer: {
    [commentsApi.reducerPath]: commentsApi.reducer,
    comment  : comment.reducer,
    pageNumberSlice : pageNumberSlice.reducer
  },
  devTools:true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(commentsApi.middleware)
});

