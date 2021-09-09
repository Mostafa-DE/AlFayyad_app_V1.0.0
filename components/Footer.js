import styles from "@/styles/Footer.module.css";
import Link from "next/link";
import { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
import { SiMessenger } from "react-icons/si";
import { IoMailSharp } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

/*----------Style bootstrap--------*/
const stylesFooter = {
  root: {
    background:
      "linear-gradient(161deg,rgb(10, 10, 10) 0%,rgba(68, 68, 68, 0.986) 100%)",
  },
  white: {
    color: "#fff",
  },
  socialContain: {
    color: "#fff",
  },
  social: {
    color: "#fff",
    padding: "1.2rem",
    margin: "1rem",
    fontSize: "1.5rem",
  },
  about: {
    color: "#fff",
    textDecoration: "none",
  },
  contact: {
    color: "#fff",
    textDecoration: "none",
  },
};
/*-----------------X---------------*/

const languageWords = {
  english: {
    WhoWeAreQuestionLanguage: "WHO WE ARE ??",
    TextWhoWeAreLanguage:
      "Al Fayyad For European Products, we provide you with the best European products at reasonable prices and high quality, we strive to serve you at any time. don't hesitate to contact us at any time.",
    TitlePoliciesLanguage: "ALFAYYAD POLICIES",
    TermsAndConditionsLanguage: "Terms & Conditions",
    PrivacyPolicyLanguage: "Privacy Policy",
    SalesPoliciesLanguage: "Sales Policies",
    RefundPolicyLanguage: "Refund Policy",
    CancellationPolicyLanguage: "Cancellation Policy",
    ShippingPolicyLanguage: "Shipping Policy",
    TitleContactUs: "CONTACT US",
    TextAddressLanguage: "Joradn, Amman, online store",
    TextMassengerLanguage: "AlFayyad For European Products",
    TitleFollowUsLanguage: "FOLLOW US",
    MadeByMostafaLanguage: "Mostafa Fayyad",
  },
  arabic: {
    WhoWeAreQuestionLanguage: "من نحن ؟؟؟",
    TextWhoWeAreLanguage:
      "الفياض للمنتجات الأوروبية نوفر لك أفضل المنتجات الأوروبية بأسعار مناسبة وجودة عالية ، ونسعى جاهدين لخدمتك في أي وقت. لا تتردد في الاتصال بنا في أي وقت",
    TitlePoliciesLanguage: "سياسات الفياض",
    TermsAndConditionsLanguage: "الأحكام والشروط",
    PrivacyPolicyLanguage: "سياسة خاصة",
    SalesPoliciesLanguage: "سياسة المبيعات",
    RefundPolicyLanguage: "سياسة الاسترجاع",
    CancellationPolicyLanguage: "سياسة الإلغاء",
    ShippingPolicyLanguage: "سياسة الشحن",
    TitleContactUs: "إتصل بنا",
    TextAddressLanguage: "الأردن , عمان , متجر على الانترنت",
    TextMassengerLanguage: "الفياض للمنتجات الأوروبية",
    TitleFollowUsLanguage: "تابعنا",
    TextCopyRightLanguage: "حقوق النشر والنسخ محفوظة للفياض || صنع بواسطة ",
    MadeByMostafaLanguage: "مصطفى فياض",
  },
};

function Footer() {
  /*----------------------context language-------------------*/
  const { language } = useContext(LanguageContext);
  const {
    WhoWeAreQuestionLanguage,
    TextWhoWeAreLanguage,
    TitlePoliciesLanguage,
    TermsAndConditionsLanguage,
    PrivacyPolicyLanguage,
    SalesPoliciesLanguage,
    RefundPolicyLanguage,
    CancellationPolicyLanguage,
    ShippingPolicyLanguage,
    TitleContactUs,
    TextAddressLanguage,
    TextMassengerLanguage,
    TitleFollowUsLanguage,
    TextCopyRightLanguage,
    MadeByMostafaLanguage,
  } = languageWords[language];
  /*-----------------------------X---------------------------*/

  return (
    <footer
      className="page-footer font-small mdb-color lighten-3 py-3 pt-4 bg-light"
      style={stylesFooter.root}
    >
      <div className="container text-center text-md-left">
        <div className="row">
          {/*-----------------descripe about who we are--------------*/}
          <div
            className="col-md-4 col-lg-3 mr-auto my-md-4 my-0 mt-4 mb-1"
            style={stylesFooter.white}
          >
            <h5 className="font-weight-bold text-uppercase mb-4">
              {WhoWeAreQuestionLanguage}
            </h5>
            <p>{TextWhoWeAreLanguage}</p>
          </div>
          {/*-----------------------------X------------------------*/}
          <hr className="clearfix w-100 d-md-none" />
          {/*--------------terms & conditions & policies-----------*/}
          <div
            className="col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1"
            style={stylesFooter.white}
          >
            <h5 className="font-weight-bold text-uppercase mb-4">
              {TitlePoliciesLanguage}
            </h5>
            <ul className="list-unstyled">
              <li>
                <p>
                  <Link href="/terms-policy/terms-conditions">
                    <a className={styles.link} style={stylesFooter.about}>
                      {TermsAndConditionsLanguage}
                    </a>
                  </Link>
                </p>
              </li>
              <li>
                <p>
                  <Link href="/terms-policy/privacy-policy">
                    <a className={styles.link} style={stylesFooter.about}>
                      {PrivacyPolicyLanguage}
                    </a>
                  </Link>
                </p>
              </li>
              <li>
                <p>
                  <Link href="/terms-policy/sales-policies">
                    <a className={styles.link} style={stylesFooter.about}>
                      {SalesPoliciesLanguage}
                    </a>
                  </Link>
                </p>
              </li>
              <li>
                <p>
                  <Link href="/terms-policy/refund-policy">
                    <a className={styles.link} style={stylesFooter.about}>
                      {RefundPolicyLanguage}
                    </a>
                  </Link>
                </p>
              </li>
              <li>
                <p>
                  <Link href="/terms-policy/cancellation-policy">
                    <a className={styles.link} style={stylesFooter.about}>
                      {CancellationPolicyLanguage}
                    </a>
                  </Link>
                </p>
              </li>
              <li>
                <p>
                  <Link href="/terms-policy/shipping-policy">
                    <a className={styles.link} style={stylesFooter.about}>
                      {ShippingPolicyLanguage}
                    </a>
                  </Link>
                </p>
              </li>
            </ul>
          </div>
          {/*----------------------------X-------------------------*/}
          <hr className="clearfix w-100 d-md-none" />
          {/*--------------------Contact methods-------------------*/}
          <div
            className="col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1"
            style={stylesFooter.white}
          >
            <h5 className="font-weight-bold text-uppercase mb-4">
              {" "}
              {TitleContactUs}{" "}
            </h5>
            <ul className="list-unstyled">
              <li>
                <p style={stylesFooter.contact}>
                  <FaMapMarkerAlt className={styles.socialContact} />{" "}
                  <a
                    className={styles.link}
                    href="#"
                    style={stylesFooter.contact}
                  >
                    {TextAddressLanguage}
                  </a>
                </p>
              </li>
              <li>
                <p>
                  <FaMobileAlt className={styles.socialContact} />{" "}
                  <a
                    className={styles.link}
                    href="tel:0787731525"
                    style={stylesFooter.contact}
                  >
                    0787731525
                  </a>
                </p>
              </li>
              <li>
                <p>
                  <ImWhatsapp className={styles.socialContact} />{" "}
                  <a
                    className={styles.link}
                    href="https://wa.me/message/TDOPR6Z3RHN7L1"
                    style={stylesFooter.contact}
                  >
                    0787731525
                  </a>
                </p>
              </li>
              <li>
                <p>
                  <SiMessenger className={styles.socialContact} />{" "}
                  <a
                    className={styles.link}
                    href="http://m.me/fayyado"
                    style={stylesFooter.contact}
                  >
                    {TextMassengerLanguage}
                  </a>
                </p>
              </li>
              <li>
                <p>
                  <IoMailSharp className={styles.socialContact} />{" "}
                  <a
                    className={styles.link}
                    href="https://mail.google.com/mail/?view=cm&source=mailto&to=fayyadm524@gmail.com"
                    style={stylesFooter.contact}
                  >
                    fayyadm524@gmail.com
                  </a>
                </p>
              </li>
            </ul>
          </div>
          {/*---------------------------X--------------------------*/}
          <hr className="clearfix w-100 d-md-none" />
          {/*--------------------Follow us social------------------*/}
          <div
            className="col-md-2 col-lg-2 text-center mx-auto my-4"
            style={stylesFooter.socialContain}
          >
            <h5 className="font-weight-bold text-uppercase mb-4">
              {" "}
              {TitleFollowUsLanguage}{" "}
            </h5>
            <a
              href="https://web.facebook.com/fayyado"
              type="button"
              className={`btn-floating btn-fb ${styles.link} `}
              style={stylesFooter.social}
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/fayyado1/"
              type="button"
              className={`btn-floating btn-tw ${styles.link} `}
              style={stylesFooter.social}
            >
              <SiInstagram />
            </a>
            <a
              href="https://github.com/Mostafa-DE"
              type="button"
              className={`btn-floating btn-gplus ${styles.link} `}
              style={stylesFooter.social}
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/login"
              type="button"
              className={`btn-floating btn-dribbble ${styles.link} `}
              style={stylesFooter.social}
            >
              <FaTwitter />
            </a>
          </div>
          {/*---------------------------X--------------------------*/}
        </div>
      </div>
      {/*-----------------Copy right & reserved----------------*/}
      {language === "arabic" ? (
        <div className={styles.copyRight}>
          <p>
            <a href="https://github.com/Mostafa-DE">
              {" "}
              {MadeByMostafaLanguage}{" "}
            </a>{" "}
            {TextCopyRightLanguage}
          </p>
        </div>
      ) : (
        <div className={styles.copyRight}>
          <p>
            Copyright &copy; AlFayyad All rights reserved || Made By
            <a href="https://github.com/Mostafa-DE">
              {" "}
              {MadeByMostafaLanguage}{" "}
            </a>{" "}
          </p>
        </div>
      )}

      {/*--------------------------X---------------------------*/}
    </footer>
  );
}

export default Footer;
