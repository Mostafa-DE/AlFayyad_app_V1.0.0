import styles from "@/styles/ButtonTranslate.module.css";
import { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";

export default function ButtonWhatsapp() {
  /*----------------------context language-------------------*/
  const { language, ChangeToEnglishLanguage, ChangeToArabicLanguage } =
    useContext(LanguageContext);
  /*-----------------------------X---------------------------*/

  return (
    <div className={styles.buttonContainer}>
      {language === "arabic" ? (
        <div
          className={styles.buttonTranslate}
          onClick={ChangeToEnglishLanguage}
        >
          <img
            src="/images/fayyad/JordanIcon.png"
            alt="arabic language"
            className={styles.imagesArabic}
          />
          <span className={styles.ArabicText}>Arabic</span>
        </div>
      ) : (
        <div
          className={styles.buttonTranslate}
          onClick={ChangeToArabicLanguage}
        >
          <img
            src="/images/fayyad/englishIcon.jpg"
            alt="arabic language"
            className={styles.imagesArabic}
          />
          <span className={styles.ArabicText}>English</span>
        </div>
      )}
    </div>
  );
}
