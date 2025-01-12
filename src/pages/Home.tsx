import { useState } from "react";
import DoubleTitle from "../components/DoubleTitle";
import DeviceCardRender from "../components/Home/DeviceCardRender";
import FaqRender from "../components/Home/FaqRender";
import Welcome from "../components/Home/Welcome";
import styles from "../styles/Home.module.css";
import SubscriptionRender from "../components/Home/SubscriptionRender";
import Ad from "../components/Ad";
import RedButton from "../components/RedButton";
import Footer from "../components/Footer";

const Home = () => {
  const [active, setActive] = useState(false);
  const [duration, setDuration] = useState("Monthly");

  return (
    <>
      <div className={styles.homeWrapper}>
        <Welcome />
      </div>
      <div className="sectionHome">
        <DoubleTitle
          heading="We Provide you streaming experience across various devices."
          desc="With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment."
        />
        <div className={styles.deviceCardWrapper}>
          <DeviceCardRender />
        </div>
      </div>

      <div className="sectionHome">
        <div className={styles.faqTitles}>
          <DoubleTitle
            heading="Frequently Asked Questions"
            desc="Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe."
          />
          <RedButton buttonText={"Ask a Question"} />
        </div>
        <FaqRender />
      </div>

      <div className="sectionHome">
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
          <SubscriptionRender duration={duration} />
        </div>
      </div>

      <div className="sectionHome">
        <Ad />
      </div>

      <Footer />
    </>
  );
};

export default Home;
