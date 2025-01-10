import { SearchResult } from "../../types/search";
import styles from "../../styles/Results.module.css";
import MovieCard from "../Cards/MovieCard";
import TvCard from "../Cards/TvCard";
import PersonCard from "../Cards/PersonCard";

interface SearchResultItemProps {
  item: SearchResult;
}

const SearchResultItem: React.FC<SearchResultItemProps> = ({ item }) => {
  return (
    <div key={item.id} className={styles.card}>
      {item.media_type === "movie" && <MovieCard item={item} />}
      {item.media_type === "tv" && <TvCard item={item} />}
      {item.media_type === "person" && <PersonCard item={item} />}
    </div>
  );
};

export default SearchResultItem;
