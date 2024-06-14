import { useState, useEffect } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { useSearchBooksMutation } from "../slices/booksApiSlice";
import { sortOptions } from "../enums/sortOptions";
import {
  setSearchResults,
  setSortMode,
} from "../slices/searchResultsStateSlice";
import { useDispatch } from "react-redux";
import { SearchResults } from "../types/SearchResults";
import Container from "react-bootstrap/Container";
import ToggleButton from "react-bootstrap/ToggleButton";

const SearchBar = () => {
  const dispatch = useDispatch();

  const [sortModeOption, setSortModeOption] = useState(sortOptions.relevance);
  const [searchQuery, setSearchQuery] = useState("");

  const [searchBooks] = useSearchBooksMutation();

  useEffect(() => {
    dispatch(setSortMode({ sortMode: sortModeOption }));
  }, [dispatch, sortModeOption]);

  useEffect(() => {
    const autoSearchWithDelay = setTimeout(async () => {
      try {
        if (searchQuery !== "") {
          const res: SearchResults = await searchBooks({
            searchQuery: encodeURIComponent(searchQuery),
          }).unwrap();
          dispatch(setSearchResults({ searchResults: res.docs }));
        }
      } catch (err) {
        const error = err as Error;
        console.log(`Error: ${error?.message}`);
      }
    }, 500);

    return () => clearTimeout(autoSearchWithDelay);
  }, [dispatch, searchBooks, searchQuery]);

  const toggleSortMode = () => {
    if (sortModeOption === sortOptions.relevance) {
      setSortModeOption(sortOptions.newestFirst);
    } else {
      setSortModeOption(sortOptions.relevance);
    }
  };

  return (
    <Container fluid className="px-4">
      <InputGroup>
        <Form.Control
          type="input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.currentTarget.value)}
          placeholder="Search for books!"
        />
        <ToggleButton
          variant={
            sortModeOption === sortOptions.relevance ? "primary" : "danger"
          }
          value={sortModeOption}
          id="toggle-sort-mode"
          onClick={toggleSortMode}
        >
          {sortModeOption}
        </ToggleButton>
      </InputGroup>
    </Container>
  );
};

export default SearchBar;
