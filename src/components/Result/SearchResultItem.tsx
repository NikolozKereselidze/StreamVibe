import { SearchResult } from "../../types/search";
import styles from "../../styles/Results.module.css";
import SearchMovieCad from "../Cards/SearchMovieCard";
import SearchTvCard from "../Cards/SearchTvCard";
import SearchPersonCard from "../Cards/SearchPersonCard";

interface SearchResultItemProps {
  item: SearchResult;
}

const SearchResultItem: React.FC<SearchResultItemProps> = ({ item }) => {
  return (
    <div key={item.id} className={styles.card}>
      {item.media_type === "movie" && <SearchMovieCad item={item} />}
      {item.media_type === "tv" && <SearchTvCard item={item} />}
      {item.media_type === "person" && <SearchPersonCard item={item} />}
    </div>
  );
};

export default SearchResultItem;
