import { SearchResult } from "../../types/search";
import styles from "../../styles/Results.module.css";

interface PersonCardProps {
  item: SearchResult;
}

const SearchPersonCard: React.FC<PersonCardProps> = ({ item }) => (
  <>
    {item.profile_path || item.poster_path || item.backdrop_path ? (
      <img
        src={`https://image.tmdb.org/t/p/w500${
          item.profile_path || item.poster_path || item.backdrop_path
        }`}
        alt={`${item.name}`}
      />
    ) : (
      <p>Image not Available</p>
    )}

    <div className={`${styles.details} ${styles.detailsPerson}`}>
      <div className={styles.detailsHeaderPerson}>
        {item.name && (
          <>
            <h3>Full Name</h3>
            <h4 className={styles.personName}>{item.name}</h4>
          </>
        )}
        {item.gender && (
          <>
            <h3>Gender</h3>
            <h4 className={styles.gender}>
              {item.gender === 2 ? "Male" : "Female"}
            </h4>
          </>
        )}
      </div>
      <div className={styles.detailsFooterPerson}>
        <h3>Known For</h3>
        {item.known_for?.map((i, index) => (
          <h2 className={styles.knownFor} key={`${index}-${i}`}>
            {i.original_title}
          </h2>
        ))}
      </div>
    </div>
  </>
);

export default SearchPersonCard;
