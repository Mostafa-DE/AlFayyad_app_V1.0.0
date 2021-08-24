import styles from "@/styles/PropertiesOurShop.module.css";
import { FaTruck } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { FaMoneyBillWave } from "react-icons/fa";

function PropertiesOurShop() {
  return (
    <div className={styles.container}>
      <div className={styles.PropertiesBox}>
        <FaTruck className={styles.icon} />
        <h3>Fast Delivery</h3>
        <p>
          Delivery within 24 hours, inside Amman. Delivery in less than 48
          hours, outside Amman.
        </p>
      </div>
      <div className={styles.PropertiesBox}>
        <GiReceiveMoney className={styles.icon} />
        <h3>Paiement when receiving</h3>
        <p>Pay the bill after verifying that your order is correct!!</p>
      </div>
      <div className={styles.PropertiesBox}>
        <FaMoneyBillWave className={styles.icon} />
        <h3>Lower Prices</h3>
        <p>
          We strive to provide you with the lowest prices and the best European
          products!!
        </p>
      </div>
    </div>
  );
}

export default PropertiesOurShop;
