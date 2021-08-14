import styles from "@/styles/ProductItem.module.css";
import RatingStar from "./RatingStar";
import { useContext } from "react";
import Link from "next/link";
import { AiFillHeart } from "react-icons/ai";
import { CartContext } from "@/context/CartContext";
import swal from "sweetalert";

function TestCardProduct({ product }) {
  /* -----------Cart Shopping context----------------- */
  const { addToCart } = useContext(CartContext);
  /* -----------------------X------------------------- */

  const AddToCart = async () => {
    await addToCart(product);
    swal("Awesome 😉", "This product has been added to your cart", "success");
  };

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
              <button className={styles.buttonHeartFill}>
                <AiFillHeart className={styles.fillHeart} />
              </button>
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
            <button onClick={AddToCart} className={styles.addToCart}>
              add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestCardProduct;
