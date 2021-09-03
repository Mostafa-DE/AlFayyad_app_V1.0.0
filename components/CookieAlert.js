import styles from "@/styles/CookieAlert.module.css";
import { useState, useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";

const languageWords = {
  english: {
    QuestionLanguage: "Do you like cookies ??",
    TextDescriptionLanguage:
      "We use cookies in this store to ensure you get the best experience on our store.",
    AgreeBtnLanguage: "I Agree",
    LearnMoreBtnLanguage: "Learn More",
  },
  arabic: {
    QuestionLanguage: "؟؟ Cookies هل تحب ال",
    TextDescriptionLanguage:
      "نحن نستخدم ملفات تعريف الارتباط في هذا المتجر لضمان حصولك على أفضل تجربة في متجرنا",
    AgreeBtnLanguage: "موافق",
    LearnMoreBtnLanguage: "إفرأ المزيد",
  },
};

function CookieAlert() {
  /*----------------------context language-------------------*/
  const { language } = useContext(LanguageContext);
  const {
    QuestionLanguage,
    TextDescriptionLanguage,
    AgreeBtnLanguage,
    LearnMoreBtnLanguage,
  } = languageWords[language];
  /*-----------------------------X---------------------------*/

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
            <h6 className={styles.title}> {QuestionLanguage} </h6>
            <p className={styles.textExplain}>{TextDescriptionLanguage}</p>
          </div>
          <div className={styles.containerBtns}>
            <a
              href="https://www.allaboutcookies.org/"
              className={styles.linkMore}
            >
              {LearnMoreBtnLanguage}
            </a>
            <button className={styles.btnAgree} onClick={handleCloseCookieShow}>
              {AgreeBtnLanguage}
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default CookieAlert;
