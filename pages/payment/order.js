import Layout from "@/components/Layout";
import ShippingAdress from "@/components/ShippingAdress";
import { parseCookies } from "@/helpers/index";
import { API_URL } from "@/config/index";

export default function orderPage({ account }) {
  return (
    <Layout title="Shipping Information | Al Fayyad Store">
      <ShippingAdress account={account} />
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);

  const res = await fetch(`${API_URL}/users/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const account = await res.json();

  return {
    props: {
      account,
    },
  };
}
