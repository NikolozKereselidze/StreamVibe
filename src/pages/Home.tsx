import { motion } from "framer-motion";
import DoubleTitle from "../components/DoubleTitle";
import DeviceCardRender from "../components/Home/DeviceCardRender";
import FaqRender from "../components/Home/FaqRender";
import Welcome from "../components/Home/Welcome";
import styles from "../styles/Home.module.css";
import SubscriptionRender from "../components/Home/SubscriptionRender";
import Ad from "../components/Ad";
import RedButton from "../components/RedButton";
import Footer from "../components/Footer";
import Search from "../components/Search/Search";

const fadeIn = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0, // Brings the element back to its original position
    transition: { duration: 1 }, // Duration of 1 second for the entire transition
  },
};

const motionProps = {
  initial: fadeIn.hidden,
  whileInView: fadeIn.visible,
  variants: fadeIn, // corrected this line
  viewport: { once: true },
};
const Home = () => {
  return (
    <>
      <Search />
      <motion.div {...motionProps} className={styles.homeWrapper}>
        <Welcome />
      </motion.div>
      <motion.div id="devices" {...motionProps} className="section">
        <DoubleTitle
          heading="We Provide you streaming experience across various devices."
          desc="With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment."
        />
        <div className={styles.deviceCardWrapper}>
          <DeviceCardRender />
        </div>
      </motion.div>

      <motion.div id="faq" {...motionProps} className="section">
        <div className={styles.faqTitles}>
          <DoubleTitle
            heading="Frequently Asked Questions"
            desc="Check out our FAQ section to find answers to the most common questions about StreamVibe."
          />
          <RedButton buttonText={"Ask a Question"} />
        </div>
        <FaqRender />
      </motion.div>

      <motion.div id="pricing" {...motionProps} className="section">
        <SubscriptionRender />
      </motion.div>

      <motion.div {...motionProps} className="section">
        <Ad />
      </motion.div>

      <Footer />
    </>
  );
};

export default Home;
