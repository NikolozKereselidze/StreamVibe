import styles from "../styles/Ad.module.css";
import RedButton from "./RedButton";

const Ad = () => {
  return (
    <div className={styles.adWrap}>
      <div className={styles.adInfo}>
        <h2>Start your free trial today!</h2>
        <p>
          This is a clear and concise call to action that encourages users to
          sign up for a free trial of StreamVibe.
        </p>
      </div>
      <div className={styles.adButton}>
        <RedButton buttonText={"Start a Free Trial"} />
      </div>
    </div>
  );
};

export default Ad;
