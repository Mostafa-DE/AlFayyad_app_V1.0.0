import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import styles from "@/styles/ProductDetails.module.css";

function TestProductDetails({ product }) {
  /* -----------Cart Shopping context----------------- */
  const { addToCart } = useContext(CartContext);
  /* -----------------------X------------------------- */
  return (
    <div className={styles.body}>
      <main className={styles.container}>
        {/* <!-- Left Column / Headphones Image --> */}
        <div className={styles.leftColumn}>
          <img className={styles.image} src={product.images[0].url} alt="" />
        </div>

        {/* <!-- Right Column --> */}
        <div className={styles.rightColumn}>
          <div className={styles.navTitle}>
            <h4>Product Details</h4>
            <i
              className="fas fa-heart"
              style={{ fontSize: "24px", color: "#03c7ff" }}
            ></i>
          </div>

          {/* <!-- Product Description -->  */}
          <div className={styles.productDescription}>
            <h1>{product.name}</h1>
            <span>Description</span>
            <p>{product.description}</p>
            <span>Additional Information</span>
            <p>{product.additionalInfo}</p>
          </div>

          {/* <!-- Product Pricing --> */}
          <div className={styles.productPrice}>
            <span>{product.price} JD</span>
            <button
              onClick={() => addToCart(product)}
              className={styles.addToCart}
            >
              Add to cart
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default TestProductDetails;
