import { SearchResult } from "../../types/search";
import styles from "../../styles/Results.module.css";

interface TVCardProps {
  item: SearchResult;
}

const TvCard: React.FC<TVCardProps> = ({ item }) => (
  <>
    {item.poster_path && (
      <img
        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
        alt={`${item.name} poster`}
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

export default TvCard;
