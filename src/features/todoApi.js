import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api',
  }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => '/todo',
    }),
  }),
});

export const { useGetTodosQuery } = todoApi;
