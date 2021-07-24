import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import ProductItem from "@/components/ProductItem";
import styles from "@/styles/Search.module.css";
import { useRouter } from "next/router";
import { AiOutlineLine } from "react-icons/ai";
import qs from "qs";

function searchPage({ products }) {
  const router = useRouter();
  return (
    <Layout title="Products List">
      <h1 className={styles.h1Text}>
        Search Results for "{router.query.term}"{" "}
        <span>
          {" "}
          <AiOutlineLine />{" "}
        </span>
      </h1>
      <div className={styles.cardsProductsList}>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </Layout>
  );
}

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

export default searchPage;
