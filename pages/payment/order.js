import Layout from "@/components/Layout";
import OrderInformationsForms from "@/components/OrderInformationsForms";
import ShippingAdress from "@/components/ShippingAdress";

function orderPage() {
  return (
    <Layout title="Order Informations">
      {/* <OrderInformationsForms /> */}
      <ShippingAdress />
    </Layout>
  );
}

export default orderPage;
