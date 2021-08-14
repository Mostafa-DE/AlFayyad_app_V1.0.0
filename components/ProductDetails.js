import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import styles from "@/styles/ProductDetails.module.css";
import Link from "next/link";
import swal from "sweetalert";

function TestProductDetails({ product }) {
  /* -----------Cart Shopping context----------------- */
  const { addToCart } = useContext(CartContext);
  /* -----------------------X------------------------- */

  const AddToCart = async () => {
    await addToCart(product);
    swal("Awesome 😉", "This product has been added to your cart", "success");
  };

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
          <div className={styles.containerBtn}>
            <button onClick={AddToCart} className={styles.addToCart}>
              Add to cart
            </button>
            <Link href="/products/productsList">
              <a className={styles.linkProducts}>Return To Products List</a>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default TestProductDetails;
