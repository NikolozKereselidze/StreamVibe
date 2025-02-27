import styles from "../../styles/Home.module.css";
import background from "../../assets/background/home-background.webp";
import backgroundLogo from "../../assets/background/background-logo.webp";
import PlayButton from "../PlayButton";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <div className={styles.backgroundWrap}>
        <div
          className={styles.background}
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <img src={backgroundLogo} className={styles.backgroundLogo} alt="" />
        </div>
        <div className={styles.welcome}>
          <div className={styles.welcomeText}>
            <h2>The Best Streaming Experience</h2>
            <p>
              StreamVibe is the best streaming experience for watching your
              favorite movies and shows on demand, anytime, anywhere. With
              StreamVibe, you can enjoy a wide variety of content, including the
              latest blockbusters, classic movies, popular TV shows, and more.
              You can also create your own watchlists, so you can easily find
              the content you want to watch.
            </p>
          </div>
          <Link to="/media" className={styles.mediaLink}>
            <PlayButton title="Start Watching Now" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Welcome;
