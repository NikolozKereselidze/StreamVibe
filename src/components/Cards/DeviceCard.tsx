import { DeviceCardProps } from "../../types/home";
import styles from "../../styles/DeviCard.module.css";

const DeviceCard = ({ imgSrc, deviceType, cardInfo }: DeviceCardProps) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardDevice}>
        <img src={imgSrc} alt="" />
        <h3>{deviceType}</h3>
      </div>
      <p className={styles.cardInfo}>{cardInfo}</p>
    </div>
  );
};

export default DeviceCard;
