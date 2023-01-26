import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { commentsApi } from './Api';
import { pageNumber } from './redux/Page';
import { comment } from './redux/comment';
export const store = configureStore({
  reducer: {
    [commentsApi.reducerPath]: commentsApi.reducer,
    comment  : comment.reducer,
    pageNumber : pageNumber.reducer

  },
  devTools:true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(commentsApi.middleware)
});

