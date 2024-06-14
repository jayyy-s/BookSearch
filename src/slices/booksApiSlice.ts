import { apiSlice } from "./apiSlice";
const BOOK_URL = "/api/search.json";

export const booksApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    searchBooks: builder.mutation({
      query: ({ searchQuery }) => {
        return {
          url: `${BOOK_URL}?q=${searchQuery}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useSearchBooksMutation } = booksApiSlice;
