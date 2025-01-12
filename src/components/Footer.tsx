import styles from "../styles/Footer.module.css";

const FooterPages = {
  Home: ["Categories", "Devices", "Pricing", "FAQ"],
  Movies: ["Genres", "Trending", "New Releases", "Popular"],
  Shows: ["Genres", "Trending", "New Releases", "Popular"],
  Support: ["Contact Us"],
  Subscription: ["Plans", "Features"],
  "Connect with Us": [
    {
      name: "GitHub",
      icon: "GitIcon",
      url: "https://github.com/NikolozKereselidze",
    },
    {
      name: "LinkedIn",
      icon: "LinkedinIcon",
      url: "https://www.linkedin.com/in/nikoloz-kereselidze/",
    },
    {
      name: "Twitter",
      icon: "TwitterIcon",
      url: "https://x.com/Kereselidze_N",
    },
  ],
};

const Footer = () => {
  return (
    <div className={styles.footerWrap}>
      <div className={styles.footer}>
        {Object.entries(FooterPages).map(([page, links]) => (
          <div key={page} className={styles.footerPage}>
            <h2>{page}</h2>
            <ul
              className={`${styles.footerUl} ${
                page === "Connect with Us" && styles.connect
              }`}
            >
              {links.map((link, index) => {
                if (typeof link === "string") {
                  // Render text links for other sections
                  return (
                    <li key={link} className={styles.footerLi}>
                      {link}
                    </li>
                  );
                }
                // Render icons for "Connect with Us"
                return (
                  <li key={index} className={styles.footerLi}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.name}
                    >
                      {link.icon === "GitIcon" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                        >
                          <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577v-2.234c-3.338.724-4.033-1.416-4.033-1.416-.546-1.384-1.333-1.752-1.333-1.752-1.089-.744.083-.729.083-.729 1.205.084 1.84 1.24 1.84 1.24 1.07 1.835 2.807 1.305 3.492.997.108-.774.42-1.305.763-1.605-2.665-.305-5.467-1.335-5.467-5.931 0-1.312.47-2.384 1.235-3.227-.123-.304-.535-1.527.117-3.184 0 0 1.008-.324 3.301 1.233a11.52 11.52 0 013.006-.404c1.02.005 2.048.137 3.006.404 2.292-1.557 3.297-1.233 3.297-1.233.654 1.657.242 2.88.12 3.184.768.843 1.235 1.915 1.235 3.227 0 4.606-2.807 5.624-5.479 5.92.432.372.815 1.102.815 2.222v3.293c0 .32.22.694.825.576C20.565 21.795 24 17.297 24 12 24 5.373 18.627 0 12 0z" />
                        </svg>
                      )}
                      {link.icon === "LinkedinIcon" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                        >
                          <path d="M19.708 3.5H4.292A.79.79 0 003.5 4.292v15.416c0 .437.354.792.792.792h15.416c.438 0 .792-.355.792-.792V4.292a.79.79 0 00-.792-.792zM8.845 18.25H6.177V9.68h2.668v8.57zm-1.334-9.79a1.543 1.543 0 110-3.086 1.543 1.543 0 010 3.086zm10.457 9.79h-2.67v-4.19c0-1.003-.018-2.297-1.398-2.297-1.4 0-1.614 1.093-1.614 2.222v4.265h-2.67V9.68h2.566v1.174h.037c.357-.677 1.228-1.398 2.527-1.398 2.701 0 3.202 1.78 3.202 4.096v4.698z" />
                        </svg>
                      )}
                      {link.icon === "TwitterIcon" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                        >
                          <path d="M23.954 4.57c-.885.392-1.83.656-2.825.775 1.014-.604 1.794-1.562 2.163-2.724-.95.564-2.005.974-3.127 1.195-.897-.959-2.178-1.559-3.594-1.559-2.723 0-4.928 2.204-4.928 4.926 0 .39.044.765.128 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.732-.666 1.581-.666 2.475 0 1.71.87 3.213 2.188 4.099-.807-.026-1.566-.248-2.229-.616v.062c0 2.386 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.624-.03-.924-.086.631 1.953 2.445 3.377 4.604 3.417-1.685 1.32-3.808 2.105-6.115 2.105-.398 0-.79-.023-1.177-.067 2.179 1.398 4.768 2.21 7.548 2.21 9.055 0 14.001-7.504 14.001-14.001 0-.214-.005-.426-.014-.637.962-.695 1.796-1.562 2.457-2.549z" />
                        </svg>
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
      <div className={styles.footerCopyright}>
        <p className={styles.owner}>
          &copy;2025 Nikoloz Kereselidze, All Rights Reserved
        </p>
        <div className={styles.claim}>
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
