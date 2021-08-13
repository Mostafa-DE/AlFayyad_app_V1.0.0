import Dashboard from "@/components/Dashboard";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";

function dashboardPage({ orders }) {
  return (
    <Layout title="Dashboard">
      <Dashboard key={orders.id} orders={orders} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/orders`);
  const orders = await res.json();
  return {
    props: {
      orders,
    },
  };
}

export default dashboardPage;
