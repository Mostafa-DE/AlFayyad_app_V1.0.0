import Paper from "@material-ui/core/Paper";
import Link from "next/link";
import styles from "@/styles/CategoryPhoto-md.module.css";

function CategoryPhotoSm() {
  return (
    <div className={styles.container}>
      <Link href="/products/productsList">
        <Paper className={`${styles.paperTools}`}>
          <p className={styles.paperText}>
            Kids Accessories <span>Find out</span>
          </p>
          <a className={styles.linkShope}>Shope Now</a>
        </Paper>
      </Link>
      <Link href="/products/productsList">
        <Paper className={`${styles.paperHouse}`}>
          <p className={styles.paperText}>
            Personal Care <span>Find out</span>
          </p>
          <a href="#" className={styles.linkShope}>
            Shope Now
          </a>
        </Paper>
      </Link>
    </div>
  );
}

export default CategoryPhotoSm;
