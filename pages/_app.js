import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";
import { WishProvider } from "@/context/WishContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
        integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
        crossOrigin="anonymous"
      ></link>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://unpkg.com/react/umd/react.production.min.js"
        crossOrigin="true"
      ></script>

      <script
        src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
        crossOrigin="true"
      ></script>

      <script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossOrigin="true"
      ></script>

      <script>var Alert = ReactBootstrap.Alert;</script>
      <script src="https://unpkg.com/styled-components/dist/styled-components.min.js"></script>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
      <script src="sweetalert2.all.min.js"></script>
      {/* <link
        rel="stylesheet"
        href="node_modules/mdbootstrap/css/bootstrap.min.css"
      /> */}
      {/* <link rel="stylesheet" href="node_modules/mdbootstrap/css/mdb.min.css" />
      <script
        type="text/javascript"
        src="node_modules/mdbootstrap/js/jquery.min.js"
      ></script>
      <script
        type="text/javascript"
        src="node_modules/mdbootstrap/js/popper.min.js"
      ></script>
      <script
        type="text/javascript"
        src="node_modules/mdbootstrap/js/bootstrap.min.js"
      ></script>
      <script
        type="text/javascript"
        src="node_modules/mdbootstrap/js/mdb.min.js"
      ></script>
      <link
        rel="stylesheet"
        href="node_modules/mdbootstrap/css/style.css"
      ></link> */}
      <AuthProvider>
        <CartProvider>
          <WishProvider>
            <Component {...pageProps} />
          </WishProvider>
        </CartProvider>
      </AuthProvider>
    </>
  );
}

export default MyApp;
