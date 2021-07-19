import Link from "next/link";
import styles from '@/styles/ProductItem.module.css';
import RatingStar from "./RatingStar";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import useFavouriteProducts from "@/Hooks/useFavouriteProducts";
// import Card from "./PhotoIndexShow";

function ProductsItem({product}) {
    const [isHeartClicked, handleHeartClicked] = useFavouriteProducts(false);
    return (
        <>
        { /*--------- box-slider ----------*/}
        <div className={styles.box}>
            {/* -------- image-box ---------- */}
            <div className={styles.slideImg}>
                <img src={product.images[0].url} alt="..." />
                {/* ------ overlayer ------- */}
                <div className={styles.overlay}>
                {/* ------- buy-button ----- */}
                <Link href={`/products/${product.slug}`}>
                    <a className="buyBtn">Qiuckview</a>
                </Link>
                </div>
            </div>
            {/* --------- detail-box -------- */}
            <div className={styles.detailBox}>
                {/* ----- name/type-product ---- */}
                <div className={styles.type}>
                    <Link href={`/products/${product.slug}`}>
                        <a>{product.name}</a>
                    </Link>
                    <RatingStar />
                </div>
                {/* ------ price-product ----- */}
                <p href="#" className={styles.price}>{product.price} JD</p>
                {isHeartClicked === false ? 
                    (<AiOutlineHeart className={styles.heart} onClick={handleHeartClicked} />) : (
                    <AiFillHeart className={styles.fillHeart} onClick={handleHeartClicked} />
                )}
            </div>
        </div>
        {/* <div className={`card ${styles.cards}`} >
            <img src={product.image} alt="test" />
            <div className="card-body">
                <h6>{product.name}</h6>
                <p>{product.price} JOD</p>
            </div>
        </div> */}
        </>
    );
}

export default ProductsItem;
