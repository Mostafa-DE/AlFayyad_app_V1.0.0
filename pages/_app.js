import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/*----------------------------------bootstrap 5v------------------------------------*/}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
        crossOrigin="anonymous"
      />
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      ></script>
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
      <script
        src="https://unpkg.com/react/umd/react.production.min.js"
        crossOrigin="true"
      ></script>

      <script
        src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
        crossOrigin="true"
      ></script>
      {/*----------------------------------------X-----------------------------------------*/}

      {/*-----------------------------------bootstrap react--------------------------------*/}
      <script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossOrigin="true"
      ></script>
      {/*----------------------------------------X-----------------------------------------*/}

      <script>var Alert = ReactBootstrap.Alert;</script>

      {/*-----------------------------------google fonts-----------------------------------*/}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      {/*----------------------------------------X-----------------------------------------*/}

      {/*-----------------------------------sweetAlert-------------------------------------*/}
      <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
      {/*----------------------------------------X-----------------------------------------*/}

      {/*-----------------------------------sweetAlert2------------------------------------*/}
      <script src="sweetalert2.all.min.js"></script>
      {/*----------------------------------------X-----------------------------------------*/}

      <AuthProvider>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </AuthProvider>
    </>
  );
}

export default MyApp;
