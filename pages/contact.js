import Layout from "@/components/Layout";
import ContactForm from "@/components/ContactForm";
import { parseCookies } from "@/helpers/index";
import { API_URL } from "@/config/index";

export default function ContactPage({ account }) {
  return (
    <Layout title="Contact Us | Al Fayyad Store">
      <ContactForm account={account} />
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
