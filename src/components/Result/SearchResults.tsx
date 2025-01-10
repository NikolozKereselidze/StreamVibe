import { SearchResult } from "../../types/search";
import SearchResultItem from "./SearchResultItem";
import styles from "../../styles/Results.module.css";

interface SearchResultsProps {
  results: SearchResult[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
  return (
    <div className={styles.wrapper}>
      {results.length === 0 ? (
        <p>No results found.</p>
      ) : (
        results.map((item) => <SearchResultItem key={item.id} item={item} />)
      )}
    </div>
  );
};

export default SearchResults;
