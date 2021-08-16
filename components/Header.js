import styles from "@/styles/Header.module.css";
import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Search from "./Search";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseFill } from "react-icons/ri";
import { IoStorefrontSharp } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { FiLogIn } from "react-icons/fi";
import { CartContext } from "@/context/CartContext";
import Badge from "@material-ui/core/Badge";
import AuthContext from "@/context/AuthContext";
import DrawerCart from "./DrawerCart";

function Header() {
  /* -----------Auth User context----------------- */
  const { user, logout } = useContext(AuthContext);
  /* --------------------X------------------------ */

  /* -----------Cart Shopping context----------------- */
  const { cart, removeFromCart } = useContext(CartContext);
  /* -----------------------X------------------------- */

  /*------for close menu in small screen------*/
  const [toogle, setToogle] = useState(false);
  const handleToogle = () => {
    setToogle(!toogle);
  };
  /*---------------------X--------------------*/

  /*------------state for scroll Down navbar-----------*/
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
  /*-------------------------X------------------------*/

  return (
    <header
      className={`${
        scrollState === "top" ? styles.header : styles.headerScroll
      }`}
    >
      {/*----------------------logo alfayyad----------------------*/}
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
      {/*----------------------------X----------------------------*/}

      <nav
        className={`${scrollState === "top" ? styles.nav : styles.navScroll}`}
      >
        {/*-------------------menu options (navbar)--------------------*/}
        <ul className={toogle === true ? `${styles.toogle}` : ""}>
          {user?.email === "admin@admin.com" &&
          user?.username === "admin" &&
          user?.id === 7 ? (
            <>
              <li style={{ marginRight: "-1rem" }}>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/products/productsList">
                  <a>Products</a>
                </Link>
              </li>
              <li>
                <Link href="/account/dashboard">
                  <a>Dashboard</a>
                </Link>
              </li>
              <li>
                <Link href="/account/login">
                  <a onClick={logout}>
                    Logout <FiLogOut />
                  </a>
                </Link>
              </li>
              <li>
                <RiCloseFill
                  className={styles.closeIcon}
                  onClick={handleToogle}
                />
              </li>
            </>
          ) : (
            <>
              <li style={{ marginRight: "-1rem" }}>
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
              {user ? (
                <>
                  <li style={{ marginLeft: "-1rem" }}>
                    <Link href="/account/login">
                      <a onClick={logout}>
                        Logout <FiLogOut />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/account/myAccount">
                      <a> My Account</a>
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link href="/account/login">
                      <a>
                        Login <FiLogIn />
                      </a>
                    </Link>
                  </li>
                </>
              )}
              <li>
                <RiCloseFill
                  className={styles.closeIcon}
                  onClick={handleToogle}
                />
              </li>
            </>
          )}
        </ul>
        {/*---------------------------X--------------------------------*/}

        {/*-------------Drawer cart component-----------*/}
        <div
          className={`${
            scrollState === "top" ? styles.navCart : styles.navCartScroll
          }`}
        >
          <Badge
            badgeContent={cart.itemsCount}
            color="error"
            className={styles.badgCart}
          >
            <DrawerCart cart={cart} removeFromCart={removeFromCart} />
          </Badge>
        </div>
        {/*-----------------------X---------------------*/}

        {/*----------------Search component-------------*/}
        <div>
          <Search />
        </div>
        {/*-----------------------X---------------------*/}

        {/*---------menu icon for small screen----------*/}
        <div className={styles.menu} onClick={handleToogle}>
          <GiHamburgerMenu className={styles.menuIcon} />
        </div>
        {/*---------------------X-----------------------*/}
      </nav>
    </header>
  );
}

export default Header;
