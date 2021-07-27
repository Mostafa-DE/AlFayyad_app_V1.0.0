import styles from "@/styles/ProductItem.module.css";
import RatingStar from "./RatingStar";
import { AiOutlineHeart } from "react-icons/ai";
import { useContext } from "react";
import Link from "next/link";
import { AiFillHeart } from "react-icons/ai";
import useFavouriteProducts from "@/Hooks/useFavouriteProducts";
import { CartContext } from "@/context/CartContext";
import { WishContext } from "@/context/WishContext";
function TestCardProduct({ product }) {
  const [isHeartClicked, handleHeartClicked] = useFavouriteProducts(false);
  /* -----------Cart Shopping context----------------- */
  const { addToCart } = useContext(CartContext);
  /* -----------------------X------------------------- */
  /* -----------Wish List context----------------- */
  const { addToWishList, removeFromWishList } = useContext(WishContext);
  /* -----------------------X------------------------- */
  return (
    <div className="row">
      <div className="col-md-3 col-sm-6 mt-4">
        <div className={styles.productGrid}>
          <div className={styles.productImage}>
            <a className={styles.image}>
              <img className={styles.pic1} src={product.images[0].url} />
            </a>
            {product.discount !== null ? (
              <span className={styles.productDiscountLabel}>
                {product.discount}
              </span>
            ) : null}

            <span className={styles.productWishListLabel}>
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
            </span>
            <ul className={styles.productLinks}>
              <Link href={`/products/${product.slug}`}>
                <a className={styles.QuickViewBtn}>Qiuckview</a>
              </Link>
            </ul>
          </div>
          <div className={styles.productContent}>
            <h3 className={styles.title}>
              <a>{product.name}</a>
            </h3>
            <ul className={styles.rating}>
              <RatingStar />
            </ul>
            <div className={styles.price}>
              {product.oldPrice !== null ? (
                <span>{product.oldPrice} JD</span>
              ) : null}{" "}
              {product.price} JD
            </div>
            <button
              onClick={() => {
                addToCart(product);
              }}
              className={styles.addToCart}
            >
              add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestCardProduct;
