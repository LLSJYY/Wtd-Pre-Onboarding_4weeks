import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Tcomments } from "../util/types/types";
export const commentsApi = createApi({
  reducerPath: "commentsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/" }),
  tagTypes: ["commentPage", "User"],

  endpoints: (builder) => ({
    getCommentById: builder.query({
      query: (commentId: number) => ({ url: `comments/${commentId}` }),
    }),
    getCommentByPage: builder.query({
      query: (pageNumber = 1) => ({
        url: `comments?_page=${pageNumber}&_limit=4&_order=desc&_sort=id`,
      }),
      transformResponse(apiResponse: Array<Tcomments>, meta: any) {
        return {
          apiResponse,
          totalComment: meta.response.headers.get("X-Total-Count"),
        };
      },
      providesTags: ["commentPage"],
    }),
    addComment: builder.mutation({
      query: ({ newComment }) => {
        return {
          url: `comments/`,
          method: "POST",
          body: newComment,
        };
      },
      invalidatesTags: ["commentPage"],
    }),
    updateComment: builder.mutation({
      query: ({ id, newComment }) => {
        return {
          url: `comments/${id}`,
          method: "PUT",
          body: newComment,
        };
      },
      invalidatesTags: ["commentPage"],
    }),
    deleteComment: builder.mutation({
      query: ({ id }) => {
        return {
          url: `comments/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["commentPage"],
    }),
  }),
});
export const {
  useGetCommentByIdQuery,
  useGetCommentByPageQuery,
  useUpdateCommentMutation,
  useDeleteCommentMutation,
  useAddCommentMutation,
} = commentsApi;
