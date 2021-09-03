import styles from "@/styles/CategoryPhoto-sm.module.css";
import Paper from "@material-ui/core/Paper";
import Link from "next/link";
import { LanguageContext } from "@/context/LanguageContext";
import { useContext } from "react";

const languageWords = {
  english: {
    titleKidsLanguage: "Kids Accessories",
    titlePersonalLanguage: "Personal Care",
    titleKitchenLanguage: "Kitchenware",
    textFindLanguge: "Find Out",
    shopButtonLanguage: "Shop Now",
  },
  arabic: {
    titleKidsLanguage: " إكسسوارات أطفال ",
    titlePersonalLanguage: "عناية شخصية",
    titleKitchenLanguage: "مستلزمات مطبخ",
    textFindLanguge: "اكتشف الآن",
    shopButtonLanguage: "تسوق الآن",
  },
};

function CategoryPhotoSm() {
  /*----------------------context language-------------------*/
  const { language } = useContext(LanguageContext);
  const {
    titleKidsLanguage,
    titlePersonalLanguage,
    titleKitchenLanguage,
    textFindLanguge,
    shopButtonLanguage,
  } = languageWords[language];
  /*-----------------------------X---------------------------*/

  return (
    <div className={styles.container}>
      <Link href="/category/kids" passHref={true}>
        {/*-------------------Photo Kids-----------------*/}
        <Paper className={`${styles.paper1}`}>
          <p className={styles.paperText}>
            {titleKidsLanguage} <span> {textFindLanguge} </span>
          </p>
          <a className={styles.linkShope}> {shopButtonLanguage} </a>
        </Paper>
        {/*------------------------X----------------------*/}
      </Link>
      <Link href="/category/personal-care" passHref={true}>
        {/*----------------Photo Personal care------------*/}
        <Paper className={`${styles.paper2}`}>
          <p className={styles.paperText}>
            {" "}
            {titlePersonalLanguage} <span> {textFindLanguge} </span>
          </p>
          <a href="#" className={styles.linkShope}>
            {shopButtonLanguage}
          </a>
        </Paper>
        {/*------------------------X----------------------*/}
      </Link>
      <Link href="/category/houseware" passHref={true}>
        {/*---------------Photo Kitchenware---------------*/}
        <Paper className={`${styles.paper3}`}>
          <p className={styles.paperText}>
            {titleKitchenLanguage}
            <span> {textFindLanguge} </span>
          </p>
          <a href="#" className={styles.linkShope}>
            {shopButtonLanguage}
          </a>
        </Paper>
        {/*-----------------------X-----------------------*/}
      </Link>
    </div>
  );
}

export default CategoryPhotoSm;
