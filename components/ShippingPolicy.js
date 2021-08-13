import styles from "@/styles/ShippingPolicy.module.css";

function ShippingPolicy() {
  return (
    <>
      <h1 className={styles.h1Text}>Shipping policy</h1>
      <div
        className={` text-start container ${styles.containerAllShippingPolicy} `}
      >
        <h5>Shipping policy</h5>
        <p className="text-md-start">
          All orders are processed during business days (excluding weekends and
          holidays) after receiving your order confirmation email.
        </p>
        <p className="text-md-start">
          Deliveries are made between Saturday and Thursday.
        </p>
        <h5>Domestic Shipping Rates and Estimates</h5>
        <p className="text-md-start">
          Shipping charges for your order will be calculated and displayed at
          checkout.
        </p>
        <p className="text-md-start">
          Delivery fees will be added automatically (2.50 JD) Inside Amman,
          (3.50 JD) Outside Amman for any order.
        </p>
        <h5>Local delivery</h5>
        <p className="text-md-start">
          Deliveries are made within 24 hours if the order is placed before 4pm,
          and within 48 hours delivery if the order is placed after 4pm. We will
          contact you with the phone number you provided at checkout to notify
          you on the day & time of our arrival.
        </p>
        <h5>International Shipping</h5>
        <p className="text-md-start">
          Sorry 😔, but we don't ship internationally at the time being.
        </p>
      </div>
    </>
  );
}

export default ShippingPolicy;
