import ListGroup from "react-bootstrap/ListGroup";
import { Doc } from "../../types/SearchResults";
import Container from "react-bootstrap/Container";

interface SearchResultProps {
  searchResult: Doc;
}

const SearchResult = (props: SearchResultProps) => {
  const { searchResult } = props;

  return (
    <Container fluid>
      <ListGroup.Item as="li">
        <div className="fw-bold">{searchResult.title}</div>
        <div>Author(s): {searchResult.author_name?.join(", ")}</div>
        <div>First Published: {searchResult.first_publish_year}</div>
        <div>ISBN: {searchResult.isbn && searchResult.isbn[0]}</div>
        <div>Number of pages: {searchResult.number_of_pages_median}</div>
      </ListGroup.Item>
    </Container>
  );
};

export default SearchResult;
