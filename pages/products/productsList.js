import Layout from "@/components/Layout";
import { API_URL } from '@/config/index';
import ProductItem from '@/components/ProductItem';
import styles from "@/styles/ProductsList.module.css";
import ShowPhotoProductsList from "@/components/ShowPhotoProductsList";


export default function productsList({products}) {
    // console.log(products);
    return (
        <Layout title="Products List">
            <ShowPhotoProductsList />
            <h1 className={styles.h1Text}>Products List:-</h1>
        <div className={styles.cardsProductsList}>
        {products.map( (product) => (
            <ProductItem key={product.id} product={product} />
        ))}
        </div>
        </Layout>
    )
}

export async function getServerSideProps() {
    const res = await fetch(`${API_URL}/products`);
    const products = await res.json();
    return {
        props: {
            products
        } 
    }
}
