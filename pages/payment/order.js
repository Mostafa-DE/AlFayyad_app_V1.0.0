import Layout from "@/components/Layout";
import ShippingAdress from "@/components/ShippingAdress";
import { parseCookies } from "@/helpers/index";
import { API_URL } from "@/config/index";

export default function orderPage({ account, token }) {
  return (
    <Layout title="Shipping Information | Al Fayyad Store">
      <ShippingAdress account={account} token={token} />
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  let { token = null } = parseCookies(req);

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
      token,
    },
  };
}
