import styles from "@/styles/ButtonScrollToTop.module.css";
import React, { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";

function ButtonScrollToTop() {
  const [isVisible, setIsVisisble] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /*----------Buuton is display after scrolling for 400 pixels--------*/
  useEffect(() => {
    const handleVisibility = () => {
      if (window.pageYOffset > 400) {
        setIsVisisble(true);
      } else {
        setIsVisisble(false);
      }
    };
    window.addEventListener("scroll", handleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", handleVisibility);
  });
  /*-------------------------------X----------------------------------*/

  return (
    <div className={styles.scrollContainer}>
      {isVisible && (
        <div onClick={scrollToTop} className={styles.buttonScrollToTop}>
          <h4>
            <FaChevronUp />
          </h4>
        </div>
      )}
    </div>
  );
}

export default ButtonScrollToTop;
