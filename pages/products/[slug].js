import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import ProductDetails from "@/components/ProductDetails";

export default function ProductPage({ product }) {
  return (
    <Layout title="Product Details | Al Fayyad Store">
      {product.map((product) => (
        <ProductDetails key={product.id} product={product} />
      ))}
    </Layout>
  );
}

/*------------get details for product using unique slug--------------*/
export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/products?slug=${slug}`);
  const product = await res.json();
  return {
    props: {
      product,
    },
  };
}
/*-----------------------------------X-------------------------------*/
