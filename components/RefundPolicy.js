import styles from "@/styles/RefundPolicy.module.css";

function RefundPolicy() {
  return (
    <>
      <h1 className={styles.h1Text}>Refund policy</h1>
      <div
        className={` text-start container ${styles.containerAllRefundPolicy} `}
      >
        <p className="text-md-start">
          ALFAYYAD For European Products does not offer Refunds, however
          customers have the right to exchange products provided the following:
        </p>
        <ul>
          <li>
            To exchange product must be from the original buyer and confirmed
            through the order email.
          </li>
          <li>
            The product must be sealed and kept in its original condition.
          </li>
          <li>
            The product can be exchanged within 7 days from the date of
            purchase.
          </li>
          <li>
            The product can be exchanged with another product of the same or
            higher value in which case the difference should be settled.
          </li>
          <li>
            The standard warranty on items, excluding accessories, is 6 months.
          </li>
          <li>Exchanged item usually take up to 3 business days.</li>
        </ul>
      </div>
    </>
  );
}

export default RefundPolicy;
