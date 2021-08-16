import styles from "@/styles/ProductsList.module.css";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import { AiOutlineLine } from "react-icons/ai";
import ProductItem from "@/components/ProductItem";
import ShowPhotoProductsList from "@/components/ShowPhotoProductsList";

function productsListPage({ products }) {
  return (
    <Layout title="Products List">
      {/*-------------crousol photo-----------------*/}
      <ShowPhotoProductsList />
      {/*-------------------X-----------------------*/}

      {/*--------------title text-------------------*/}
      <h1 className={styles.h1Text}>
        Products List
        <span>
          <AiOutlineLine />
        </span>
      </h1>
      {/*-------------------X-----------------------*/}

      {/*----------rendering all products-----------*/}
      <div className={styles.cardsProductsList}>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      {/*-------------------X-----------------------*/}
    </Layout>
  );
}

/*-------------get product from strapi----------------*/
export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/products`);
  const products = await res.json();
  return {
    props: {
      products,
    },
  };
}
/*-------------------------X--------------------------*/

export default productsListPage;
