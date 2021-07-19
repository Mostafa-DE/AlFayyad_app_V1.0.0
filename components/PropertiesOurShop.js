
import styles from "@/styles/PropertiesOurShop.module.css";

function PropertiesOurShop() {
    return (
        
    <div className={styles.container}>
      <div className={styles.PropertiesBox}>
          <i className={`fas fa-truck ${styles.icon} `} ></i>
          <h3>Fast Delivery</h3>
          <p>
            Delivery within 24 hours, inside Amman.
            Delivery in less than 48 hours, outside Amman.
          </p>
      </div>
      <div className={styles.PropertiesBox}>
          <i className={`fas fa-hand-holding-usd ${styles.icon}`} ></i>
          <h3>Paiement when recieving</h3>
          <p>
            Pay the bill after verifying that your order is correct!!
          </p>
      </div>
      <div className={styles.PropertiesBox}>
          <i className={`fas fa-money-bill-alt ${styles.icon}`}></i>
          <h3>Lower Prices</h3>
          <p>
            We strive to provide you with the lowest prices and the best European products!!
          </p>
      </div>
    </div>
    
    );
}

export default PropertiesOurShop;