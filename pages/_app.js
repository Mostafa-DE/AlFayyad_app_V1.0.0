import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";
import { LanguageProvider } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import Script from "next/script";

export default function MyApp({ Component, pageProps, router }) {
  return (
    <>
      {/*----------------------------------bootstrap 5v------------------------------------*/}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
        crossOrigin="anonymous"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      ></Script>
      {/*----------------------------------------X-----------------------------------------*/}

      {/*----------------------------------react dependsess--------------------------------*/}
      <Script
        src="https://unpkg.com/react/umd/react.production.min.js"
        crossOrigin="true"
      ></Script>

      <Script
        src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
        crossOrigin="true"
      ></Script>
      {/*----------------------------------------X-----------------------------------------*/}

      {/*-----------------------------------google fonts-----------------------------------*/}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      {/*----------------------------------------X-----------------------------------------*/}

      {/*-----------------------------------sweetAlert-------------------------------------*/}
      <Script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></Script>
      {/*----------------------------------------X-----------------------------------------*/}

      <AnimatePresence>
        <motion.div
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          exit="pageExit"
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
            },
            pageExit: {
              opacity: 0,
            },
          }}
        >
          <AuthProvider>
            <CartProvider>
              <LanguageProvider>
                <Component {...pageProps} />
              </LanguageProvider>
            </CartProvider>
          </AuthProvider>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
