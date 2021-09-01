import styles from "@/styles/Houseware.module.css";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import { AiOutlineLine } from "react-icons/ai";
import ProductItem from "@/components/ProductItem";

export default function HousewarePage({ housewareProducts }) {
  return (
    <Layout title="House & Kitchen Ware | Al Fayyad Store">
      {/*--------------title text-------------------*/}
      <h1 className={styles.h1Text}>
        House & Kitchen Ware
        <span>
          <AiOutlineLine />
        </span>
      </h1>
      {/*-------------------X-----------------------*/}

      {/*----------rendering all products-----------*/}
      <div className={styles.cardsProductsList}>
        {housewareProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      {/*-------------------X-----------------------*/}
    </Layout>
  );
}

/*-------------get product & photos from strapi----------------*/
export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/housewares`);
  const housewareProducts = await res.json();
  return {
    props: {
      housewareProducts,
    },
  };
}
/*-----------------------------X--------------------------------*/
