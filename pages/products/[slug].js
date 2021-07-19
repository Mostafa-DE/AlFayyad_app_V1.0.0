import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import ProductDetails from "@/components/ProductDetails";

function ProductPage({product}) {
    // console.log(product);
    return (
        <>
        <Layout title="Product Overview">
            {product.map( product => (
                <ProductDetails key={product.id} product={product} />
            ))}
        </Layout>
        </>
    )
}

export default ProductPage;


export async function getServerSideProps({query: {slug}}) {
    const res = await fetch(`${API_URL}/products?slug=${slug}`);
    const product = await res.json();
    // console.log(product);
    return {
        props: {
            product
        }
    }
  }