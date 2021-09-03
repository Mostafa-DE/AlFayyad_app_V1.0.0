import styles from "@/styles/Search.module.css";
import { API_URL } from "@/config/index";
import { useRouter } from "next/router";
import { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";
import { AiOutlineLine } from "react-icons/ai";
import Layout from "@/components/Layout";
import Link from "next/link";
import ProductItem from "@/components/ProductItem";
import qs from "qs";

const languageWords = {
  english: {
    SearchResultsLanguage: "Search Results for ",
    ProductNotFoundLanguage: "Nothing Here 😔",
    ProductNotFoundTextLanguage:
      "We Couldn't Find That Product, Maybe It Doesn't Exist Or Out Of Stock",
    BackBtnLanguage: "Back To Products",
  },
  arabic: {
    SearchResultsLanguage: "نتائج البحث عن ",
    ProductNotFoundLanguage: "😔 لا شيء هنا",
    ProductNotFoundTextLanguage:
      "لم نتمكن من العثور على هذا المنتج ، ربما لم يكن موجودًا أو غير متوفر حالياً",
    BackBtnLanguage: "العودة إلى المنتجات",
  },
};

export default function SearchPage({ products }) {
  const router = useRouter();

  /*----------------------context language-------------------*/
  const { language } = useContext(LanguageContext);
  const {
    SearchResultsLanguage,
    ProductNotFoundLanguage,
    ProductNotFoundTextLanguage,
    BackBtnLanguage,
  } = languageWords[language];
  /*-----------------------------X---------------------------*/

  return (
    <Layout title="Search Results | Al Fayyad Store">
      {/*---------------title text----------------*/}
      <h1 className={styles.h1Text}>
        {language === "arabic" ? (
          <>
            "{router.query.term}" {SearchResultsLanguage}
          </>
        ) : (
          <>
            {SearchResultsLanguage} "{router.query.term}"
          </>
        )}

        <span>
          <AiOutlineLine />
        </span>
      </h1>
      {/*--------------------X--------------------*/}

      {/*--Check if there are a products to show--*/}
      {products.length === 0 ? (
        <div className={styles.containerNotFound}>
          <h1 className={styles.h1NotFound}> {ProductNotFoundLanguage} </h1>
          <p className={styles.pText}>{ProductNotFoundTextLanguage}</p>
          <Link href="/products/products-list" passHref={true}>
            <button className={styles.backBtn}> {BackBtnLanguage} </button>
          </Link>
        </div>
      ) : (
        <div className={styles.cardsProductsList}>
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      )}
      {/*--------------------X--------------------*/}
    </Layout>
  );
}

/*--------------search for product using strapi-----------------*/
export async function getServerSideProps({ query: { term } }) {
  const query = qs.stringify({
    _where: {
      _or: [
        { name_contains: term },
        { description_contains: term },
        { additionalInfo_contains: term },
      ],
    },
  });
  const res = await fetch(`${API_URL}/products?${query}`);
  const products = await res.json();
  return {
    props: {
      products,
    },
  };
}
/*--------------------------------X-----------------------------*/
