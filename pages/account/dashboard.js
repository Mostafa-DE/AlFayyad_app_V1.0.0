import Dashboard from "@/components/Dashboard";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";

export default function dashboardPage({ orders }) {
  return (
    <Layout title="Dashboard">
      <Dashboard key={orders.id} orders={orders} />
    </Layout>
  );
}

/*------------get order from strapi-------------*/
export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/orders`);
  const orders = await res.json();
  return {
    props: {
      orders,
    },
  };
}
/*-----------------------X----------------------*/
