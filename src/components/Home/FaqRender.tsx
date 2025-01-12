import FaqCard from "../Cards/FaqCard";
import styles from "../../styles/Home.module.css";

export type faqQuestion = {
  index?: number;
  question: string;
  answer: string;
};

const faqQuestions: faqQuestion[] = [
  {
    question: "What is StreamVibe?",
    answer:
      "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
  },
  {
    question: "How much does StreamVibe cost?",
    answer:
      "Basic: $9.99/month, Standard: $12.99/month, Premium: $14.99/month.",
  },
  {
    question: "What content is available?",
    answer: "Movies, TV shows, and actor/creator information.",
  },
  {
    question: "How can I watch StreamVibe?",
    answer: "Browse Movies or TV Shows, or search for specific titles.",
  },
  {
    question: "How do I sign up for StreamVibe?",
    answer:
      "Go to the Subscriptions page, choose a plan, and complete the signup.",
  },
  {
    question: "What is the StreamVibe free trial?",
    answer: "A 14-day free trial for new users.",
  },
  {
    question: "How do I contact StreamVibe customer support?",
    answer: "Visit the Support page for FAQs, contact forms, or live chat.",
  },
  {
    question: "What are the StreamVibe payment methods?",
    answer: "Visa, MasterCard, and PayPal.",
  },
];

const FaqRender = () => {
  return (
    <div className={styles.faqWrapper}>
      {faqQuestions.map((faq, index) => (
        <FaqCard
          key={index}
          index={index + 1}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </div>
  );
};

export default FaqRender;
