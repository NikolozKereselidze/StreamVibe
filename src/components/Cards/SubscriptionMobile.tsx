import { useState } from "react";
import styles from "../../styles/SubscriptionMobile.module.css";

type SubscriptionMobileProps = {
  subscriptionTable: {
    headers: string[];
    rows: { title: string; values: string[] }[];
    highlight: string;
  };
};

const SubscriptionMobile: React.FC<SubscriptionMobileProps> = ({
  subscriptionTable,
}) => {
  const [planType, setPlanType] = useState<string>(
    subscriptionTable.headers[0]
  );
  const index = subscriptionTable.headers.indexOf(planType);

  const clickHandler = (header: string) => {
    setPlanType(header);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.plans}>
        {subscriptionTable.headers.map((header) => (
          <h2
            key={header}
            className={`${header === planType && styles.active}`}
            onClick={() => clickHandler(header)}
          >
            {header}
          </h2>
        ))}
      </div>

      <div className={styles.table}>
        {subscriptionTable.rows.map((val, i) => (
          <div className={styles.row} key={`${val.title}-${i}`}>
            <h2 className={styles.rowTitle}>{val.title}</h2>
            <h3 className={styles.rowValue}>{val.values[index]}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionMobile;
