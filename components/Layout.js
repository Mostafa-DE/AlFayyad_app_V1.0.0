import styles from "@/styles/Layout.module.css";
import { useRouter } from "next/router";
import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
import ShowPhoto from "./ShowPhoto";
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
      {/*-----------crusor photo in home page------------*/}
      {router.pathname === "/" ? <ShowPhoto /> : null}
      {/*------------------------X-----------------------*/}
      <div className={styles.container}>{children}</div>
      <Footer />
      <ButtonWhatsapp />
      <ButtonScrollToTop />
    </div>
  );
}

/*------------default title in case i forget to add title-----------*/
Layout.defaultProps = {
  title: "AlFayyad_Home",
  description:
    "Shopping in our page is very easy and you can find special and unique products :)",
};
/*---------------------------------X--------------------------------*/

export default Layout;
