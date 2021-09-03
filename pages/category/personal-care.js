import styles from "@/styles/personalCare.module.css";
import Layout from "@/components/Layout";
import { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";
import { API_URL } from "@/config/index";
import { AiOutlineLine } from "react-icons/ai";
import ProductItem from "@/components/ProductItem";

const languageWords = {
  english: {
    TitlePageLanguage: "Personal Care",
  },
  arabic: {
    TitlePageLanguage: "العناية الشخصية",
  },
};

export default function PersonalCarePage({ personalCareProducts }) {
  /*----------------------context language-------------------*/
  const { language } = useContext(LanguageContext);
  const { TitlePageLanguage } = languageWords[language];
  /*-----------------------------X---------------------------*/

  return (
    <Layout title="Personal Care | Al Fayyad Store">
      {/*--------------title text-------------------*/}
      <h1 className={styles.h1Text}>
        {TitlePageLanguage}
        <span>
          <AiOutlineLine />
        </span>
      </h1>
      {/*-------------------X-----------------------*/}

      {/*----------rendering all products-----------*/}
      <div className={styles.cardsProductsList}>
        {personalCareProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      {/*-------------------X-----------------------*/}
    </Layout>
  );
}

/*-------------get product & photos from strapi----------------*/
export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/personal-cares`);
  const personalCareProducts = await res.json();
  return {
    props: {
      personalCareProducts,
    },
  };
}
/*-----------------------------X--------------------------------*/
