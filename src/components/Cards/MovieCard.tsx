import { SearchResult } from "../../types/search";
import styles from "../../styles/Results.module.css";

interface MovieCardProps {
  item: SearchResult;
}

const MovieCard: React.FC<MovieCardProps> = ({ item }) => (
  <>
    {item.poster_path && (
      <img
        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
        alt={`${item.title} poster`}
      />
    )}

    <div className={styles.details}>
      <div className={styles.detailsHeader}>
        <h4 className={styles.age}>{item.ageRating}</h4>
        {item.runtime && (
          <h4 className={styles.runtime}>
            {`${item.runtime >= 60 ? Math.floor(item.runtime / 60) : 0}h ${
              item.runtime % 60 < 10
                ? `0${item.runtime % 60}`
                : item.runtime % 60
            }m`}
          </h4>
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

export default MovieCard;
