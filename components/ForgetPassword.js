import styles from "@/styles/ForgetPassword.module.css";
import { useState, useContext, useEffect } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import swal from "sweetalert";
import Link from "next/link";
import { LanguageContext } from "@/context/LanguageContext";

const languageWords = {
  english: {
    TitleRecoverPasswordLanguage: "Recover Password",
    DonotWorryTextLanguage: "Don't worry, happens to the most of us.",
    EmailLanguage: "Please enter an email address",
    RecoverPasswordBtnLanguage: "Email me a recovery link",
    HelpTextLanguage: "If you have any problem with recover password",
    ContactUsLanguage: "Contact Us",
    EmailValidationRequiredLanguage: "Please Enter A Valid Email !!",
    IsEmailValidationLanguage:
      "Email must contain ( @ ) and end with ( .com ) ",
  },
  arabic: {
    TitleRecoverPasswordLanguage: "إستعادة كلمة المرور",
    DonotWorryTextLanguage: "لا تقلق ، هذا الأمر يحدث لمعظمنا",
    EmailLanguage: "يرجى تزويدنا بالبريد الإلكتروني ",
    RecoverPasswordBtnLanguage: "أرسل لي رابط الاسترداد",
    HelpTextLanguage: "إذا كان لديك أي مشكلة في استعادة كلمة المرور",
    ContactUsLanguage: "تواصل معنا",
    EmailValidationRequiredLanguage: "!! الرجاء إدخال بريد إلكتروني",
    IsEmailValidationLanguage:
      " ( .com ) البريد الإلكتروني يجب أن يحتوي على ( @ ) وينتهي ب ",
  },
};

function ForgetPassword() {
  /*----------------------context language-------------------*/
  const { language } = useContext(LanguageContext);
  const {
    TitleRecoverPasswordLanguage,
    DonotWorryTextLanguage,
    EmailLanguage,
    RecoverPasswordBtnLanguage,
    HelpTextLanguage,
    ContactUsLanguage,
    EmailValidationRequiredLanguage,
    IsEmailValidationLanguage,
  } = languageWords[language];
  /*-----------------------------X---------------------------*/

  /*------------------Validation TextField email---------------------------*/
  useEffect(() => {
    ValidatorForm.addValidationRule("isEmail", (value) => {
      if (value.match(".com") && value.match("@")) {
        return true;
      }
      return false;
    });
  });
  /*-----------------------------------X-----------------------------------*/

  /*--------------state for email input-------------*/
  const [email, setEmail] = useState("");
  const handleChangeEmail = (evnt) => {
    setEmail(evnt.target.value);
  };
  /*-------------------------X----------------------*/

  const handleSubmit = (evnt) => {
    evnt.preventDefault();
    swal(
      "Awesome 😉",
      "Check your email inbox, we sent you an email contain a recovery link",
      "success"
    );
    setEmail("");
  };

  return (
    <div className={styles.main}>
      <ValidatorForm onSubmit={handleSubmit}>
        <div className={styles.container}>
          <div className={styles.boxContainer}>
            <h4> {TitleRecoverPasswordLanguage} </h4>
            <hr />
            <p> {DonotWorryTextLanguage} </p>
            <TextValidator
              type="text"
              name="email"
              value={email}
              onChange={handleChangeEmail}
              fullWidth
              variant="standard"
              label={EmailLanguage}
              validators={["required", "isEmail"]}
              errorMessages={[
                EmailValidationRequiredLanguage,
                IsEmailValidationLanguage,
              ]}
            />
            <button type="submit" className={styles.btn}>
              {" "}
              {RecoverPasswordBtnLanguage}{" "}
            </button>
            <div className={styles.contactText}>
              {HelpTextLanguage} <br />
              <Link href="/contact">
                <a className={styles.link}> {ContactUsLanguage} </a>
              </Link>
            </div>
          </div>
        </div>
      </ValidatorForm>
    </div>
  );
}

export default ForgetPassword;
