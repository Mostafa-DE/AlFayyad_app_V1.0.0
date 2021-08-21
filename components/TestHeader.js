import styles from "@/styles/TestHeader.module.css";
import React, { useState, useEffect, useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "next/link";
import Search from "./Search";
import { IoStorefrontSharp } from "react-icons/io5";
import { CartContext } from "@/context/CartContext";
import Badge from "@material-ui/core/Badge";
import AuthContext from "@/context/AuthContext";
import DrawerCart from "./DrawerCart";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { FaTimes } from "react-icons/fa";

export default function ButtonAppBar() {
  /* -----------Auth User context----------------- */
  const { user, logout } = useContext(AuthContext);
  /* --------------------X------------------------ */

  /* -----------Cart Shopping context----------------- */
  const { cart, removeFromCart } = useContext(CartContext);
  /* -----------------------X------------------------- */

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

  /*---state for handle drawer cart (open/close)----*/
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(!open);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  /*------------------------X-----------------------*/

  /*-----------all items (link) in drawer (Menu)------------*/
  const drawer = (
    <div>
      <List className={styles.mainDrawer}>
        <ListItem button>
          <Link href="/" passHref={true}>
            <ListItemText className={styles.listItemText}>
              <div>
                {" "}
                <i className={`fas fa-home ${styles.icons} `}></i>
                <span className={styles.menuText}>Home</span>
              </div>
            </ListItemText>
          </Link>
        </ListItem>

        <ListItem button>
          <Link href="/products/productsList" passHref={true}>
            <ListItemText className={styles.listItemText}>
              <div>
                {" "}
                <i className={`fas fa-dolly-flatbed ${styles.icons}`}></i>
                <span className={styles.menuText}>Products</span>
              </div>
            </ListItemText>
          </Link>
        </ListItem>

        <ListItem button>
          <Link href="/products/shoppingCart" passHref={true}>
            <ListItemText className={styles.listItemText}>
              <div>
                {" "}
                <i className={`fas fa-shopping-cart ${styles.icons}`}></i>
                <span className={styles.menuText}>My Cart</span>
              </div>
            </ListItemText>
          </Link>
        </ListItem>

        {!user && (
          <>
            <ListItem button>
              <Link href="/account/login" passHref={true}>
                <ListItemText className={styles.listItemText}>
                  {!user && (
                    <div>
                      {" "}
                      <i className={`fas fa-sign-in-alt ${styles.icons}`}></i>
                      <span className={styles.menuText}>Sign In</span>
                    </div>
                  )}
                </ListItemText>
              </Link>
            </ListItem>

            <ListItem button>
              <Link href="/account/register" passHref={true}>
                <ListItemText className={styles.listItemText}>
                  {!user && (
                    <div>
                      {" "}
                      <i className={`fas fa-user-plus ${styles.icons}`}></i>
                      <span className={styles.menuText}>Sign Up</span>
                    </div>
                  )}
                </ListItemText>
              </Link>
            </ListItem>
          </>
        )}

        {user && (
          <>
            <ListItem button onClick={logout}>
              <ListItemText className={styles.listItemText}>
                <div>
                  {" "}
                  <i className={`fas fa-sign-out-alt ${styles.icons}`}></i>
                  <span className={styles.menuText}>Sign Out</span>
                </div>
              </ListItemText>
            </ListItem>
            <ListItem button>
              <Link href="/account/myAccount" passHref={true}>
                <ListItemText className={styles.listItemText}>
                  <div>
                    {" "}
                    <i className={`fas fa-user-circle ${styles.icons}`}></i>
                    <span className={styles.menuText}>My Account</span>
                  </div>
                </ListItemText>
              </Link>
            </ListItem>
          </>
        )}

        <ListItem button>
          <Link href="/contact" passHref={true}>
            <ListItemText className={styles.listItemText}>
              <div>
                {" "}
                <i className={`fas fa-file-signature ${styles.icons}`}></i>
                <span className={styles.menuText}>Contact Us</span>
              </div>
            </ListItemText>
          </Link>
        </ListItem>

        {user?.email === "admin@admin.com" && user?.username === "admin" ? (
          <ListItem button>
            <Link href="/account/dashboard" passHref={true}>
              <ListItemText style={{ fontSize: "1.3rem" }}>
                <div>
                  {" "}
                  <i className={`fas fa-clipboard-list ${styles.icons}`}></i>
                  <span className={styles.menuText}>Dashboard</span>
                </div>
              </ListItemText>
            </Link>
          </ListItem>
        ) : null}
      </List>
      <Divider />
      <List></List>
    </div>
  );
  /*------------------------X-----------------------*/

  return (
    <div>
      <AppBar
        position="fixed"
        className={`${scrollState === "top" ? styles.main : styles.mainScroll}`}
      >
        <Toolbar className={styles.containerNav}>
          <Link href="/">
            <a
              className={` ${
                scrollState === "top" ? styles.logo : styles.logoScroll
              } `}
            >
              AlFayyad <IoStorefrontSharp className={styles.logoIcon} />
            </a>
          </Link>

          <div className={styles.containerDrawerCart}>
            <Badge
              badgeContent={cart.itemsCount}
              color="error"
              className={styles.badgCart}
            >
              <DrawerCart cart={cart} removeFromCart={removeFromCart} />
            </Badge>
            <Search />
            <MenuIcon onClick={handleDrawerOpen} className={styles.menuIcon} />
          </div>

          <Drawer anchor="right" open={open}>
            {/*-----------------Close button icon------------*/}
            <div onClick={handleDrawerClose}>
              <IconButton onClick={handleDrawerClose}>
                <FaTimes />
              </IconButton>
            </div>
            {/*--------------------------X-------------------*/}

            {drawer}
          </Drawer>
        </Toolbar>
      </AppBar>
    </div>
  );
}
