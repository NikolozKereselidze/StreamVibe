import styles from "../../styles/SubscriptionCard.module.css";
import { subscription } from "../Home/SubscriptionRender";
import RedButton from "../RedButton";

const SubscriptionCard = ({
  title,
  subtitle,
  price,
  duration,
}: subscription) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardTitles}>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>

      <div className={styles.cardPrice}>
        <h3>${duration === "Monthly" ? price : price * 7}</h3>
        <span>/{duration}</span>
      </div>

      <div className={styles.cardButtons}>
        <button className={styles.trialButton}>Start Free Trial</button>
        <RedButton buttonText={"Choose Plan"} />
      </div>
    </div>
  );
};

export default SubscriptionCard;
