import styles from "@/styles/ContactForm.module.css";
import { useState, useEffect, useContext } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import useInputState from "@/Hooks/useInputState";
import emailjs from "emailjs-com";
import swal from "sweetalert";
import { LanguageContext } from "@/context/LanguageContext";
import { SiMessenger } from "react-icons/si";
import { ImWhatsapp } from "react-icons/im";
import { FiMail } from "react-icons/fi";
import { FaMobileAlt } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";

const languageWords = {
  english: {
    emailLanguage: "Email Address",
    nameLanguage: "Full Name",
    phoneLanguage: "Phone Number",
    messageLanguage: "What's on your mind 🙂",
    titleLanguge: "Contact Us with",
    sendLanguge: "Send",
    EmailValidationRequiredLanguage: "Please Enter A Valid Email !!",
    IsEmailValidationLanguage:
      "Email must contain ( @ ) and end with ( .com ) ",
    NameValidationLanguge: "Please Enter Your Name !!",
    MessageValidationLanguge: "Please let us know what's on your mind 🙂",
    PhoneValidationIsNumberLanguage: "Phone Number Must Be A Numbers!!",
    PhoneValidationIsPhoneNumberLanguage: "Phone Number Must Be (10 number) !!",
  },
  arabic: {
    emailLanguage: "البريد الإلكتروني",
    nameLanguage: "الإسم الكامل",
    phoneLanguage: "رقم الهاتف",
    messageLanguage: "اخبرنا كيف نستطيع مساعدتك 🙂 ؟؟",
    titleLanguge: "تواصل معنا ",
    sendLanguge: "ارسال",
    EmailValidationRequiredLanguage: "!! الرجاء إدخال بريد إلكتروني",
    IsEmailValidationLanguage:
      " ( .com ) البريد الإلكتروني يجب أن يحتوي على ( @ ) وينتهي ب ",
    NameValidationLanguage: "!! الرجاء إدخال إسمك الكامل",
    MessageValidationLanguge:
      "🙂 يرجى إخبارنا بالطريقة التي يمكننا مساعدتك بها",
    PhoneValidationIsNumberLanguage: "!! رقم الهاتف يجب أن يكون من أرقام فقط",
    PhoneValidationIsPhoneNumberLanguage:
      "!! رقم الهاتف يجب أن يتكون من 10 أرقام فقط",
  },
};

function Login({ account }) {
  /*----------------------context language-------------------*/
  const { language } = useContext(LanguageContext);
  const {
    emailLanguage,
    nameLanguage,
    phoneLanguage,
    messageLanguage,
    titleLanguge,
    sendLanguge,
    EmailValidationRequiredLanguage,
    IsEmailValidationLanguage,
    NameValidationLanguage,
    MessageValidationLanguge,
    PhoneValidationIsNumberLanguage,
    PhoneValidationIsPhoneNumberLanguage,
  } = languageWords[language];
  /*-----------------------------X---------------------------*/
  /*----------------------State for form---------------------*/
  const [name, setName] = useState(
    `${account.username === undefined ? "" : account.username}`
  );
  const handleChangeName = (evnt) => {
    setName(evnt.target.value);
  };
  const [email, setEmail] = useState(
    `${account.email === undefined ? "" : account.email}`
  );
  const handleChangeEmail = (evnt) => {
    setEmail(evnt.target.value);
  };

  const [message, handleChangeMessage, resetMessage] = useInputState("");

  const [phone, setPhone] = useState(
    `${account.phone === undefined ? "" : `0${account.phone}`}`
  );
  const handleChangePhone = (evnt) => {
    setPhone(evnt.target.value);
  };
  /*-----------------------------X---------------------------*/

  const handleSubmit = (evnt) => {
    evnt.preventDefault();
    /*------------send email using EmailJS------------*/
    emailjs
      .sendForm(
        "service_8swmbyy",
        "template_b6gqepg",
        evnt.target,
        "user_tjMhMjtx9IxF7pqse8vPx"
      )
      .then(() =>
        swal(
          "we are happy that you contact us 😉",
          "We would like to inform you that one of our employee will contact you as soon as possible. Thank you for your patience, we are willing to serve you at any time",
          "success"
        )
      )
      .catch((err) => console.log(err));
    /*-----------------------X------------------------*/

    /*---------------reset all state------------------*/
    resetMessage();
    setPhone("");
    setName("");
    setEmail("");
    /*-----------------------X------------------------*/
  };

  /*------------------Validation TextField phone number-------------------*/
  useEffect(() => {
    ValidatorForm.addValidationRule("isPhoneNumber", (value) => {
      if (value) {
        if (value.length > 10 || value?.length < 10) {
          return false;
        } else {
          return true;
        }
      } else {
        return true;
      }
    });
  });

  useEffect(() => {
    ValidatorForm.addValidationRule("isNumber", (value) => {
      if (value?.match(/^[A-Za-z]+$/)) {
        return false;
      }
      return true;
    });
  });

  useEffect(() => {
    ValidatorForm.addValidationRule("isEmail", (value) => {
      if (value.match(".com") && value.match("@")) {
        return true;
      }
      return false;
    });
  });
  /*-----------------------------------X-----------------------------------*/

  return (
    <section className={styles.main}>
      <div className={`container-fluid ${styles.hCustom}`}>
        <div className="row d-flex justify-content-center align-items-center h-100">
          {/*-------------------image Contact----------------*/}
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="/images/fayyad/contact.jpg"
              className="img-fluid"
              alt="Al_Fayyad"
            />
          </div>
          {/*-------------------------X----------------------*/}
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            {/*---------------------social contact------------*/}
            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
              <p className="lead fw-normal mt-3 mb-0 me-3 text-center">
                {titleLanguge}
              </p>
              <a
                href="http://m.me/fayyado"
                className={`${styles.contactBtns} mx-1 mt-3`}
              >
                <SiMessenger className={styles.socialContact} />
              </a>

              <a
                href="https://wa.me/message/TDOPR6Z3RHN7L1"
                className={`${styles.contactBtns} mx-1 mt-3`}
              >
                <ImWhatsapp className={styles.socialContact} />
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&source=mailto&to=fayyadm524@gmail.com"
                className={`${styles.contactBtns} mx-1 mt-3`}
              >
                <FiMail className={styles.socialContact} />
              </a>

              <a
                href="tel:0787731525"
                className={`${styles.contactBtns} mx-1 mt-3`}
              >
                <FaMobileAlt className={styles.socialContact} />
              </a>
            </div>
            {/*---------------------------X-------------------*/}
            <div className={`${styles.divider} d-flex align-items-center my-4`}>
              <p className="text-center fw-bold mx-3 mb-0">Or</p>
            </div>
            {/*---------------------Contact form--------------*/}
            <ValidatorForm onSubmit={handleSubmit}>
              <div className="form-outline mb-3 d-flex">
                <TextValidator
                  type="text"
                  onChange={handleChangeName}
                  value={name}
                  name="name"
                  variant="standard"
                  label={nameLanguage}
                  validators={["required"]}
                  errorMessages={[NameValidationLanguage]}
                />
                <TextValidator
                  type="text"
                  name="phone"
                  value={phone}
                  onChange={handleChangePhone}
                  fullWidth
                  style={{ marginLeft: "1rem" }}
                  variant="standard"
                  label={phoneLanguage}
                  validators={["isNumber", "isPhoneNumber"]}
                  errorMessages={[
                    PhoneValidationIsNumberLanguage,
                    PhoneValidationIsPhoneNumberLanguage,
                  ]}
                />
              </div>
              <div className="form-outline mb-3">
                <TextValidator
                  type="email"
                  onChange={handleChangeEmail}
                  value={email}
                  name="email"
                  fullWidth
                  variant="standard"
                  label={emailLanguage}
                  validators={["required", "isEmail"]}
                  errorMessages={[
                    EmailValidationRequiredLanguage,
                    IsEmailValidationLanguage,
                  ]}
                />
              </div>
              <div className="form-outline mb-3">
                <TextValidator
                  type="text"
                  onChange={handleChangeMessage}
                  value={message}
                  name="message"
                  fullWidth
                  variant="standard"
                  label={messageLanguage}
                  validators={["required"]}
                  errorMessages={[MessageValidationLanguge]}
                />
              </div>
              <div className="d-flex justify-content-between align-items-center"></div>
              <div className="text-center text-lg-start mt-4 pt-2">
                <button type="submit" className={styles.sendBtn}>
                  {sendLanguge}{" "}
                  <RiSendPlaneFill style={{ fontSize: "1.6rem" }} />
                </button>
              </div>
            </ValidatorForm>
            {/*--------------------------X--------------------*/}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
