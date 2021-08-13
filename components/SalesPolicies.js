import styles from "@/styles/SalesPolicies.module.css";

function SalesPolicies() {
  return (
    <>
      <h1 className={styles.h1Text}>Sales Policies</h1>
      <div
        className={` text-start container ${styles.containerAllSalesPolicies} `}
      >
        <h5>No Refunds/Exchange Only</h5>
        <p className="text-md-start">
          We accept returns on an exchange basis only. No refunds are allowed,
          with add delivery fees 2.50 JD inside amman, 3.50JD outside amman
          except if the product is defective and returned within 7 days of
          purchase
        </p>
        <p className="text-md-start">
          You can exchange unopened/sealed items in the original packaging
          within 7 days of your purchase. If more than 7 days have passed since
          your purchase, we cannot offer you an exchange.
        </p>
        <h5>Exchange requirements</h5>
        <p className="text-md-start">
          The following criteria must be met to qualify for a refund:
        </p>
        <ul>
          <li>Product is defective.</li>
          <li>Product must be unopened and kept in original packaging.</li>
          <li>Product must be unused.</li>
        </ul>
        <p className="text-md-start">
          In order to ensure the above criteria have been met, all returns will
          be thoroughly inspected. If the product does not meet the
          above-mentioned criteria, we reserve the right not to exchange the
          product.
        </p>
        <h5>No Returns or Exchanges</h5>
        <ul>
          <li>personal items</li>
          <li>Single-use products</li>
        </ul>
        <h5>Return process</h5>
        <p className="text-md-start">
          If wish to return a recently purchased product from AL FAYYAD, then
          you may contact us by phone or email so that we pick up the item and
          process the exchange.
        </p>
        <p className="text-md-start">
          The goods must be properly packaged so as to avoid damage during
          transit. If the product is found damaged or used beyond what it takes
          for us to reasonably inspect it, then we may reject a refund. Upon
          receipt of the returned item, we will fully examine it and notify you
          via email or phone whether you are entitled to a return.
        </p>
        <p className="text-md-start">
          Reminder!! You will be solely responsible for covering the shipping
          costs.
        </p>
        <p className="text-md-start">
          To follow up on the status of your return, please contact us at{" "}
          <a
            className={styles.link}
            href="https://mail.google.com/mail/?view=cm&source=mailto&to=fayyadm524@gmail.com"
          >
            fayyadm524@gmail.com
          </a>{" "}
          or call us at{" "}
          <a className={styles.link} href="tel:0787731525">
            0787731525
          </a>
        </p>
      </div>
    </>
  );
}

export default SalesPolicies;
