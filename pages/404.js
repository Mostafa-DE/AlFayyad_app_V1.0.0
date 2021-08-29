import styles from "@/styles/404.module.css";
import Link from "next/link";
import Head from "next/head";

export default function PageNotFound() {
  return (
    <>
      <Head>
        <title> 404 Page Not Found | Al Fayyad Store </title>
      </Head>
      <div className={styles.error}>
        <div className={styles.containerTextNotFound}>
          {/*--------------image error 404-----------*/}
          <img
            className="img-fluid"
            width={500}
            height={500}
            src="/images/fayyad/404.jpg"
            alt="not found image"
          />
          {/*---------------------X------------------*/}

          <h2>oops, we can't find that page!!</h2>
          <h5>Either something went wrong Or page doesn't exist anymore</h5>

          {/*--------------button go back------------*/}
          <Link href="/" passHref={true}>
            <button className={styles.backBtn}>Go Back Home</button>
          </Link>
          {/*---------------------X------------------*/}
        </div>
      </div>
    </>
  );
}
