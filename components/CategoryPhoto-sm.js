
import Paper from '@material-ui/core/Paper';
import Link from 'next/link';
import styles from '@/styles/CategoryPhoto-sm.module.css';

function CategoryPhotoSm() {
    return (
        <div className={styles.container}>
            <Link href="/products/productsList">
                <Paper className={`${styles.paper1}`}>
                    <p className={styles.paperText}>Kids Accessories <span>Find out</span></p>
                    <a className={styles.linkShope}>Shope Now</a>
                </Paper>
            </Link>
            <Link href="/products/productsList">
                <Paper className={`${styles.paper2}`}>
                    <p className={styles.paperText}> Personal Care <span>Find out</span></p>
                    <a href="#" className={styles.linkShope}>Shope Now</a>
                </Paper>
            </Link>
            <Link href="/products/productsList">
                <Paper className={`${styles.paper3}`}>
                    <p className={styles.paperText}>Kitchenware<span>Find out</span></p>
                    <a href="#" className={styles.linkShope}>Shope Now</a>
                </Paper>
            </Link>
            {/* <Link href="/contact">
                <Paper className={`${styles.paper4}`}>
                    <p className={styles.paperText}>Test & more <span>Find out</span></p>
                    <a href="#" className={styles.linkShope}>Shope Now</a>
                </Paper>
            </Link> */}
        </div>
    )
}

export default CategoryPhotoSm;
