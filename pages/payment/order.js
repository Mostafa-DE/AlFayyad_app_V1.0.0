import Layout from "@/components/Layout";
import ShippingAdress from "@/components/ShippingAdress";

function orderPage() {
  return (
    <Layout title="Order Informations">
      <ShippingAdress />
    </Layout>
  );
}

export default orderPage;
