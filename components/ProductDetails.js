import styles from "@/styles/ProductDetails.module.css";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import Link from "next/link";
import swal from "sweetalert";
import { HiShoppingCart } from "react-icons/hi";

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
    <section className={` ${styles.container} `}>
      <div className="row">
        <div className="col-md-6 mb-4 mb-md-0">
          <div id="mdb-lightbox-ui"></div>

          <div className="">
            <div className="row product-gallery mx-1">
              <div className="col-12 mb-0">
                <h1 className={styles.nameProduct}>{product.name}</h1>
                <figure className="view overlay rounded z-depth-1 main-img">
                  {/*--------------image crousel----------------*/}
                  <div className="d-flex flex-column ">
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
                            height={550}
                            width={550}
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
                              height={550}
                              width={550}
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
                              height={550}
                              width={550}
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
                              height={550}
                              width={550}
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
                              height={550}
                              width={550}
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
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4 className={styles.descriptionText}>Description</h4>
          <p className="">{product.description}</p>
          <div className="table-responsive" style={{ margin: "0 0 1.5rem 0" }}>
            <table className="table table-sm table-borderless mb-0">
              <tbody>
                {product.dimension ? (
                  <tr>
                    <th className="pl-0 w-25" scope="row">
                      <strong>Dimensions</strong>
                    </th>
                    <td>{product.dimension}</td>
                  </tr>
                ) : null}

                {product.weight ? (
                  <tr>
                    <th className="pl-0 w-25" scope="row">
                      <strong>Weight</strong>
                    </th>
                    <td>{product.weight}</td>
                  </tr>
                ) : null}
              </tbody>
            </table>
          </div>
          {product.additionalInfo ? (
            <div className="table-responsive mb-2">
              <div>
                <h4 className={styles.additionalInfoText}>
                  Additional Informations
                </h4>
              </div>
              <p className="pt-1">{product.additionalInfo}</p>
            </div>
          ) : null}

          <div className={styles.containerBtn}>
            <button onClick={AddToCart} className={styles.addToCart}>
              Add to cart <HiShoppingCart className={styles.cartIcon} />
            </button>
            <Link href="/products/products-list">
              <a className={styles.linkProducts}>Return To Products List</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestProductDetails;
