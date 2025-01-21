import { Link } from "react-router-dom";
import styles from "../../styles/SubscriptionCard.module.css";
import RedButton from "../RedButton";

export type Subscription = {
  title: string;
  subtitle: string;
  price: number;
  duration: string;
};

const SubscriptionCard = ({ duration }: { duration: string }) => {
  const subscriptions: Subscription[] = [
    {
      title: "Basic Plan",
      subtitle:
        "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
      price: 9.99,
      duration,
    },
    {
      title: "Standard Plan",
      subtitle:
        "Access to a wider selection of movies and shows, including most new releases and exclusive content.",
      price: 12.99,
      duration,
    },
    {
      title: "Premium Plan",
      subtitle:
        "Access to the widest selection of movies and shows, including all new releases and Offline Viewing.",
      price: 14.99,
      duration,
    },
  ];

  return (
    <>
      {subscriptions.map((subs, index) => (
        <div key={index} className={styles.cardWrapper}>
          <div className={styles.cardTitles}>
            <h2>{subs.title}</h2>
            <p>{subs.subtitle}</p>
          </div>

          <div className={styles.cardPrice}>
            <h3>
              ${subs.duration === "Monthly" ? subs.price : subs.price * 7}
            </h3>
            <span>/{subs.duration}</span>
          </div>

          <div className={styles.cardButtons}>
            <Link to="/subscriptions">
              <button className={styles.trialButton}>Start Free Trial</button>
            </Link>
            <Link to="/subscriptions">
              <RedButton buttonText={"Choose Plan"} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default SubscriptionCard;
