import styles from "@/styles/ShowPhoto.module.css";
import Link from "next/link";

function ShowPhoto() {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel carousel-fade slide"
      data-bs-ride="carousel"
    >
      {/*---control in crousol photo ( number of slides (bootstrap) )---*/}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>
      {/*------------------------------X--------------------------------*/}

      <div className="carousel-inner">
        {/*-------------Welcome Photo---------------*/}
        <div className="carousel-item active">
          <img
            src="./images/fayyad/women.jpg"
            className="d-block w-100"
            width={150}
            height={800}
            alt="..."
          />
          <div className="carousel-caption">
            <p className={styles.sale10}>Welcome To Our Shope</p>
          </div>
          <div className="carousel-caption">
            <p className={styles.watingFor}>New Arrivals</p>
          </div>
          <div className="carousel-caption">
            <Link href="/products/productsList" passHref={true}>
              <button className={styles.btnShopeNow}>Shope Now</button>
            </Link>
          </div>
        </div>
        {/*--------------------X--------------------*/}

        {/*---------new collections Photo-----------*/}
        <div className="carousel-item">
          <img
            src="./images/fayyad/man model.jpg"
            className="d-block w-100"
            width={150}
            height={800}
            alt="..."
          />
          <div className="carousel-caption">
            <p className={styles.manModel}>New Collections</p>
          </div>
          <div className="carousel-caption">
            <p className={styles.arrivalsTextModel}>More than you think</p>
          </div>
          <div className="carousel-caption">
            <Link href="/products/productsList" passHref={true}>
              <button className={styles.btnShopeNowManModel}>Find Out</button>
            </Link>
          </div>
        </div>
        {/*--------------------X--------------------*/}

        {/*---------kids accessories Photo----------*/}
        <div className="carousel-item">
          <img
            src="./images/fayyad/baby2.jpg"
            className="d-block w-100"
            width={100}
            height={800}
            alt="..."
          />
          <div className="carousel-caption">
            <p className={styles.kidsAccessories}>Kids Accessories</p>
          </div>
          <div className="carousel-caption">
            <p className={styles.childNeeds}>Everything your child needs</p>
          </div>
          <div className="carousel-caption">
            <Link href="/products/productsList" passHref={true}>
              <button className={styles.btnShopeNow}>Find Out</button>
            </Link>
          </div>
        </div>
        {/*--------------------X--------------------*/}

        {/*--------------tools Photo----------------*/}
        <div className="carousel-item">
          <img
            src="./images/fayyad/tools_new.jpg"
            className="d-block w-100"
            width={100}
            height={800}
            alt="..."
          />
          <div className="carousel-caption">
            <p className={styles.tools}>Manual & electrical tools</p>
          </div>
          <div className="carousel-caption">
            <p className={styles.everythingYouNeed}>Everything you need</p>
          </div>
          <div className="carousel-caption">
            <Link href="/products/productsList" passHref={true}>
              <button className={styles.btnShopeNow}>Find Out</button>
            </Link>
          </div>
        </div>
        {/*--------------------X--------------------*/}
      </div>

      {/*-------------button left arrow---------------*/}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
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
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      {/*----------------------X----------------------*/}
    </div>
  );
}

export default ShowPhoto;
