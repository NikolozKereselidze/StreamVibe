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
import { useEffect, useState } from "react";
import { fetchRecommendations, fetchVideo } from "../api/tmdbApi";
import MultipleCards from "../components/Cards/MultipleCards";

const Result = () => {
  const location = useLocation();
  const item = location.state?.item as SearchResult;
  const [recommendations, setRecommendations] = useState<SearchResult[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [videoKey, setVideoKey] = useState<string | null>(null);

  useEffect(() => {
    if (item) {
      fetchRecommendations(item.media_type, item.id)
        .then(setRecommendations)
        .catch((err) => setError(err.message));
    }
    setVideoKey(null);
  }, [item]);

  const handlePlayNow = async () => {
    if (!item) return;

    try {
      const videoData = await fetchVideo({
        media_type: item.media_type,
        id: item.id,
      });
      const trailer = videoData.results.find(
        (video: { type: string }) => video.type === "Trailer"
      );
      if (trailer) {
        setVideoKey(trailer.key);
      } else {
        alert("Trailer not available");
      }
    } catch (err) {
      console.error("Error fetching trailer:", err);
      alert("Failed to load the trailer.");
    }
  };

  const handleClosePlayer = () => {
    setVideoKey(null); // Reset the videoKey to remove the YouTube player
  };

  return (
    <>
      <Search />
      <div className="section">
        {item && (
          <>
            {videoKey ? (
              <div className={`${styles.card} ${styles.noPad}`}>
                <div className={styles.videoContainer}>
                  <button
                    className={styles.closeButton}
                    onClick={handleClosePlayer}
                  >
                    Close
                  </button>
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&controls=0`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ) : (
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
                  <PlayButton title="Play Now" onClick={handlePlayNow} />
                </div>
              </div>
            )}

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

              <div className={styles.recWrap}>
                {error ? (
                  <p className={styles.error}>{error}</p>
                ) : recommendations.length > 0 ? (
                  <MultipleCards
                    title="Similar"
                    showOnPage={3}
                    results={recommendations}
                  />
                ) : (
                  <p className={styles.noRecommendations}>
                    Loading recommendations...
                  </p>
                )}
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
