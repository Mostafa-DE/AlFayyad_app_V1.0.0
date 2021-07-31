import { useState, useEffect, useContext } from "react";
import styles from "@/styles/TestHeader.module.css";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseFill } from "react-icons/ri";
import { IoStorefrontSharp } from "react-icons/io5";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import Badge from "@material-ui/core/Badge";
import AuthContext from "@/context/AuthContext";
import { CartContext } from "@/context/CartContext";

function TestHeader() {
  /* -----------Auth User context----------------- */
  const { user, logout } = useContext(AuthContext);
  /* --------------------X------------------------ */

  /* -----------Cart Shopping context----------------- */
  const { cart } = useContext(CartContext);
  /* -----------------------X------------------------- */

  const [toogle, setToogle] = useState(false);
  const handleToogle = () => {
    setToogle(!toogle);
  };

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
    <header
      className={`${
        scrollState === "top" ? styles.header : styles.headerScroll
      }`}
    >
      <div
        className={`${scrollState === "top" ? styles.logo : styles.logoScroll}`}
      >
        <a href="/">
          AlFayyad
          <IoStorefrontSharp
            style={{ marginLeft: "0.5rem", marginBottom: "0.3rem" }}
          />
        </a>
      </div>
      <nav
        className={`${scrollState === "top" ? styles.nav : styles.navScroll}`}
      >
        <ul className={toogle === true ? `${styles.toogle}` : ""}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products/productsList">
              <a>Products</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">contact</Link>
          </li>
          <li>
            <Link href="/account/login">
              <a>
                Login <FiLogIn />
              </a>
            </Link>
          </li>
          <li>
            <RiCloseFill className={styles.closeIcon} onClick={handleToogle} />
          </li>
        </ul>
        <div
          className={`${
            scrollState === "top" ? styles.navCart : styles.navCartScroll
          }`}
        >
          <Badge badgeContent={cart.itemsCount} color="error">
            <Link href="/products/shoppingCart">
              <HiOutlineShoppingCart className={styles.shoppingCartIcon} />
            </Link>
          </Badge>
        </div>
        <div>
          <AiOutlineSearch className={styles.searchIcon} />
        </div>
        <div className={styles.menu} onClick={handleToogle}>
          <GiHamburgerMenu className={styles.menuIcon} />
        </div>
      </nav>
    </header>
  );
}

export default TestHeader;
