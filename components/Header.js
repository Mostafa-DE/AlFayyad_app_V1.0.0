import styles from "@/styles/Header.module.css";
import React, { useState, useEffect, useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "next/link";
import Search from "./Search";
import { IoStorefrontSharp } from "react-icons/io5";
import { CartContext } from "@/context/CartContext";
import { LanguageContext } from "@/context/LanguageContext";
import Badge from "@material-ui/core/Badge";
import AuthContext from "@/context/AuthContext";
import DrawerCart from "./DrawerCart";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { FaTimes } from "react-icons/fa";
import { FaHome } from "react-icons/fa";

import { FaShoppingCart } from "react-icons/fa";
import { GoSignOut } from "react-icons/go";
import { GoSignIn } from "react-icons/go";
import { MdAccountCircle } from "react-icons/md";
import { IoIosContacts } from "react-icons/io";
import { FaFileSignature } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { BsTools } from "react-icons/bs";
import { FaWarehouse } from "react-icons/fa";
import { FaChild } from "react-icons/fa";
import { GiBeamsAura } from "react-icons/gi";
import { MdKitchen } from "react-icons/md";
import { GiStarFormation } from "react-icons/gi";

import ListItemIcon from "@material-ui/core/ListItemIcon";

import Collapse from "@material-ui/core/Collapse";

import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const languageWords = {
  english: {
    NavHomeLanguage: "Home",
    NavProductsLanguage: "Products",
    NavMyAccountLanguage: "My Account",
    NavSignInLanguage: "Sign In",
    NavSignOutLanguage: "Sign Out",
    NavSignUpLanguage: "Sign Up",
    NavDashboardLanguage: "Dashboard",
    NavContactLanguage: "Contact",
    CategoryToolsLanguage: "Tools & Equipment",
    CategoryHousewareLanguage: "Houseware",
    CategoryKidsLanguage: "Kids Accessories",
    CategoryPersonalLanguage: "Personal Care",
    CategoryKitchenwareLanguage: "Kitchenware",
    DrawerCategoryLanguage: "Product Categories",
    DrawerContactUsLanguage: "Contact Us",
    DrawerShoppingCartLanguage: "Shopping Cart",
  },
  arabic: {
    NavHomeLanguage: "الرئيسية",
    NavProductsLanguage: "المنتجات",
    NavMyAccountLanguage: "حسابي",
    NavSignInLanguage: "دخول",
    NavSignOutLanguage: "خروج",
    NavSignUpLanguage: "تسجيل",
    NavDashboardLanguage: "الطلبات",
    NavContactLanguage: "اتصل بنا",
    CategoryToolsLanguage: "الأدوات و المعدات الصناعية",
    CategoryHousewareLanguage: "الأدوات المنزلية",
    CategoryKidsLanguage: "إكسسوارات الأطفال",
    CategoryPersonalLanguage: "العناية الشخصية",
    CategoryKitchenwareLanguage: "أدوات المطبخ",
    DrawerCategoryLanguage: "أقسام المنتجات",
    DrawerContactUsLanguage: "اتصل بنا",
    DrawerShoppingCartLanguage: "عربة التسوق",
  },
};

export default function ButtonAppBar() {
  /*----------------------context language-------------------*/
  const { language } = useContext(LanguageContext);
  const {
    NavHomeLanguage,
    NavProductsLanguage,
    NavMyAccountLanguage,
    NavSignInLanguage,
    NavSignOutLanguage,
    NavSignUpLanguage,
    NavDashboardLanguage,
    NavContactLanguage,
    CategoryToolsLanguage,
    CategoryHousewareLanguage,
    CategoryKidsLanguage,
    CategoryPersonalLanguage,
    CategoryKitchenwareLanguage,
    DrawerCategoryLanguage,
    DrawerContactUsLanguage,
  } = languageWords[language];
  /*-----------------------------X---------------------------*/

  /* -----------Auth User context----------------- */
  const { user, logout } = useContext(AuthContext);
  /* --------------------X------------------------ */

  /* -----------Cart Shopping context----------------- */
  const { cart, removeFromCart } = useContext(CartContext);
  /* -----------------------X------------------------- */

  /*------------state for scroll Down navbar-----------*/
  const [scrollState, setScrollState] = useState("top");

  useEffect(() => {
    let listener = null;
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

  /*----------state for products category-----------*/
  const [openCategory, setOpenCategory] = useState(true);

  const handleOpenCategory = () => {
    setOpenCategory(!openCategory);
  };
  /*------------------------X------------------------*/

  /*-----------all items (link) in drawer (Menu)------------*/
  const drawer = (
    <div>
      <List className={styles.mainDrawer}>
        <Link href="/" passHref={true}>
          <ListItem button>
            <ListItemText className={styles.listItemText}>
              <div>
                {" "}
                <FaHome className={styles.icons} />
                <span className={styles.menuText}> {NavHomeLanguage} </span>
              </div>
            </ListItemText>
          </ListItem>
        </Link>

        {/*--------------------Products Category---------------------*/}
        <ListItem button onClick={handleOpenCategory}>
          <ListItemIcon>
            <GiStarFormation className={styles.icons} />
            <span className={styles.menuText}> {DrawerCategoryLanguage} </span>
          </ListItemIcon>

          {openCategory ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openCategory} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link href="/category/tools" passHref={true}>
              <ListItem button>
                <ListItemIcon>
                  <BsTools className={styles.icons} />
                  <span className={styles.menuText}>
                    {" "}
                    {CategoryToolsLanguage}{" "}
                  </span>
                </ListItemIcon>
              </ListItem>
            </Link>

            <Link href="/category/houseware" passHref={true}>
              <ListItem button>
                <ListItemIcon>
                  <FaWarehouse className={styles.icons} />
                  <span className={styles.menuText}>
                    {" "}
                    {CategoryHousewareLanguage}{" "}
                  </span>
                </ListItemIcon>
              </ListItem>
            </Link>

            <Link href="/category/kids" passHref={true}>
              <ListItem button>
                <ListItemIcon>
                  <FaChild className={styles.icons} />
                  <span className={styles.menuText}>
                    {" "}
                    {CategoryKidsLanguage}{" "}
                  </span>
                </ListItemIcon>
              </ListItem>
            </Link>

            <Link href="/category/personal-care" passHref={true}>
              <ListItem button>
                <ListItemIcon>
                  <GiBeamsAura className={styles.icons} />
                  <span className={styles.menuText}>
                    {" "}
                    {CategoryPersonalLanguage}{" "}
                  </span>
                </ListItemIcon>
              </ListItem>
            </Link>

            <Link href="/category/houseware" passHref={true}>
              <ListItem button>
                <ListItemIcon>
                  <MdKitchen className={styles.icons} />
                  <span className={styles.menuText}>
                    {" "}
                    {CategoryKitchenwareLanguage}{" "}
                  </span>
                </ListItemIcon>
              </ListItem>
            </Link>
          </List>
        </Collapse>
        {/*----------------------------X-----------------------------*/}

        <Link href="/products/shopping-cart" passHref={true}>
          <ListItem button>
            <ListItemText className={styles.listItemText}>
              <div>
                {" "}
                <FaShoppingCart className={styles.icons} />
                <span className={styles.menuText}>
                  {" "}
                  {NavMyAccountLanguage}{" "}
                </span>
              </div>
            </ListItemText>
          </ListItem>
        </Link>

        {!user && (
          <>
            <Link href="/account/login" passHref={true}>
              <ListItem button>
                <ListItemText className={styles.listItemText}>
                  {!user && (
                    <div>
                      {" "}
                      <GoSignIn className={styles.icons} />
                      <span className={styles.menuText}>
                        {" "}
                        {NavSignInLanguage}{" "}
                      </span>
                    </div>
                  )}
                </ListItemText>
              </ListItem>
            </Link>

            <Link href="/account/register" passHref={true}>
              <ListItem button>
                <ListItemText className={styles.listItemText}>
                  {!user && (
                    <div>
                      {" "}
                      <FaFileSignature className={styles.icons} />
                      <span className={styles.menuText}>
                        {" "}
                        {NavSignUpLanguage}{" "}
                      </span>
                    </div>
                  )}
                </ListItemText>
              </ListItem>
            </Link>
          </>
        )}

        {user && (
          <>
            <ListItem button onClick={logout}>
              <ListItemText className={styles.listItemText}>
                <div>
                  {" "}
                  <GoSignOut className={styles.icons} />
                  <span className={styles.menuText}>
                    {" "}
                    {NavSignOutLanguage}{" "}
                  </span>
                </div>
              </ListItemText>
            </ListItem>

            <Link href="/account/my-account" passHref={true}>
              <ListItem button>
                <ListItemText className={styles.listItemText}>
                  <div>
                    {" "}
                    <MdAccountCircle className={styles.icons} />
                    <span className={styles.menuText}>
                      {" "}
                      {NavMyAccountLanguage}{" "}
                    </span>
                  </div>
                </ListItemText>
              </ListItem>
            </Link>
          </>
        )}

        <Link href="/contact" passHref={true}>
          <ListItem button>
            <ListItemText className={styles.listItemText}>
              <div>
                {" "}
                <IoIosContacts className={styles.icons} />
                <span className={styles.menuText}>
                  {" "}
                  {DrawerContactUsLanguage}{" "}
                </span>
              </div>
            </ListItemText>
          </ListItem>
        </Link>

        {user?.email === "admin@admin.com" && user?.username === "admin" ? (
          <Link href="/account/dashboard" passHref={true}>
            <ListItem button>
              <ListItemText style={{ fontSize: "1.3rem" }}>
                <div>
                  {" "}
                  <FaClipboardList className={styles.icons} />
                  <span className={styles.menuText}>
                    {" "}
                    {NavDashboardLanguage}{" "}
                  </span>
                </div>
              </ListItemText>
            </ListItem>
          </Link>
        ) : null}
      </List>
    </div>
  );
  /*------------------------X-----------------------*/

  return (
    <div
      className={` ${scrollState === "top" ? styles.main : styles.mainScroll} `}
    >
      <div className={styles.containerNav}>
        <div className={styles.logo}>
          <Link href="/" passHref={true}>
            <a
              className={` ${
                scrollState === "top" ? styles.logo : styles.logoScroll
              } `}
            >
              AlFayyad <IoStorefrontSharp className={styles.logoIcon} />
            </a>
          </Link>
        </div>

        <div className={styles.linkMenu}>
          <ul>
            <Link href="/" passHref={true}>
              <li> {NavHomeLanguage} </li>
            </Link>

            <Link href="/products/products-list" passHref={true}>
              <li>
                <div className={styles.dropDown}>
                  <button className={styles.dropBtn}>
                    {" "}
                    {NavProductsLanguage}{" "}
                  </button>
                  <div className={styles.dropDownContent}>
                    <Link href="/category/tools" passHref={true}>
                      {CategoryToolsLanguage}
                    </Link>
                    <Link href="/category/houseware" passHref={true}>
                      {CategoryHousewareLanguage}
                    </Link>
                    <Link href="/category/kids" passHref={true}>
                      {CategoryKidsLanguage}
                    </Link>
                    <Link href="/category/personal-care" passHref={true}>
                      {CategoryPersonalLanguage}
                    </Link>
                    <Link href="/category/houseware" passHref={true}>
                      {CategoryKitchenwareLanguage}
                    </Link>
                  </div>
                </div>
              </li>
            </Link>

            {user ? (
              <Link href="/account/my-account" passHref={true}>
                <li> {NavMyAccountLanguage} </li>
              </Link>
            ) : (
              <Link href="/account/login" passHref={true}>
                <li> {NavMyAccountLanguage} </li>
              </Link>
            )}

            {user ? (
              <li onClick={logout}> {NavSignOutLanguage} </li>
            ) : (
              <>
                <Link href="/account/login" passHref={true}>
                  <li> {NavSignInLanguage} </li>
                </Link>
              </>
            )}

            {user?.email === "admin@admin.com" && user?.username === "admin" ? (
              <>
                <Link href="/account/dashboard" passHref={true}>
                  <li> {NavDashboardLanguage} </li>
                </Link>
              </>
            ) : (
              <>
                <Link href="/contact" passHref={true}>
                  <li> {NavContactLanguage} </li>
                </Link>
              </>
            )}
          </ul>
        </div>

        <div className={styles.navContent}>
          <div className={styles.containerDrawerCart}>
            <Badge
              badgeContent={cart.itemsCount}
              color="error"
              className={styles.badgCart}
            >
              <DrawerCart cart={cart} removeFromCart={removeFromCart} />
            </Badge>
            <Search />
            <MenuIcon
              onClick={handleDrawerOpen}
              className={styles.menuIcon}
            />{" "}
            <Drawer anchor="right" open={open} style={{ opacity: 0.97 }}>
              {/*-----------------Close button icon------------*/}{" "}
              <div onClick={handleDrawerClose}>
                {" "}
                <IconButton onClick={handleDrawerClose}>
                  <FaTimes />{" "}
                </IconButton>{" "}
              </div>
              {/*--------------------------X-------------------*/}
              {drawer}{" "}
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
}
