import { createSlice } from "@reduxjs/toolkit";
import { sortOptions } from "../enums/sortOptions";

const initialState = {
  searchResults: [],
  sortMode: sortOptions.relevance,
};

const searchResultsStateSlice = createSlice({
  name: "searchResultsState",
  initialState,
  reducers: {
    setSearchResults: (state, action) => {
      const { searchResults } = action.payload;
      state.searchResults = searchResults;
    },
    setSortMode: (state, action) => {
      const { sortMode } = action.payload;
      state.sortMode = sortMode;
    },
  },
});

export const { setSearchResults, setSortMode } = searchResultsStateSlice.actions;

export default searchResultsStateSlice.reducer;
