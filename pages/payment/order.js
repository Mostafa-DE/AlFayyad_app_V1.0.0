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
  let { token } = parseCookies(req);
  const res = await fetch(`${API_URL}/users/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const account = await res.json();
  if (token === undefined) {
    token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiaWF0IjoxNjMxMTQ2NzMyLCJleHAiOjE2MzM3Mzg3MzJ9.p0ad5AovgQQuJgK3PLCHYwQj-c4h8gm93HFd_77nqD4";
  }

  return {
    props: {
      account,
      token,
    },
  };
}
