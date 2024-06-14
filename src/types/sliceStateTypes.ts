import { Doc } from "./SearchResults";

type SearchResultsState = {
  searchResultsState: {
    searchResults: Doc[];
    sortMode: string;
  };
};

export type { SearchResultsState };
