import styles from "@/styles/CategoryPhoto-md.module.css";
import Paper from "@material-ui/core/Paper";
import Link from "next/link";

function CategoryPhotoSm() {
  return (
    <div className={styles.container}>
      <Link href="/products/productsList" passHref={true}>
        {/*---------Photo Tools----------*/}
        <Paper className={`${styles.paperTools}`}>
          <p className={styles.paperText}>
            Tools & more <span>Find out</span>
          </p>
          <a className={styles.linkShope}>Shope Now</a>
        </Paper>
        {/*--------------X----------------*/}
      </Link>
      <Link href="/products/productsList" passHref={true}>
        {/*---------Photo Housecare-------*/}
        <Paper className={`${styles.paperHouse}`}>
          <p className={styles.paperText}>
            Housecare <span>Find out</span>
          </p>
          <a href="#" className={styles.linkShope}>
            Shope Now
          </a>
        </Paper>
        {/*----------------X--------------*/}
      </Link>
    </div>
  );
}

export default CategoryPhotoSm;
