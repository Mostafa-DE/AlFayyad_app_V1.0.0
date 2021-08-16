import styles from "@/styles/ProductDetails.module.css";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import Link from "next/link";
import swal from "sweetalert";

function TestProductDetails({ product }) {
  /* -----------Cart Shopping context----------------- */
  const { addToCart } = useContext(CartContext);
  /* -----------------------X------------------------- */

  /*-----------alert when add product in cart----------*/
  const AddToCart = async () => {
    await addToCart(product);
    swal("Awesome 😉", "This product has been added to your cart", "success");
  };
  /*------------------------X--------------------------*/

  return (
    <div className={styles.body}>
      <main className={styles.container}>
        {/*------------Left Column / product Image---------------*/}
        <div className={styles.leftColumn}>
          <img className={styles.image} src={product.images[0].url} alt="" />
        </div>
        {/*------------------------X-----------------------------*/}

        {/*-------------------Right Column-----------------------*/}
        <div className={styles.rightColumn}>
          <div className={styles.navTitle}>
            <h4>Product Details</h4>
            <i className={`fas fa-heart ${styles.heartIcon} `}></i>
          </div>

          {/*--------------Product Description---------------*/}
          <div className={styles.productDescription}>
            <h1>{product.name}</h1>
            <span>Description</span>
            <p>{product.description}</p>
            <span>Additional Information</span>
            <p>{product.additionalInfo}</p>
          </div>
          {/*----------------------X-------------------------*/}

          {/*----------------Product Pricing-----------------*/}
          <div className={styles.containerBtn}>
            <button onClick={AddToCart} className={styles.addToCart}>
              Add to cart
            </button>
            <Link href="/products/productsList">
              <a className={styles.linkProducts}>Return To Products List</a>
            </Link>
          </div>
          {/*----------------------X-------------------------*/}
        </div>
      </main>
    </div>
  );
}

export default TestProductDetails;
