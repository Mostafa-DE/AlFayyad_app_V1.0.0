import styles from "@/styles/CookieAlert.module.css";
import { useState } from "react";

function CookieAlert() {
  const [isCookieShow, setisCookieShow] = useState(true);
  const handleCloseCookieShow = () => {
    setisCookieShow(false);
  };

  return (
    <>
      {isCookieShow === true ? (
        <div className={styles.cookieContainer}>
          <div className={styles.cookieContent}>
            <img
              src="/images/fayyad/cookie.png"
              alt="cookie image"
              width={80}
            />
            <h6 className={styles.title}>Do you like cookies ??</h6>
            <p className={styles.textExplain}>
              We use cookies in this store to ensure you get the best experience
              on our store.
            </p>
          </div>
          <div className={styles.containerBtns}>
            <a
              href="https://www.allaboutcookies.org/"
              className={styles.linkMore}
            >
              Learn More
            </a>
            <button className={styles.btnAgree} onClick={handleCloseCookieShow}>
              I Agree
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default CookieAlert;
