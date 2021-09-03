import styles from "@/styles/SubscripeForm.module.css";
import { useState, useContext } from "react";
import emailjs from "emailjs-com";
import swal from "sweetalert";
import { LanguageContext } from "@/context/LanguageContext";

const languageWords = {
  english: {
    TitleNewsletterLanguage: "JOIN OUR NEWSLETTER",
    TextSubscribeLanguage: "Subscribe To Get Updated With New Offers",
    emailLanguage: "Enter An Email Address",
    GetNotifiedLanguage: "Get Notified",
  },
  arabic: {
    TitleNewsletterLanguage: "إشترك معنا الآن",
    TextSubscribeLanguage: "اشترك للحصول على آخر الأخبار و العروض الجديدة",
    emailLanguage: "ادخل عنوان البريد الإلكتروني",
    GetNotifiedLanguage: "الحصول على إخطار",
  },
};

function SubscripeForm() {
  /*----------------------context language-------------------*/
  const { language } = useContext(LanguageContext);
  const {
    TitleNewsletterLanguage,
    TextSubscribeLanguage,
    emailLanguage,
    GetNotifiedLanguage,
  } = languageWords[language];
  /*-----------------------------X---------------------------*/

  /*--------state for input email------------*/
  const [email, setEmail] = useState("");
  const handleChange = (evnt) => {
    setEmail(evnt.target.value);
  };
  /*-------------------X---------------------*/

  /*--------send email using emailJS---------*/
  const handleSubmit = async (evnt) => {
    evnt.preventDefault();
    emailjs
      .sendForm(
        "service_8swmbyy",
        "template_b6gqepg",
        evnt.target,
        "user_tjMhMjtx9IxF7pqse8vPx"
      )
      .then(setEmail(""))
      .catch((err) => console.log(err));
    swal(
      "Thank You 😉",
      "Please note that there is no spam, just we will notify you for any new updates, discounts or products.",
      "success"
    );
    setEmail("");
  };
  /*--------------------X--------------------*/

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h6> {TitleNewsletterLanguage} </h6>
        <h1> {TextSubscribeLanguage} </h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.containerEmail}>
            <input
              className={styles.inputEmail}
              type="email"
              name="email"
              placeholder={emailLanguage}
              value={email}
              onChange={handleChange}
              required
            />
            <button className={styles.btnSubsecripe} type="submit">
              {GetNotifiedLanguage}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SubscripeForm;
