import { useState } from "react";
import SubscriptionCard from "../Cards/SubscriptionCard";
import DoubleTitle from "../DoubleTitle";
import styles from "../../styles/SubscriptionRender.module.css";

const SubscriptionRender = () => {
  const [active, setActive] = useState(false);
  const [duration, setDuration] = useState("Monthly");

  return (
    <>
      <div className={styles.faqTitles}>
        <DoubleTitle
          heading="Choose the plan that's right for you"
          desc="Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"
        />
        <div className={styles.planButtons}>
          <button
            className={`${styles.monthButton} ${!active && styles.active}`}
            onClick={() => {
              setActive(false);
              setDuration("Monthly");
            }}
          >
            Monthly
          </button>
          <button
            className={`${styles.yearButton} ${active && styles.active}`}
            onClick={() => {
              setActive(true);
              setDuration("Yearly");
            }}
          >
            Yearly
          </button>
        </div>
      </div>
      <div className={styles.subscriptionCards}>
        <SubscriptionCard duration={duration} />
      </div>
    </>
  );
};

export default SubscriptionRender;
