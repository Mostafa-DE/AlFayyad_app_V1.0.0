import styles from "@/styles/PropertiesOurShop.module.css";
import { FaTruck } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { FaMoneyBillWave } from "react-icons/fa";
import { LanguageContext } from "@/context/LanguageContext";
import { useContext } from "react";
import { useInView } from "react-intersection-observer";

const languageWords = {
  english: {
    deliveryLanguage: "Fast Delivery",
    paymentLanguage: "Paiement when receiving",
    priceLanguage: "Lower Prices",
    TextDeliveryLanguage:
      "Delivery within 24 hours, inside Amman. Delivery in less than 48 hours, outside Amman.",
    TextPaymentLanguage:
      "Pay the bill after verifying that your order is correct!!",
    TextPriceLanguage:
      "We strive to provide you with the lowest prices and the best European products!!",
  },
  arabic: {
    deliveryLanguage: "سرعة التوصيل",
    paymentLanguage: "الدفع عند الإستلام",
    priceLanguage: "أقل الأسعار",
    TextDeliveryLanguage:
      "التوصيل خلال 24 ساعة داخل عمان. التوصيل في أقل من 48 ساعة خارج عمان",
    TextPaymentLanguage: "ادفع الفاتورة بعد التحقق من صحة طلبك",
    TextPriceLanguage:
      "نسعى جاهدين لتزويدك بأقل الأسعار وأفضل المنتجات الأوروبية",
  },
};

function PropertiesOurShop() {
  /*----------------------context language-------------------*/
  const { language } = useContext(LanguageContext);
  const {
    deliveryLanguage,
    paymentLanguage,
    priceLanguage,
    TextDeliveryLanguage,
    TextPaymentLanguage,
    TextPriceLanguage,
  } = languageWords[language];
  /*-----------------------------X---------------------------*/

  const { ref, inView } = useInView();

  return (
    <div className={styles.container} ref={ref}>
      <div className={`${styles.PropertiesBox} ${inView && styles.animation}`}>
        <FaTruck className={styles.icon} />
        <h3> {deliveryLanguage} </h3>
        <p>{TextDeliveryLanguage}</p>
      </div>
      <div className={`${styles.PropertiesBox} ${inView && styles.animation}`}>
        <GiReceiveMoney className={styles.icon} />
        <h3> {paymentLanguage} </h3>
        <p> {TextPaymentLanguage} </p>
      </div>
      <div className={`${styles.PropertiesBox} ${inView && styles.animation}`}>
        <FaMoneyBillWave className={styles.icon} />
        <h3> {priceLanguage} </h3>
        <p>{TextPriceLanguage}</p>
      </div>
    </div>
  );
}

export default PropertiesOurShop;
