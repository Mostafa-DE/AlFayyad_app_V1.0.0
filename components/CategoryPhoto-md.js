import Paper from '@material-ui/core/Paper';
import styles from '@/styles/CategoryPhoto-md.module.css';
import Link from 'next/link';

function CategoryPhotoMd({}) {

    return (
        <div className={styles.container}>
            <Link href="/products/productsList">
                <Paper className={styles.paper}>
                    <p className={styles.paperText}>Tools & more <span>New Collections</span></p>
                    <a href="#" className={styles.linkShope}>Shope Now</a>
                </Paper>
            </Link>
            <Link href="/products/productsList">
                <Paper className={styles.paperHouse}>
                    <p className={styles.paperText}>Houseware<span>New Collections</span></p>
                    <a href="#" className={styles.linkShope}>Shope Now</a>
                </Paper>
            </Link>
        </div>
    )
}

export default CategoryPhotoMd;



