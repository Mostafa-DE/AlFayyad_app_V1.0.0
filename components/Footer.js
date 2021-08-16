import styles from "@/styles/Footer.module.css";
import Link from "next/link";

/*----------Style bootstrap--------*/
const stylesFooter = {
  root: {
    background:
      "linear-gradient(161deg,rgb(10, 10, 10) 0%,rgba(68, 68, 68, 0.986) 100%)",
  },
  white: {
    color: "#fff",
  },
  socialContain: {
    color: "#fff",
  },
  social: {
    color: "#fff",
    padding: "1.2rem",
    margin: "1rem",
    fontSize: "1.5rem",
  },
  about: {
    color: "#fff",
    textDecoration: "none",
  },
  contact: {
    color: "#fff",
    textDecoration: "none",
  },
};
/*-----------------X---------------*/

function Footer() {
  return (
    <footer
      className="page-footer font-small mdb-color lighten-3 py-3 pt-4 bg-light"
      style={stylesFooter.root}
    >
      <div className="container text-center text-md-left">
        <div className="row">
          {/*-----------------descripe about who we are--------------*/}
          <div
            className="col-md-4 col-lg-3 mr-auto my-md-4 my-0 mt-4 mb-1"
            style={stylesFooter.white}
          >
            <h5 className="font-weight-bold text-uppercase mb-4">
              Who We Are ??
            </h5>
            <p>
              We are Al Fayyad For European Products, we provide you with the
              best European products at reasonable prices and high quality, we
              strive to serve you at any time. don't hesitate to contact us at
              any time.
            </p>
          </div>
          {/*-----------------------------X------------------------*/}
          <hr className="clearfix w-100 d-md-none" />
          {/*--------------terms & conditions & policies-----------*/}
          <div
            className="col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1"
            style={stylesFooter.white}
          >
            <h5 className="font-weight-bold text-uppercase mb-4">
              ALFAYYAD Policies
            </h5>
            <ul className="list-unstyled">
              <li>
                <p>
                  <Link href="/terms-policy/terms-conditions">
                    <a className={styles.link} style={stylesFooter.about}>
                      Terms & Conditions
                    </a>
                  </Link>
                </p>
              </li>
              <li>
                <p>
                  <Link href="/terms-policy/privacy-policy">
                    <a className={styles.link} style={stylesFooter.about}>
                      Privacy Policy
                    </a>
                  </Link>
                </p>
              </li>
              <li>
                <p>
                  <Link href="/terms-policy/sales-policies">
                    <a className={styles.link} style={stylesFooter.about}>
                      Sales Policies
                    </a>
                  </Link>
                </p>
              </li>
              <li>
                <p>
                  <Link href="/terms-policy/refund-policy">
                    <a className={styles.link} style={stylesFooter.about}>
                      Refund Policy
                    </a>
                  </Link>
                </p>
              </li>
              <li>
                <p>
                  <Link href="/terms-policy/cancellation-policy">
                    <a className={styles.link} style={stylesFooter.about}>
                      Cancellation Policy
                    </a>
                  </Link>
                </p>
              </li>
              <li>
                <p>
                  <Link href="/terms-policy/shipping-policy">
                    <a className={styles.link} style={stylesFooter.about}>
                      Shipping Policy
                    </a>
                  </Link>
                </p>
              </li>
            </ul>
          </div>
          {/*----------------------------X-------------------------*/}
          <hr className="clearfix w-100 d-md-none" />
          {/*--------------------Contact methods-------------------*/}
          <div
            className="col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1"
            style={stylesFooter.white}
          >
            <h5 className="font-weight-bold text-uppercase mb-4">contact us</h5>
            <ul className="list-unstyled">
              <li>
                <p style={stylesFooter.contact}>
                  <i className="fas fa-map-marker-alt"></i>{" "}
                  <a
                    className={styles.link}
                    href="#"
                    style={stylesFooter.contact}
                  >
                    Joradn, Amman, online store
                  </a>
                </p>
              </li>
              <li>
                <p>
                  <i className="fas fa-mobile-alt"></i>{" "}
                  <a
                    className={styles.link}
                    href="tel:0787731525"
                    style={stylesFooter.contact}
                  >
                    0787731525
                  </a>
                </p>
              </li>
              <li>
                <p>
                  <i className="fab fa-whatsapp"></i>{" "}
                  <a
                    className={styles.link}
                    href="https://wa.me/message/TDOPR6Z3RHN7L1"
                    style={stylesFooter.contact}
                  >
                    0787731525
                  </a>
                </p>
              </li>
              <li>
                <p>
                  <i className="fab fa-facebook-messenger"></i>{" "}
                  <a
                    className={styles.link}
                    href="http://m.me/fayyado"
                    style={stylesFooter.contact}
                  >
                    AlFayyad for european products
                  </a>
                </p>
              </li>
              <li>
                <p>
                  <i className="fas fa-envelope"></i>{" "}
                  <a
                    className={styles.link}
                    href="https://mail.google.com/mail/?view=cm&source=mailto&to=fayyadm524@gmail.com"
                    style={stylesFooter.contact}
                  >
                    fayyadm524@gmail.com
                  </a>
                </p>
              </li>
            </ul>
          </div>
          {/*---------------------------X--------------------------*/}
          <hr className="clearfix w-100 d-md-none" />
          {/*--------------------Follow us social------------------*/}
          <div
            className="col-md-2 col-lg-2 text-center mx-auto my-4"
            style={stylesFooter.socialContain}
          >
            <h5 className="font-weight-bold text-uppercase mb-4">Follow Us</h5>
            <a
              href="https://web.facebook.com/fayyado"
              type="button"
              className={`btn-floating btn-fb ${styles.link} `}
              style={stylesFooter.social}
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com/fayyado1/"
              type="button"
              className={`btn-floating btn-tw ${styles.link} `}
              style={stylesFooter.social}
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://github.com/Mostafa-DE"
              type="button"
              className={`btn-floating btn-gplus ${styles.link} `}
              style={stylesFooter.social}
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://twitter.com/login"
              type="button"
              className={`btn-floating btn-dribbble ${styles.link} `}
              style={stylesFooter.social}
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
          {/*---------------------------X--------------------------*/}
        </div>
      </div>
      {/*-----------------Copy right & reserved----------------*/}
      <div className={styles.copyRight}>
        <p>
          {" "}
          Copyright &copy; AlFayyad All rights reserved || Made By
          <a href="https://github.com/Mostafa-DE"> Mostafa Fayyad</a>
        </p>
      </div>
      {/*--------------------------X---------------------------*/}
    </footer>
  );
}

export default Footer;
