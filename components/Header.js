import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import Search from "./Search";
import { IoStorefrontSharp } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import AuthContext from "@/context/AuthContext";
import { CartContext } from "@/context/CartContext";
import { WishContext } from "@/context/WishContext";
import Badge from "@material-ui/core/Badge";

function Header() {
  /* -----------Auth User context----------------- */
  const { user, logout } = useContext(AuthContext);
  /* --------------------X------------------------ */

  /* -----------Cart Shopping context----------------- */
  const { cart } = useContext(CartContext);
  /* -----------------------X------------------------- */
  /* -----------Cart Shopping context----------------- */
  const { wishProduct } = useContext(WishContext);
  /* -----------------------X------------------------- */

  const [scrollState, setScrollState] = useState("top");
  let listener = null;
  useEffect(() => {
    listener = document.addEventListener("scroll", () => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 100) {
        if (scrollState !== "amir") {
          setScrollState("amir");
        }
      } else {
        if (scrollState !== "top") {
          setScrollState("top");
        }
      }
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [scrollState]);

  return (
    <>
      <header>
        <nav
          className={`navbar navbar-expand-lg fixed-top ${
            scrollState === "top" ? styles.navbarMain : styles.navbarMainScroll
          } `}
        >
          <div className="container-fluid">
            <a
              className={`navbar-brand me-2 ${
                scrollState === "top" ? styles.logo : styles.logoScroll
              }`}
              href="/"
            >
              AlFayyad
              <IoStorefrontSharp
                style={{ marginLeft: "0.5rem", marginBottom: "0.3rem" }}
              />
            </a>
            <div data-bs-toggle="collapse" className="navbar-toggler">
              <Badge badgeContent={cart.itemsCount} color="error">
                <Link href="/products/shoppingCart">
                  <HiOutlineShoppingCart
                    style={{ fontSize: "1.6rem", color: "#03c7ff" }}
                    className={`${
                      scrollState === "top" ? styles.cart : styles.cartScroll
                    }`}
                  />
                </Link>
              </Badge>
              <Badge badgeContent={wishProduct.itemsCount} color="error">
                <Link href="/products/wishList">
                  <FaRegHeart
                    style={{ fontSize: "1.6rem" }}
                    className={styles.FavouriteProducts}
                  />
                </Link>
              </Badge>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <FiMenu style={{ color: "#fff" }} />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className={`navbar-nav me-auto mb-2 mb-lg-0 ${styles.menu}`}>
                <li>
                  <Link href="/">
                    <a className={styles.link1}>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/products/productsList">
                    <a
                      className={`${
                        scrollState === "top" ? styles.link : styles.linkScroll
                      }`}
                    >
                      {" "}
                      Products
                      <span className="badge rounded-pill bg-danger m-1">
                        HOT
                      </span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a
                      className={`${
                        scrollState === "top" ? styles.link : styles.linkScroll
                      }`}
                    >
                      Contact
                    </a>
                  </Link>
                </li>
                {user ? (
                  <>
                    <li>
                      <Link href="/account/login">
                        <a
                          onClick={logout}
                          className={`${
                            scrollState === "top"
                              ? styles.loginBtn
                              : styles.linkScroll
                          }`}
                        >
                          Logout <FiLogOut className={styles.loginIcon} />
                        </a>
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link href="/account/login">
                        <a
                          className={`${
                            scrollState === "top"
                              ? styles.loginBtn
                              : styles.linkScroll
                          }`}
                        >
                          Login <FiLogIn className={styles.loginIcon} />
                        </a>
                      </Link>
                    </li>
                  </>
                )}
              </ul>
              <div style={{ marginRight: "1rem" }}>
                <Badge badgeContent={cart.itemsCount} color="error">
                  <Link href="/products/shoppingCart">
                    <HiOutlineShoppingCart
                      className={`${
                        scrollState === "top" ? styles.cart : styles.cartScroll
                      }`}
                    />
                  </Link>
                </Badge>
                <Badge badgeContent={wishProduct.itemsCount} color="error">
                  <Link href="/products/wishList">
                    <FaRegHeart className={styles.FavouriteProducts} />
                  </Link>
                </Badge>
              </div>

              <Search />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
