import DoubleTitle from "../components/DoubleTitle";
import Search from "../components/Search/Search";
import supportImg from "../assets/support/support-img.webp";
import styles from "../styles/Support.module.css";
import RedButton from "../components/RedButton";
import FaqRender from "../components/Home/FaqRender";
import Ad from "../components/Ad";
import Footer from "../components/Footer";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";

const Support = () => {
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  return (
    <>
      <Search />
      <div className="section">
        <div className={styles.supportWrap}>
          <div className={styles.supportWelcome}>
            <DoubleTitle
              heading="Welcome to our support page!"
              desc="We're here to help you with any problems you may be having with our product."
            />
            <img
              src={supportImg}
              alt="multiple movies"
              className={styles.supportImg}
            />
          </div>

          <form action="" className={styles.supportForm}>
            <div className={styles.inputWrap}>
              <div className={styles.inputLabel}>
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  name="firsName"
                  id="firstName"
                  placeholder="Enter First Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className={styles.inputLabel}>
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Enter Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className={styles.inputWrap}>
              <div className={styles.inputLabel}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className={styles.inputLabel}>
                <label htmlFor="phone">Phone Number</label>
                <PhoneInput
                  inputProps={{
                    id: "phone",
                    required: true,
                  }}
                  country={"us"}
                  containerClass={styles.telInput}
                  value={phone}
                  onChange={(value: string) => setPhone(value)}
                />
              </div>
            </div>

            <div className={styles.inputWrap}>
              <div className={styles.textAreaWrap}>
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Enter your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  required
                ></textarea>
              </div>
            </div>

            <RedButton buttonText="Send Message" />
          </form>
        </div>

        <div className={styles.faqTitle}>
          <DoubleTitle
            heading="Frequently Asked Questions"
            desc="Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe."
          />
          <RedButton buttonText={"Ask a Question"} />
        </div>
        <FaqRender />

        <Ad />
      </div>
      <Footer />
    </>
  );
};

export default Support;
