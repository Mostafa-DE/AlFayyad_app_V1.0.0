import styles from "@/styles/Home.module.css";
import React from "react";
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

function HomePage({ products }) {
  return (
    <Layout title="AL Fayyad Store">
      {products.length === 0 && <h3>Sorry, No Products To Show Right Now!!</h3>}

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
        <Link href="/products/productsList">
          <a className={styles.btnProductsList}>View All Products</a>
        </Link>
      </div>
      {/*-------------------X-----------------*/}

      {/*------photo properties our shope-----*/}
      <PropertiesOurShop />
      {/*-------------------X-----------------*/}

      {/*-------------fixed photo-------------*/}
      <div className={styles.fixedImage} />
      {/*-------------------X-----------------*/}

      {/*------------Subscripe Form-----------*/}
      <SubscripeForm />
      {/*-------------------X-----------------*/}

      {/*--------------logo brand-------------*/}
      <div className={styles.brandContainer}>
        <div>
          <img src="/images/brand/ozitoLogo.png" width={250} height={80} />
        </div>
        <div className={styles.duroImg}>
          <img src="/images/brand/duroLogo.png" width={190} height={100} />
        </div>
        <div>
          <img src="/images/brand/lupiluLogo.png" width={300} height={200} />
        </div>
        <div className={styles.bergnerImg}>
          <img
            className="img-fluid"
            src="/images/brand/bergnerLogo.png"
            width={420}
            height={85}
          />
        </div>
      </div>
      {/*-------------------X-----------------*/}
    </Layout>
  );
}

export default HomePage;

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
