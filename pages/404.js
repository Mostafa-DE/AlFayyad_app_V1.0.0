import styles from "@/styles/404.module.css";
import Link from "next/link";

export default function PageNotFound() {
  return (
    <>
      <div className={styles.error}>
        <div className={styles.containerTextNotFound}>
          {/*--------------image error 404-----------*/}
          <img
            className="img-fluid"
            width={500}
            height={500}
            src="images/fayyad/404.jpg"
          />
          {/*---------------------X------------------*/}

          <h2>oops, we can't find that page!!</h2>
          <h5>Either something went wrong Or page doesn't exist anymore</h5>

          {/*--------------button go back------------*/}
          <Link href="/">
            <button className={styles.backBtn}>Go Back Home</button>
          </Link>
          {/*---------------------X------------------*/}
        </div>
      </div>
    </>
  );
}
