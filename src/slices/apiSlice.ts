import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "";

const baseQuery = fetchBaseQuery({ baseUrl: baseUrl });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["Book"],
  endpoints: () => ({}),
});
