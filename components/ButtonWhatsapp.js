import styles from "@/styles/ButtonWhatsapp.module.css";
import React, { useState, useEffect } from "react";

export default function ButtonWhatsapp() {
  const [isVisible, setIsVisisble] = useState(false);

  /*--------Button is display after scrolling for 400 pixels--------*/
  useEffect(() => {
    const handleVisibility = () => {
      if (window.pageYOffset > 400) {
        setIsVisisble(true);
      } else {
        setIsVisisble(false);
      }
    };
    window.addEventListener("scroll", handleVisibility);
    return () => window.removeEventListener("scroll", handleVisibility);
  });
  /*-------------------------------X--------------------------------*/

  return (
    <div className={styles.buttonContainer}>
      {isVisible && (
        <div className={styles.buttonWhatsapp}>
          <a href="https://wa.me/message/TDOPR6Z3RHN7L1">
            <h4>
              <i className="fab fa-whatsapp"></i>
            </h4>
          </a>
        </div>
      )}
    </div>
  );
}
