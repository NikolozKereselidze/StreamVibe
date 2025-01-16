import Ad from "../components/Ad";
import DoubleTitle from "../components/DoubleTitle";
import Footer from "../components/Footer";
import SubscriptionRender from "../components/Home/SubscriptionRender";
import Search from "../components/Search/Search";
import styles from "../styles/Subscriptions.module.css";

const subscriptionTable = {
  headers: ["Features", "Basic", "Standard", "Premium"],
  rows: [
    { title: "Price", values: ["$9.99/Month", "$12.99/Month", "$14.99/Month"] },
    {
      title: "Content",
      values: [
        "Access to a wide selection of movies and shows, including some new releases.",
        "Access to a wider selection of movies and shows, including most new releases and exclusive content.",
        "Access to the widest selection of movies and shows, including all new releases and Offline Viewing.",
      ],
    },
    {
      title: "Devices",
      values: [
        "Watch on one device simultaneously",
        "Watch on two devices simultaneously",
        "Watch on four devices simultaneously",
      ],
    },
    { title: "Cancel Anytime", values: ["Yes", "Yes", "Yes"] },
    { title: "HDR", values: ["No", "Yes", "Yes"] },
    { title: "Ad-Free", values: ["No", "Yes", "Yes"] },
    {
      title: "Offline Viewing",
      values: ["No", "Yes, for select titles", "Yes, for all titles"],
    },
    {
      title: "Family Sharing",
      values: [
        "No",
        "Yes, up to 5 family members",
        "Yes, up to 6 family members",
      ],
    },
  ],
  highlight: "Standard",
};

const Subscriptions = () => {
  return (
    <>
      <Search />
      <div className="section">
        <SubscriptionRender />

        <DoubleTitle
          heading="Compare our plans and find the right one for you"
          desc="StreamVibe offers three different plans to fit your needs: Basic, Standard, and Premium. Compare the features of each plan and choose the one that's right for you."
        />

        <table className={styles.table}>
          <thead>
            <tr>
              {subscriptionTable.headers.map((header, index) => (
                <th
                  key={index}
                  className={`${styles.tableHeader} ${
                    header === subscriptionTable.highlight &&
                    styles.popularHeader
                  }`}
                >
                  {header}
                  {header === subscriptionTable.highlight && (
                    <span className={styles.popular}>Popular</span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {subscriptionTable.rows.map((row, index) => (
              <tr key={index}>
                <td className={styles.tableTitle}>{row.title}</td>
                {row.values.map((value, i) => (
                  <td key={i} className={styles.tableValue}>
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <Ad />
      </div>
      <Footer />
    </>
  );
};

export default Subscriptions;
