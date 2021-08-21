import styles from "@/styles/Search.module.css";
import { API_URL } from "@/config/index";
import { useRouter } from "next/router";
import { AiOutlineLine } from "react-icons/ai";
import Layout from "@/components/Layout";
import Link from "next/link";
import ProductItem from "@/components/ProductItem";
import qs from "qs";

export default function SearchPage({ products }) {
  const router = useRouter();
  return (
    <Layout title="Products List">
      {/*---------------title text----------------*/}
      <h1 className={styles.h1Text}>
        Search Results for "{router.query.term}"
        <span>
          <AiOutlineLine />
        </span>
      </h1>
      {/*--------------------X--------------------*/}

      {/*--Check if there are a products to show--*/}
      {products.length === 0 ? (
        <div className={styles.containerNotFound}>
          <h1 className={styles.h1NotFound}>Nothing Here 😔</h1>
          <p className={styles.pText}>
            We couldn't Find That Product, Maybe it doesn't exist or out of
            stock
          </p>
          <Link href="/products/productsList" passHref={true}>
            <button className={styles.backBtn}>Back To Products</button>
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
