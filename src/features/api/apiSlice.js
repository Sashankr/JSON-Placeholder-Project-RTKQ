import { BASE_API_URL } from "@/helpers/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
    }),
  }),
});

export const { useGetPostsQuery } = apiSlice;
