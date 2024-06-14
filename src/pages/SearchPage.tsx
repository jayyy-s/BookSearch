import SearchBar from "../components/SearchBar";
import SearchResultList from "../components/SearchResults/SearchResultList";
import Container from "react-bootstrap/Container"

const SearchPage = () => {
  return (
    <Container fluid="md" className="p-4">
      <SearchBar />
      <SearchResultList />
    </Container>
  );
};

export default SearchPage;
