import styles from "@/styles/Layout.module.css";
import { useRouter } from "next/router";
import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
import ShowPhoto from "./ShowPhoto";
import ButtonScrollToTop from "./ButtonScrollToTop";
import ButtonWhatsapp from "./ButtonWhatsapp";
import NProgress from "nprogress";
import { useEffect } from "react";

function Layout({ title, description, children }) {
  const router = useRouter();

  useEffect(() => {
    const onRouterChangeStart = () => {
      NProgress.start();
    };
    const onRouteChangeComplete = () => {
      NProgress.done();
    };
    const onRouteChangeError = () => {
      NProgress.done();
    };
    router.events.on("routeChangeStart", onRouterChangeStart);
    router.events.on("routeChangeComplete", onRouteChangeComplete);
    router.events.on("routeChangeError", onRouteChangeError);

    return () => {
      router.events.off("routeChangeStart", onRouterChangeStart);
      router.events.off("routeChangeComplete", onRouteChangeComplete);
      router.events.off("routeChangeError", onRouteChangeError);
    };
  }, []);

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fayyad.svg" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
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
    "We are Al Fayyad For European Products, we provide you with the best European products at reasonable prices and high quality, we strive to serve you at any time. don't hesitate to contact us at any time.",
};
/*---------------------------------X--------------------------------*/

export default Layout;
