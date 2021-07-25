import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "./Footer";
import Header from "./Header";
import ShowPhoto from "./ShowPhoto";
import styles from "@/styles/Layout.module.css";
import ButtonScrollToTop from "./ButtonScrollToTop";
import ButtonWhatsapp from "./ButtonWhatsapp";

function Layout({ title, description, children }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Header />

      {router.pathname === "/" ? <ShowPhoto /> : null}
      <div className={styles.container}>{children}</div>

      <Footer />
      <ButtonWhatsapp />
      <ButtonScrollToTop />
    </div>
  );
}

Layout.defaultProps = {
  title: "AlFayyad_Home",
  description:
    "Shopping in our page is very easy and you can find special and unique products :)",
};

export default Layout;
