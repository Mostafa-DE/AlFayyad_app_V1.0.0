import styles from "@/styles/ToolsProducts.module.css";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import { AiOutlineLine } from "react-icons/ai";
import ProductItem from "@/components/ProductItem";

export default function toolsPage({ toolsProducts }) {
  return (
    <Layout title="Tools & Equipment | Al Fayyad Store">
      {/*--------------title text-------------------*/}
      <h1 className={styles.h1Text}>
        Tools & Equipment
        <span>
          <AiOutlineLine />
        </span>
      </h1>
      {/*-------------------X-----------------------*/}

      {/*----------rendering all products-----------*/}
      <div className={styles.cardsProductsList}>
        {toolsProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      {/*-------------------X-----------------------*/}
    </Layout>
  );
}

/*-------------get product & photos from strapi----------------*/
export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/tools`);
  const toolsProducts = await res.json();
  return {
    props: {
      toolsProducts,
    },
  };
}
/*-----------------------------X--------------------------------*/
