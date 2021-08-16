import styles from "@/styles/SliderProducts.module.css";
import React from "react";
import { useContext } from "react";
import { AiFillHeart } from "react-icons/ai";
import { CartContext } from "@/context/CartContext";
import RatingStar from "./RatingStar";
import Link from "next/link";
import swal from "sweetalert";

/*----------break point for responsive slider----------*/
export const breakPoints = [
  { width: 500, itemsToShow: 1 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 },
  { width: 1500, itemsToShow: 4 },
];
/*-------------------------X---------------------------*/

function SliderProducts({ product }) {
  /* -----------Cart Shopping context----------------- */
  const { addToCart } = useContext(CartContext);
  /* -----------------------X------------------------- */

  /*----------alert when add product to cart-----------*/
  const AddToCart = async () => {
    await addToCart(product);
    swal("Awesome 😉", "This product has been added to your cart", "success");
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
              <img className={styles.pic1} src={product.images[0].url} />
            </a>
            {/*----------------------X----------------------------*/}

            {/*----------------discount price---------------------*/}
            {product.discount !== null ? (
              <span className={styles.productDiscountLabel}>
                {product.discount}
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
                <a className={styles.QuickViewBtn}>Qiuckview</a>
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
              add to cart
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
