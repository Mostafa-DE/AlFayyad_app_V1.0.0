import Layout from "@/components/Layout";
import { parseCookies } from "@/helpers/index";
import { API_URL } from "@/config/index";
import MyAccount from "@/components/MyAccount";

function myAccountPage({ account }) {
  console.log(account);
  return (
    <Layout>
      <MyAccount account={account} />
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

export default myAccountPage;
