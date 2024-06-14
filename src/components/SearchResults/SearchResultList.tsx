import { useSelector } from "react-redux";
import { SearchResultsState } from "../../types/sliceStateTypes";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { sortOptions } from "../../enums/sortOptions";
import { Doc } from "../../types/SearchResults";
import SearchResult from "./SearchResult";
import { ListGroup } from "react-bootstrap";

const SearchResultList = () => {
  const { searchResults, sortMode } = useSelector(
    (state: SearchResultsState) => state.searchResultsState
  );

  const [sortedSearchResults, setSortedSearchResults] =
    useState<Doc[]>(searchResults);

  useEffect(() => {
    // To sort by most recent pulbish year
    const comparePublishYear = (docA: Doc, docB: Doc) => {
      return docB.first_publish_year - docA.first_publish_year;
    };

    switch (sortMode) {
      case sortOptions.relevance:
        setSortedSearchResults(searchResults);
        break;
      case sortOptions.newestFirst:
        setSortedSearchResults([...searchResults].sort(comparePublishYear));
        break;
    }
  }, [searchResults, sortMode]);

  return (
    <Container fluid className="mt-4">
      <ListGroup as="ul">
        {sortedSearchResults.map((searchResult) => (
          <SearchResult searchResult={searchResult} />
        ))}
      </ListGroup>
    </Container>
  );
};

export default SearchResultList;
