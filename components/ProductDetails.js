import styles from "@/styles/ProductDetails.module.css";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import Link from "next/link";
import swal from "sweetalert";

function TestProductDetails({ product }) {
  /* -----------Cart Shopping context----------------- */
  const { addToCart } = useContext(CartContext);
  /* -----------------------X------------------------- */
  console.log(product);
  /*-----------alert when add product in cart----------*/
  const AddToCart = async () => {
    await addToCart(product);
    swal("Awesome 😉", "This product has been added to your cart", "success");
  };
  /*------------------------X--------------------------*/
  // console.log(product);
  return (
    <div className={`container ${styles.container}`}>
      <div className={`${styles.mainBody}`}>
        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <div className={`${styles.card} card`} style={{ border: "none" }}>
              <div className={`card-body ${styles.cardBody}`}>
                {/*--------------image crousel----------------*/}
                <div className="d-flex flex-column align-items-center text-center">
                  <div
                    id="carouselExampleIndicators"
                    className="carousel carousel-fade slide"
                    data-bs-ride="carousel"
                    style={{ width: "100%" }}
                  >
                    <div className="carousel-inner">
                      {/*-------------Main Photo---------------*/}
                      <div className="carousel-item active">
                        <img
                          src={product.images[0].url}
                          className="d-block w-100"
                          width={540}
                          height={480}
                          alt="..."
                        />
                      </div>
                      {/*--------------------X--------------------*/}

                      {/*---------------Second Photo--------------*/}
                      {product.images[1] ? (
                        <div className="carousel-item">
                          <img
                            src={product.images[1].url}
                            className="d-block w-100"
                            width={540}
                            height={480}
                            alt="..."
                          />
                        </div>
                      ) : null}
                      {/*--------------------X--------------------*/}

                      {/*--------------third Photo----------------*/}
                      {product.images[2] ? (
                        <div className="carousel-item">
                          <img
                            src={product.images[2].url}
                            className="d-block w-100"
                            width={540}
                            height={480}
                            alt="..."
                          />
                        </div>
                      ) : null}
                      {/*--------------------X--------------------*/}

                      {/*--------------fourth Photo----------------*/}
                      {product.images[3] ? (
                        <div className="carousel-item">
                          <img
                            src={product.images[3].url}
                            className="d-block w-100"
                            width={540}
                            height={480}
                            alt="..."
                          />
                        </div>
                      ) : null}
                      {/*--------------------X--------------------*/}

                      {/*--------------fourth Photo----------------*/}
                      {product.images[4] ? (
                        <div className="carousel-item">
                          <img
                            src={product.images[3].url}
                            className="d-block w-100"
                            width={540}
                            height={480}
                            alt="..."
                          />
                        </div>
                      ) : null}
                      {/*--------------------X--------------------*/}

                      {/*--------------------X--------------------*/}
                    </div>

                    {/*-------------button left arrow---------------*/}
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    {/*----------------------X----------------------*/}

                    {/*-------------button right arrow--------------*/}
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                    {/*----------------------X----------------------*/}
                  </div>
                </div>
                {/*--------------------X----------------------*/}
              </div>
            </div>
          </div>

          {/*---second box show details of user that currently logged in---*/}
          <div className="col-md-8">
            <div
              className={`card mb-3 ${styles.card}`}
              style={{ border: "none" }}
            >
              <div className="card-body">
                <div className={styles.rightColumn}>
                  <div className={styles.navTitle}>
                    <h4>Product Details</h4>
                    <i className={`fas fa-heart ${styles.heartIcon} `}></i>
                  </div>

                  {/*--------------Product Description---------------*/}
                  <div className={styles.productDescription}>
                    <h1>{product.name}</h1>
                    <span> Description </span>
                    <p className="text-break">{product.description}</p>
                    {product.dimension ? (
                      <>
                        <span> Dimensions </span>
                        <p className="text-break">{product.dimension}</p>
                      </>
                    ) : null}
                    {product.weight ? (
                      <>
                        <span> Weight </span>
                        <p className="text-break">{product.weight}</p>
                      </>
                    ) : null}
                    <span> Additional Informations </span>
                    <p className="text-break">{product.additionalInfo}</p>
                  </div>
                  {/*----------------------X-------------------------*/}

                  {/*----------------Product Pricing-----------------*/}
                  <div className={styles.containerBtn}>
                    <button onClick={AddToCart} className={styles.addToCart}>
                      Add to cart
                    </button>
                    <Link href="/products/productsList">
                      <a className={styles.linkProducts}>
                        Return To Products List
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*-----------------------------X-------------------------------*/}
        </div>
      </div>
    </div>
  );
}

export default TestProductDetails;
