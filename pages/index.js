import styles from "@/styles/Home.module.css";
import React, { useEffect, useState, useContext } from "react";
import { API_URL } from "@/config/index";
import { breakPoints } from "@/components/SliderProducts";
import { AiOutlineLine } from "react-icons/ai";
import { LanguageContext } from "@/context/LanguageContext";
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

const languageWords = {
  english: {
    ProductsViewLanguage: "Products Overview",
    ViewAllProductsLanguage: "View All Products",
    TitleOfferLanguage: "Limited Offers 50% OFF",
    TitleDealLanguage: "Seize the opportunity now",
    TextDescriptionLanguage:
      "Shopping with us to find the best European products, the best prices and special discounts :)",
    shopButtonLanguage: "Shop Now",
  },
  arabic: {
    ProductsViewLanguage: "نظرة عامة على المنتجات",
    ViewAllProductsLanguage: "مشاهدة جميع المنتجات",
    TitleOfferLanguage: "خصومات تصل إلى %50 ",
    TitleDealLanguage: "إغتنم الفرصة الآن",
    TextDescriptionLanguage:
      "تسوق معنا للعثور على أفضل المنتجات الأوروبية وأفضل الأسعار والخصومات المميزة",
    shopButtonLanguage: "تسوق الآن",
  },
};

export default function HomePage({ products }) {
  /*----------------------context language-------------------*/
  const { language } = useContext(LanguageContext);
  const {
    ProductsViewLanguage,
    ViewAllProductsLanguage,
    TitleOfferLanguage,
    TitleDealLanguage,
    TextDescriptionLanguage,
    shopButtonLanguage,
  } = languageWords[language];
  /*-----------------------------X---------------------------*/

  /*--------state to show alert cookie for one time----------*/
  const [showAlertCookie, setShowAlertCookie] = useState(false);
  useEffect(() => {
    window.onload = () => {
      setShowAlertCookie(true);
    };
  }, [showAlertCookie]);
  /*---------------------------X------------------------------*/

  return (
    <Layout title="Al Fayyad Store | Shop Online For Electronics, Tools, Gifts & More">
      {products.length === 0 && <h3>Sorry, No Products To Show Right Now!!</h3>}
      {showAlertCookie === true ? <CookieAlert /> : null}

      {/*-----------category photo------------*/}
      <CategoryPhotoMd />
      <CategoryPhotoSm />
      {/*-------------------X-----------------*/}

      {/*-----------slider products-----------*/}
      <h1 className={styles.textOverview}>
        {ProductsViewLanguage}
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
          <a className={styles.btnProductsList}> {ViewAllProductsLanguage} </a>
        </Link>
      </div>
      {/*-------------------X-----------------*/}

      {/*------photo properties our shope-----*/}
      <PropertiesOurShop />
      {/*-------------------X-----------------*/}

      {/*-------------fixed photo-------------*/}
      <div className={styles.fixedImage}>
        <div className={styles.containerBoxOffer}>
          <p className={styles.limitedOfferText}> {TitleOfferLanguage} </p>
          <h2> {TitleDealLanguage} </h2>
          <p>{TextDescriptionLanguage}</p>
          <Link href="/products/products-list" passHref={true}>
            <button className={styles.btnShope}> {shopButtonLanguage} </button>
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
