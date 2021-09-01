import styles from "@/styles/CategoryPhoto-md.module.css";
import Paper from "@material-ui/core/Paper";
import Link from "next/link";

function CategoryPhotoSm() {
  return (
    <div className={styles.container}>
      <Link href="/category/tools" passHref={true}>
        {/*---------Photo Tools----------*/}
        <Paper className={`${styles.paperTools}`}>
          <p className={styles.paperText}>
            Tools & Equipment <span>Find out</span>
          </p>
          <a className={styles.linkShope}>Shop Now</a>
        </Paper>
        {/*--------------X----------------*/}
      </Link>
      <Link href="/category/houseware" passHref={true}>
        {/*---------Photo Housecare-------*/}
        <Paper className={`${styles.paperHouse}`}>
          <p className={styles.paperText}>
            Houseware <span>Find out</span>
          </p>
          <a href="#" className={styles.linkShope}>
            Shop Now
          </a>
        </Paper>
        {/*----------------X--------------*/}
      </Link>
    </div>
  );
}

export default CategoryPhotoSm;
