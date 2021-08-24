import styles from "@/styles/Home.module.css";
import React, { useEffect, useState } from "react";
import { API_URL } from "@/config/index";
import { breakPoints } from "@/components/SliderProducts";
import { AiOutlineLine } from "react-icons/ai";
import Layout from "@/components/Layout";
import PropertiesOurShop from "@/components/PropertiesOurShop";
import CategoryPhotoMd from "@/components/CategoryPhoto-md";
import CategoryPhotoSm from "@/components/CategoryPhoto-sm";
import SliderProducts from "@/components/SliderProducts";
import Carousel from "react-elastic-carousel";
import Link from "next/link";
import SubscripeForm from "@/components/SubscripeForm";
import PhotoBrand from "@/components/PhotoBrand";
import CookieAlert from "@/components/CookieAlert";

export default function HomePage({ products }) {
  /*--------state to show alert cookie for one time----------*/
  const [showAlertCookie, setShowAlertCookie] = useState(false);
  useEffect(() => {
    window.onload = () => {
      setShowAlertCookie(true);
    };
  }, [showAlertCookie]);
  /*---------------------------X------------------------------*/

  return (
    <Layout title="AL Fayyad Store">
      {products.length === 0 && <h3>Sorry, No Products To Show Right Now!!</h3>}
      {showAlertCookie === true ? <CookieAlert /> : null}

      {/*-----------category photo------------*/}
      <CategoryPhotoMd />
      <CategoryPhotoSm />
      {/*-------------------X-----------------*/}

      {/*-----------slider products-----------*/}
      <h1 className={styles.textOverview}>
        Store Overview
        <span>
          <AiOutlineLine />
        </span>
      </h1>
      <div className={styles.container}></div>
      <div className={styles.carousel}>
        <Carousel
          enableAutoPlay
          autoPlaySpeed={5000}
          breakPoints={breakPoints}
          className="carousel"
        >
          {products.map((product) => (
            <SliderProducts key={product.id} product={product} />
          ))}
        </Carousel>
      </div>
      {/*-------------------X-----------------*/}

      {/*-------button view all product-------*/}
      <div className={styles.divBtn}>
        <Link href="/products/products-list" passHref={true}>
          <a className={styles.btnProductsList}>View All Products</a>
        </Link>
      </div>
      {/*-------------------X-----------------*/}

      {/*------photo properties our shope-----*/}
      <PropertiesOurShop />
      {/*-------------------X-----------------*/}

      {/*-------------fixed photo-------------*/}
      <div className={styles.fixedImage}>
        <div className={styles.containerBoxOffer}>
          <p className={styles.limitedOfferText}>Limited Offers 10% OFF</p>
          <h2>Week Deal</h2>
          <p>
            Shopping with us to find the best European products, the best prices
            and special discounts {" :) "}
          </p>
          <Link href="/products/products-list" passHref={true}>
            <button className={styles.btnShope}>Shope Now</button>
          </Link>
        </div>
      </div>
      {/*-------------------X-----------------*/}

      {/*------------Subscripe Form-----------*/}
      <SubscripeForm />
      {/*-------------------X-----------------*/}

      {/*------------Photos Brand-------------*/}
      <PhotoBrand />
      {/*-------------------X-----------------*/}
    </Layout>
  );
}

/*------------------get product from starpi--------------------*/
export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/products`);
  const products = await res.json();
  return {
    props: {
      products,
    },
  };
}
/*------------------------------X------------------------------*/
