import styles from "@/styles/CategoryPhoto-md.module.css";
import Paper from "@material-ui/core/Paper";
import Link from "next/link";
import { LanguageContext } from "@/context/LanguageContext";
import { useContext } from "react";

const languageWords = {
  english: {
    titleToolsLanguage: "Tools & Equipment",
    titleHousewareLanguage: "Houseware",
    textFindLanguge: "Find Out",
    shopButtonLanguage: "Shop Now",
  },
  arabic: {
    titleToolsLanguage: "معدات و أدوات صناعية",
    titleHousewareLanguage: "أدوات منزلية",
    textFindLanguge: "اكتشف الآن",
    shopButtonLanguage: "تسوق الآن",
  },
};

function CategoryPhotoSm() {
  /*----------------------context language-------------------*/
  const { language } = useContext(LanguageContext);
  const {
    titleToolsLanguage,
    shopButtonLanguage,
    textFindLanguge,
    titleHousewareLanguage,
  } = languageWords[language];
  /*-----------------------------X---------------------------*/
  return (
    <div className={styles.container}>
      <Link href="/category/tools" passHref={true}>
        {/*---------Photo Tools----------*/}
        <Paper className={`${styles.paperTools}`}>
          <p className={styles.paperText}>
            {titleToolsLanguage} <span> {textFindLanguge} </span>
          </p>
          <a className={styles.linkShope}>{shopButtonLanguage}</a>
        </Paper>
        {/*--------------X----------------*/}
      </Link>
      <Link href="/category/houseware" passHref={true}>
        {/*---------Photo Housecare-------*/}
        <Paper className={`${styles.paperHouse}`}>
          <p className={styles.paperText}>
            {titleHousewareLanguage} <span> {textFindLanguge} </span>
          </p>
          <a href="#" className={styles.linkShope}>
            {shopButtonLanguage}
          </a>
        </Paper>
        {/*----------------X--------------*/}
      </Link>
    </div>
  );
}

export default CategoryPhotoSm;
