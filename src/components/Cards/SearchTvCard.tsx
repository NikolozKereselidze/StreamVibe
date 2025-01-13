import { SearchResult } from "../../types/search";
import styles from "../../styles/Results.module.css";
import { useNavigate } from "react-router-dom";

interface TVCardProps {
  item: SearchResult;
}

const SearchTvCard: React.FC<TVCardProps> = ({ item }) => {
  const navigate = useNavigate();

  const clickHandler = (
    item: SearchResult,
    navigate: ReturnType<typeof useNavigate>
  ) => {
    const newUrl = `/result?q=${encodeURIComponent(item.id)}`;
    if (location.search !== `?q=${encodeURIComponent(item.id)}`) {
      navigate(newUrl, { state: { item } });
    }
  };

  return (
    <>
      {item.poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w500${
            item.poster_path || item.backdrop_path
          }`}
          alt={`${item.name} poster`}
          onClick={() => clickHandler(item, navigate)}
        />
      )}

      <div className={styles.details}>
        <div className={styles.detailsHeader}>
          <h4 className={styles.age}>{item.ageRating}</h4>
          {item.seasons && (
            <h4 className={styles.season}>{item.seasons} seasons</h4>
          )}
        </div>
        <div className={styles.detailsFooter}>
          {item.genres?.map((i) => (
            <h2 key={`${item.id}-${i}`}>{i}</h2>
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchTvCard;
