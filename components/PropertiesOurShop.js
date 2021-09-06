import styles from "@/styles/PropertiesOurShop.module.css";
import { FaTruck } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { FaMoneyBillWave } from "react-icons/fa";
import { LanguageContext } from "@/context/LanguageContext";
import { useContext } from "react";

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

  return (
    <div className={styles.container}>
      <div className={styles.PropertiesBox}>
        <FaTruck className={styles.icon} />
        <h3> {deliveryLanguage} </h3>
        <p>{TextDeliveryLanguage}</p>
      </div>
      <div className={styles.PropertiesBox}>
        <GiReceiveMoney className={styles.icon} />
        <h3> {paymentLanguage} </h3>
        <p> {TextPaymentLanguage} </p>
      </div>
      <div className={styles.PropertiesBox}>
        <FaMoneyBillWave className={styles.icon} />
        <h3> {priceLanguage} </h3>
        <p>{TextPriceLanguage}</p>
      </div>
    </div>
  );
}

export default PropertiesOurShop;
