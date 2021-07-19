import Link from 'next/link';
import styles from '@/styles/ShowPhoto.module.css';

function ShowPhoto() {
    return (
        <div id="carouselExampleIndicators" className="carousel carousel-fade slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="./images/test/women.jpg" className="d-block w-100" width={150} height={800} alt="..." />
                    <div className="carousel-caption" >
                        <p className={styles.sale10}>New Collections</p>
                    </div>
                    <div className="carousel-caption" >
                        <p className={styles.watingFor}>More than you think</p>
                    </div>
                    <div className="carousel-caption" >
                        <Link href="/products/productsList">
                            <button className={styles.btnShopeNow}>Shope Now</button>
                        </Link>
                    </div>
                </div>

                <div className="carousel-item">
                    <img src="./images/test/kitchen.jpg" className="d-block w-100" width={150} height={800} alt="..." />
                    <div className="carousel-caption" >
                        <p className={styles.welcomeText}>Welcome To Our Shop</p>
                    </div>
                    <div className="carousel-caption" >
                        <p className={styles.arrivalsText}>New Arrivals</p>
                    </div>
                    <div className="carousel-caption" >
                        <Link href="/products/productsList">
                            <button className={styles.btnShopeNow}>Shope Now</button>
                        </Link>
                    </div>
                </div>

                <div className="carousel-item">
                    <img src="./images/fayyad/baby2.jpg" className="d-block w-100" width={100} height={800} alt="..." />
                    <div className="carousel-caption" >
                        <p className={styles.kidsAccessories}>Kids Accessories</p>
                    </div>
                    <div className="carousel-caption" >
                        <p className={styles.childNeeds}>Everything your child needs</p>
                    </div>
                    <div className="carousel-caption" >
                        <Link href="/products/productsList">
                            <button className={styles.btnShopeNow}>Find Out</button>
                        </Link>
                    </div>
                </div>

                <div className="carousel-item">
                    <img src="./images/fayyad/tools.jpg" className="d-block w-100" width={100} height={800} alt="..." />
                    <div className="carousel-caption" >
                        <p className={styles.tools}>Manual & electrical tools</p>
                    </div>
                    <div className="carousel-caption" >
                        <p className={styles.everythingYouNeed}>Everything you need</p>
                    </div>
                    <div className="carousel-caption" >
                        <Link href="/products/productsList">
                            <button className={styles.btnShopeNow}>Find Out</button>
                        </Link>
                    </div>
                </div>

                <div className="carousel-item">
                    <img src="./images/fayyad/discount10.jpg" className="d-block w-100" width={100} height={800} alt="..." />
                    <div className="carousel-caption" >
                        <p className={styles.sale10}>GET 10% OFF</p>
                    </div>
                    <div className="carousel-caption" >
                        <p className={styles.watingFor}>what are you waiting for</p>
                    </div>
                    <div className="carousel-caption" >
                        <Link href="/products/productsList">
                            <button className={styles.btnShopeNow}>Shope Now</button>
                        </Link>
                    </div>
                </div>

            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    )
}

export default ShowPhoto;
