import Layout from "@/components/Layout";
import { parseCookies } from "@/helpers/index";
import { API_URL } from "@/config/index";
import MyAccount from "@/components/MyAccount";

export default function myAccountPage({ account }) {
  return (
    <Layout title="Your Account Details | Al Fayyad Store">
      <MyAccount account={account} />
    </Layout>
  );
}

/*-------get user that logged in currentlly--------*/
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
/*-------------------------X-----------------------*/
