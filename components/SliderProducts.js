import React, { useContext } from "react";
import Link from "next/link";
import styles from "@/styles/SliderProducts.module.css";
import RatingStar from "@/components/RatingStar";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import useFavouriteProducts from "@/Hooks/useFavouriteProducts";
import { CartContext } from "@/context/CartContext";
import { WishContext } from "@/context/WishContext";

export const breakPoints = [
  { width: 500, itemsToShow: 1 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 },
  { width: 1500, itemsToShow: 4 },
];

function SliderProducts({ product }) {
  const [isHeartClicked, handleHeartClicked] = useFavouriteProducts(false);
  /* -----------Cart Shopping context----------------- */
  const { addToCart } = useContext(CartContext);
  /* -----------------------X------------------------- */

  /* -----------Wish List context----------------- */
  const { addToWishList, removeFromWishList } = useContext(WishContext);
  /* -----------------------X------------------------- */

  return (
    /*--------- box-slider ----------*/
    <div className={styles.box}>
      {/* -------- image-box ---------- */}
      <div className={styles.slideImg}>
        <img className="img-fluid" src={product.images[0].url} alt="..." />
        {/* ------ overlayer ------- */}
        <div className={styles.overlay}>
          {/* ------- buy-button ----- */}
          <Link href={`/products/${product.slug}`}>
            <a className="buyBtn">Qiuckview</a>
          </Link>
        </div>
      </div>
      {/* --------- detail-box -------- */}
      <div className={styles.detailBox}>
        {/* ----- name/type-product ---- */}
        <div className={styles.type}>
          <Link href={`/products/${product.slug}`}>
            <a>{product.name}</a>
          </Link>
          <RatingStar />
        </div>
        {/* ------ price-product ----- */}
        <p href="#" className={styles.price}>
          {product.price} JD
        </p>
        {isHeartClicked === false ? (
          <button
            className={styles.buttonHeart}
            onClick={() => addToWishList(product)}
          >
            <AiOutlineHeart
              className={styles.heart}
              onClick={handleHeartClicked}
            />
          </button>
        ) : (
          <button
            className={styles.buttonHeartFill}
            onClick={() => removeFromWishList(product)}
          >
            <AiFillHeart
              className={styles.fillHeart}
              onClick={handleHeartClicked}
            />
          </button>
        )}
      </div>
      <button
        onClick={() => addToCart(product)}
        className={styles.addToCardBtn}
      >
        Add To Cart
      </button>
    </div>
  );
}

export default SliderProducts;
