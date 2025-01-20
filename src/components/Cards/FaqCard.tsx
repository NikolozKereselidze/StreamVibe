import { useState } from "react";
import styles from "../../styles/FaqCard.module.css";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { faqQuestion } from "../Home/FaqRender";

const FaqCard = ({ index, question, answer }: faqQuestion) => {
  const [active, setActive] = useState(false);

  return (
    <div className={`${styles.faq} ${active && styles.activeFaq}`}>
      <div className={styles.index}>
        <p>0{index}</p>
      </div>
      <div className={`${styles.details} ${active && styles.gap}`}>
        <div className={styles.detailsHeader}>
          <h2>{question}</h2>
          {active ? (
            <MinusIcon onClick={() => setActive(false)} />
          ) : (
            <PlusIcon onClick={() => setActive(true)} />
          )}
        </div>
        <p className={active ? styles.active : ""}>{answer}</p>
      </div>
    </div>
  );
};

export default FaqCard;
