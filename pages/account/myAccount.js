import Layout from "@/components/Layout";
import { parseCookies } from "@/helpers/index";
import { API_URL } from "@/config/index";
import MyAccount from "@/components/MyAccount";

function myAccountPage({ account }) {
  return (
    <Layout title="My Account">
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

export default myAccountPage;
