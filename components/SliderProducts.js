import styles from "@/styles/SliderProducts.module.css";
import React, { useContext } from "react";
import { AiFillHeart } from "react-icons/ai";
import { CartContext } from "@/context/CartContext";
import RatingStar from "./RatingStar";
import Link from "next/link";
import swal from "sweetalert";
import { FaCartPlus } from "react-icons/fa";
import { LanguageContext } from "@/context/LanguageContext";

const languageWords = {
  english: {
    QuickViewBtnLanguage: "Quickview",
    AddToCartBtnLanguage: "Add To Cart",
    AlertTitleAddedToCartLanguage: "Awesome 😉",
    AlertTextAddedToCartLanguage: "This product has been added to your cart",
  },
  arabic: {
    QuickViewBtnLanguage: "التفاصيل",
    AddToCartBtnLanguage: "أضف إلى السلة",
    AlertTitleAddedToCartLanguage: "😉 رائع",
    AlertTextAddedToCartLanguage: "تم إضافة العنصر إلى سلة التسوق الخاصة بك",
  },
};

/*----------break point for responsive slider----------*/
export const breakPoints = [
  { width: 500, itemsToShow: 1 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 },
  { width: 1500, itemsToShow: 4 },
];
/*-------------------------X---------------------------*/

function SliderProducts({ product }) {
  /*----------------------context language-------------------*/
  const { language } = useContext(LanguageContext);
  const {
    QuickViewBtnLanguage,
    AddToCartBtnLanguage,
    AlertTitleAddedToCartLanguage,
    AlertTextAddedToCartLanguage,
  } = languageWords[language];
  /*-----------------------------X---------------------------*/

  /* -----------Cart Shopping context----------------- */
  const { addToCart } = useContext(CartContext);
  /* -----------------------X------------------------- */

  /*----------alert when add product to cart-----------*/
  const AddToCart = async () => {
    await addToCart(product);
    swal(
      AlertTitleAddedToCartLanguage,
      AlertTextAddedToCartLanguage,
      "success"
    );
  };
  /*-------------------------X-------------------------*/

  return (
    <div className="row">
      <div className="col-md-3 col-sm-6 mt-4">
        <div className={styles.productGrid}>
          {/*------------------card product image---------------------*/}
          <div className={styles.productImage}>
            {/*-----------------img product-----------------------*/}
            <a className={styles.image}>
              <img
                className={styles.pic1}
                src={product.images[0].url}
                alt={product.name}
              />
            </a>
            {/*----------------------X----------------------------*/}

            {/*----------------discount price---------------------*/}
            {product.discount !== null ? (
              <span className={styles.productDiscountLabel}>
                - {product.discount}%
              </span>
            ) : null}
            {/*----------------------X----------------------------*/}

            {/*------------------heart icon-----------------------*/}
            <span className={styles.productWishListLabel}>
              <button className={styles.buttonHeartFill}>
                <AiFillHeart className={styles.fillHeart} />
              </button>
            </span>
            {/*----------------------X----------------------------*/}

            {/*---------------quickview button--------------------*/}
            <ul className={styles.productLinks}>
              <Link href={`/products/${product.slug}`}>
                <a className={styles.QuickViewBtn}> {QuickViewBtnLanguage} </a>
              </Link>
            </ul>
            {/*----------------------X----------------------------*/}
          </div>
          {/*--------------------------X------------------------------*/}

          {/*-----------------card product content--------------------*/}
          <div className={styles.productContent}>
            {/*------------------title text-----------------------*/}
            <h3 className={styles.title}>
              <a>{product.name}</a>
            </h3>
            {/*----------------------X----------------------------*/}

            {/*------------------rating star----------------------*/}
            <ul className={styles.rating}>
              <RatingStar />
            </ul>
            {/*----------------------X----------------------------*/}

            {/*----------------price product----------------------*/}
            <div className={styles.price}>
              {product.oldPrice !== null ? (
                <span>{product.oldPrice} JD</span>
              ) : null}{" "}
              {product.price} JD
            </div>
            {/*----------------------X----------------------------*/}

            {/*--------------button add to cart-------------------*/}
            <button onClick={AddToCart} className={styles.addToCart}>
              {AddToCartBtnLanguage}{" "}
              <FaCartPlus
                style={{ fontSize: "1.1rem", margin: "0 0 0.2rem 0" }}
              />
            </button>
            {/*----------------------X----------------------------*/}
          </div>
          {/*--------------------------X------------------------------*/}
        </div>
      </div>
    </div>
  );
}

export default SliderProducts;
