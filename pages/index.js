import Layout from '@/components/Layout';
import React from 'react';
import { API_URL } from '@/config/index';
import PropertiesOurShop from '@/components/PropertiesOurShop';
import CategoryPhotoMd from '@/components/CategoryPhoto-md';
import CategoryPhotoSm from '@/components/CategoryPhoto-sm';
import styles from '@/styles/Home.module.css';
import SliderProducts from '@/components/SliderProducts';
import Carousel from 'react-elastic-carousel';
import { breakPoints } from '@/components/SliderProducts';
import { AiOutlineLine } from "react-icons/ai"
import Link from 'next/link';
import SubscripeForm from '@/components/SubscripeForm';


function HomePage({products}) {
  return (
    <Layout title="AL_Fayyad Store">
      {products.length === 0 && <h3>Sorry, No Products To Show Right Now!!</h3>}
      <CategoryPhotoMd />
      <CategoryPhotoSm />
      <h1 
        className={styles.textOverview}
      >
        Store Overview <span> <AiOutlineLine /> </span>
      </h1>
      <div className={styles.container}>
      </div>
      <div className={styles.carousel}>
      <Carousel
        enableAutoPlay
        autoPlaySpeed={5000}
        breakPoints={breakPoints}
        className="carousel"
      >
      {products.map( product => (
        <SliderProducts key={product.id} product={product} />
      ))}
      </Carousel>
      </div>
      <div className={styles.divBtn}>
        <Link href="/products/productsList">
          <a className={styles.btnProductsList}>View All Products</a>
        </Link>
      </div>
      <PropertiesOurShop />
      <div className={styles.fixedImage} />
      <SubscripeForm />
      




    </Layout>
  )
}

export default HomePage;


export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/products`);
  const products = await res.json();
  return {
      props:{
        products
      } 
  }
}
