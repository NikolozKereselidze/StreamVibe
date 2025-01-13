import { useLocation } from "react-router-dom";
import Search from "../components/Search/Search";
import { SearchResult } from "../types/search";
import styles from "../styles/Result.module.css";
import PlayButton from "../components/PlayButton";
import {
  CalendarIcon,
  FaceSmileIcon,
  LanguageIcon,
} from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import Ad from "../components/Ad";
import Footer from "../components/Footer";
import { useEffect } from "react";

const Result = () => {
  const location = useLocation();
  const item = location.state?.item as SearchResult;
  console.log(item);

  return (
    <>
      <Search />
      <div className="sectionHome">
        {item && (
          <>
            <div
              className={styles.card}
              style={{
                backgroundImage: item.backdrop_path
                  ? `linear-gradient(rgba(0, 0, 0, 0.05), rgba(255, 255, 255, 0.15)), url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
                  : "none",
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            >
              <div className={styles.cardTitle}>
                <h2 className={styles.title}>{item.title || item.name}</h2>
                <PlayButton title="Play Now" />
              </div>
            </div>

            <div className={styles.allInfoContainer}>
              <div className={styles.description}>
                <h3 className={styles.descriptionTitle}>Description</h3>
                <p className={styles.descriptionText}>{item.overview}</p>
              </div>

              <div className={styles.allDetails}>
                <div className={styles.infoWrap}>
                  <div className={styles.infoTitle}>
                    <CalendarIcon />
                    <h3>Release Year</h3>
                  </div>
                  <p className={styles.releaseYear}>
                    {item.first_air_date || item.releaseYear}
                  </p>
                </div>

                <div className={styles.infoWrap}>
                  <div className={styles.infoTitle}>
                    <LanguageIcon />
                    <h3>Available Languages</h3>
                  </div>
                  <div className={styles.languagesWrap}>
                    <p className={styles.language}>
                      {item.original_language?.toUpperCase()}
                    </p>
                    <p className={styles.language}>{"en".toUpperCase()}</p>
                  </div>
                </div>

                <div className={styles.infoWrap}>
                  <div className={styles.infoTitle}>
                    <StarIcon />
                    <h3>Ratings</h3>
                  </div>
                  <div className={styles.ratingsWrap}>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <p className={styles.ratingsScore}>
                      {item.vote_average?.toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className={styles.infoWrap}>
                  <div className={styles.infoTitle}>
                    <FaceSmileIcon />
                    <h3>Genres</h3>
                  </div>
                  <div className={styles.genresWrap}>
                    {Array.isArray(item.genres) ? (
                      item.genres.map((genre) => (
                        <p key={genre} className={styles.genres}>
                          {genre}
                        </p>
                      ))
                    ) : (
                      <p className={styles.genres}>{item.genres}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <Ad />
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Result;
