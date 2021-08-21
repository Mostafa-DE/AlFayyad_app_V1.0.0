import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";
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

      {/*-----------------------------------font Awesome-----------------------------------*/}
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
        integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
        crossOrigin="anonymous"
      ></link>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"
      />
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

      {/*-----------------------------------bootstrap react--------------------------------*/}
      <script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossOrigin="true"
      ></script>
      <script
        src="https://unpkg.com/react/umd/react.production.min.js"
        crossOrigin="true"
      ></script>

      <script
        src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
        crossOrigin="true"
      ></script>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
        integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
        crossOrigin="anonymous"
      />
      <script>var Alert = ReactBootstrap.Alert;</script>
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
              <Component {...pageProps} />
            </CartProvider>
          </AuthProvider>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
