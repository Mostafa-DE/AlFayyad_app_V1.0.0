import styles from "@/styles/PaymentMethodOptions.module.css";
import { AiOutlineLine } from "react-icons/ai";
import Link from "next/link";

function PaymentMethodOptions() {
  return (
    <div className={styles.main}>
      <h1 className={styles.h1Text}>
        Please choose one of the following payment methods
        <span>
          <AiOutlineLine />
        </span>
      </h1>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <h4>Pay Through</h4>
        <h4>Cash Payment</h4>
      </div>
      <div className={styles.container}>
        <div className={styles.uWalletContainerImg}>
          <img
            className={`img-fluid ${styles.uWalletImg}`}
            src="/images/fayyad/uWallet.bmp"
          />
        </div>
        <div className={styles.ContainerCash}>
          <Link href="/payment/order">
            <img
              className={`img-fluid ${styles.cashImg}`}
              src="/images/fayyad/cash.jpg"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PaymentMethodOptions;
