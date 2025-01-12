import SubscriptionCard from "../Cards/SubscriptionCard";

export type subscription = {
  title: string;
  subtitle: string;
  price: number;
  duration: string;
};

const subscriptions: subscription[] = [
  {
    title: "Basic Plan",
    subtitle:
      "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
    price: 9.99,
    duration: "",
  },

  {
    title: "Standard Plan",
    subtitle:
      "Access to a wider selection of movies and shows, including most new releases and exclusive content.",
    price: 12.99,
    duration: "",
  },
  {
    title: "Premium Plan",
    subtitle:
      "Access to a widest selection of movies and shows, including all new releases and Offline Viewing.",
    price: 14.99,
    duration: "",
  },
];

const SubscriptionRender = ({ duration }: { duration: string }) => {
  return subscriptions.map((subs, index) => (
    <SubscriptionCard
      title={subs.title}
      subtitle={subs.subtitle}
      price={subs.price}
      duration={duration}
      key={index}
    />
  ));
};

export default SubscriptionRender;
