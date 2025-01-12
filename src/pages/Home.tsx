import DoubleTitle from "../components/DoubleTitle";
import DeviceCardRender from "../components/Home/DeviceCardRender";
import Welcome from "../components/Home/Welcome";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <>
      <div className={styles.homeWrapper}>
        <Welcome />
      </div>
      <div className="cardSection">
        <DoubleTitle
          heading="We Provide you streaming experience across various devices."
          desc="With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment."
        />
        <div className={styles.deviceCardWrapper}>
          <DeviceCardRender />
        </div>
      </div>
    </>
  );
};

export default Home;
