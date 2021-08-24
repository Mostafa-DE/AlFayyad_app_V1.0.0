import styles from "@/styles/CategoryPhoto-sm.module.css";
import Paper from "@material-ui/core/Paper";
import Link from "next/link";

function CategoryPhotoSm() {
  return (
    <div className={styles.container}>
      <Link href="/products/products-list" passHref={true}>
        {/*-------------------Photo Kids-----------------*/}
        <Paper className={`${styles.paper1}`}>
          <p className={styles.paperText}>
            Kids Accessories <span>Find out</span>
          </p>
          <a className={styles.linkShope}>Shope Now</a>
        </Paper>
        {/*------------------------X----------------------*/}
      </Link>
      <Link href="/products/products-list" passHref={true}>
        {/*----------------Photo Personal care------------*/}
        <Paper className={`${styles.paper2}`}>
          <p className={styles.paperText}>
            {" "}
            Personal Care <span>Find out</span>
          </p>
          <a href="#" className={styles.linkShope}>
            Shope Now
          </a>
        </Paper>
        {/*------------------------X----------------------*/}
      </Link>
      <Link href="/products/products-list" passHref={true}>
        {/*---------------Photo Kitchenware---------------*/}
        <Paper className={`${styles.paper3}`}>
          <p className={styles.paperText}>
            Kitchenware<span>Find out</span>
          </p>
          <a href="#" className={styles.linkShope}>
            Shope Now
          </a>
        </Paper>
        {/*-----------------------X-----------------------*/}
      </Link>
    </div>
  );
}

export default CategoryPhotoSm;
