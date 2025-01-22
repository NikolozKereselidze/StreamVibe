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
import { Link } from "react-router-dom";
import MotionWrapper from "../components/MotionWrapper";

const Home = () => {
  return (
    <>
      <Search />
      <MotionWrapper type="fadeUp">
        <div className={styles.homeWrapper}>
          <Welcome />
        </div>
      </MotionWrapper>
      <MotionWrapper type="fadeLeft">
        <div id="devices" className="section">
          <DoubleTitle
            heading="We Provide you streaming experience across various devices."
            desc="With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment."
          />
          <div className={styles.deviceCardWrapper}>
            <DeviceCardRender />
          </div>
        </div>
      </MotionWrapper>

      <MotionWrapper type="fadeRight">
        <div id="faq" className="section">
          <div className={styles.faqTitles}>
            <DoubleTitle
              heading="Frequently Asked Questions"
              desc="Check out our FAQ section to find answers to the most common questions about StreamVibe."
            />
            <Link to="/support">
              <RedButton buttonText={"Ask a Question"} />
            </Link>
          </div>
          <FaqRender />
        </div>
      </MotionWrapper>

      <MotionWrapper type="scaleUp">
        <div id="pricing" className="section">
          <SubscriptionRender />
        </div>
      </MotionWrapper>

      <div className="section">
        <MotionWrapper>
          <Ad />
        </MotionWrapper>
      </div>

      <Footer />
    </>
  );
};

export default Home;
