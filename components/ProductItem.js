import styles from "@/styles/ProductItem.module.css";
import { useContext } from "react";
import { AiFillHeart } from "react-icons/ai";
import { CartContext } from "@/context/CartContext";
import { LanguageContext } from "@/context/LanguageContext";
import RatingStar from "./RatingStar";
import Link from "next/link";
import swal from "sweetalert";
import { FaCartPlus } from "react-icons/fa";

const languageWords = {
  english: {
    QuickviewBtnLanguage: "Quickview",
    AddToCartBtnLanguage: "Add To Cart",
    AlertTitleAddedToCartLanguage: "Awesome 😉",
    AlertTextAddedToCartLanguage: "This product has been added to your cart",
  },
  arabic: {
    QuickviewBtnLanguage: "التفاصيل",
    AddToCartBtnLanguage: "أضف إلى السلة",
    AlertTitleAddedToCartLanguage: "😉 رائع",
    AlertTextAddedToCartLanguage: "تم إضافة العنصر إلى سلة التسوق الخاصة بك",
  },
};

function TestCardProduct({ product }) {
  /*----------------------context language-------------------*/
  const { language } = useContext(LanguageContext);
  const {
    QuickviewBtnLanguage,
    AddToCartBtnLanguage,
    AlertTitleAddedToCartLanguage,
    AlertTextAddedToCartLanguage,
  } = languageWords[language];
  /*-----------------------------X---------------------------*/

  /*------------Cart Shopping context------------------*/
  const { addToCart } = useContext(CartContext);
  /*------------------------X--------------------------*/

  /*----------alert when add product to cart-----------*/
  const AddToCart = async () => {
    await addToCart(product);
    swal(
      AlertTitleAddedToCartLanguage,
      AlertTextAddedToCartLanguage,
      "success"
    );
  };
  /*------------------------X--------------------------*/

  return (
    <div className="row">
      <div className="col-md-3 col-sm-6 mt-4">
        <div className={styles.productGrid}>
          <div className={styles.productImage}>
            {/*-------------product image--------------*/}
            <a className={styles.image}>
              <img
                className={styles.pic1}
                src={product.images[0].url}
                alt="product photo"
              />
            </a>
            {/*-------------------X--------------------*/}

            {/*-------------discount price-------------*/}
            {product.discount !== null ? (
              <span className={styles.productDiscountLabel}>
                - {product.discount}%
              </span>
            ) : null}
            {/*--------------------X-------------------*/}

            {/*---------------heart icon---------------*/}
            <span className={styles.productWishListLabel}>
              <button className={styles.buttonHeartFill}>
                <AiFillHeart className={styles.fillHeart} />
              </button>
            </span>
            {/*-------------------X--------------------*/}

            {/*---------details about product----------*/}
            <ul className={styles.productLinks}>
              <Link href={`/products/${product.slug}`}>
                <a className={styles.QuickViewBtn}> {QuickviewBtnLanguage} </a>
              </Link>
            </ul>
            {/*-------------------X--------------------*/}
          </div>

          <div className={styles.productContent}>
            {/*------------name of product-------------*/}
            <h3 className={styles.title}>
              <a>{product.name}</a>
            </h3>
            {/*------------------X---------------------*/}

            {/*--------------rating star---------------*/}
            <ul className={styles.rating}>
              <RatingStar />
            </ul>
            {/*-------------------X--------------------*/}

            {/*-----------price of product-------------*/}
            <div className={styles.price}>
              {product.oldPrice !== null ? (
                <span>{product.oldPrice} JD</span>
              ) : null}{" "}
              {product.price} JD
            </div>
            {/*------------------X---------------------*/}

            {/*-------------add button-----------------*/}
            <button onClick={AddToCart} className={styles.addToCart}>
              {AddToCartBtnLanguage}{" "}
              <FaCartPlus
                style={{ fontSize: "1.1rem", margin: "0 0 0.2rem 0" }}
              />
            </button>
            {/*------------------X---------------------*/}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestCardProduct;
