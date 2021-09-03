import styles from "@/styles/Kids.module.css";
import Layout from "@/components/Layout";
import { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";
import { API_URL } from "@/config/index";
import { AiOutlineLine } from "react-icons/ai";
import ProductItem from "@/components/ProductItem";

const languageWords = {
  english: {
    TitlePageLanguage: "Kids Accessories",
  },
  arabic: {
    TitlePageLanguage: "إكسسوارات الأطفال",
  },
};

export default function KidsPage({ kidsProducts }) {
  /*----------------------context language-------------------*/
  const { language } = useContext(LanguageContext);
  const { TitlePageLanguage } = languageWords[language];
  /*-----------------------------X---------------------------*/

  return (
    <Layout title="Kids Accessories | Al Fayyad Store">
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
        {kidsProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      {/*-------------------X-----------------------*/}
    </Layout>
  );
}

/*-------------get product & photos from strapi----------------*/
export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/kids`);
  const kidsProducts = await res.json();
  return {
    props: {
      kidsProducts,
    },
  };
}
/*-----------------------------X--------------------------------*/
