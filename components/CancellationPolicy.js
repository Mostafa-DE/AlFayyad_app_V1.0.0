import styles from "@/styles/CancellationPolicy.module.css";

function CancellationPolicy() {
  return (
    <>
      <h1 className={styles.h1Text}>Cancellation Policy</h1>
      <div
        className={` text-start container ${styles.containerAllCancellationPolicy} `}
      >
        <h5>Order Cancellation Policy</h5>
        <p className="text-md-start">
          Orders can be cancelled prior to delivery only. Once orders are out
          for delivery, cancellation is not allowed.
        </p>
        <h5>Delivery Policy:</h5>
        <ul>
          <li>
            Delivery will be within 24 hours, as long as order is received
            before 4pm.
          </li>
          <li>Orders received after 4pm will be delivered within 48 hours.</li>
          <li>
            Delivery fees will be added automatically (2.50 JD) Inside Amman,
            (3.50 JD) Outside Amman.
          </li>
        </ul>
      </div>
    </>
  );
}

export default CancellationPolicy;
