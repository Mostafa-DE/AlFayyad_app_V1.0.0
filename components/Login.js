import styles from "@/styles/Login.module.css";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import useInputState from "@/Hooks/useInputState";
import AuthContext from "@/context/AuthContext";
import Link from "next/link";
import swal from "sweetalert";
import { ImFacebook } from "react-icons/im";
import { FaQuestion } from "react-icons/fa";
import { GoSignIn } from "react-icons/go";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { LanguageContext } from "@/context/LanguageContext";

const languageWords = {
  english: {
    SignInFacebookLanguage: "Sign in with ",
    OrTextLanguage: "Or",
    EmailLanguage: "Email Address",
    PasswordLanguage: "Password",
    RememberMeLanguage: "Remember me",
    ForgotPasswordLanguage: "Forgot password ?",
    LoginBtnLanguage: "Sign In",
    HaveAccountLanguage: "Don't have an account?",
    RegisterLanguage: "Register Now",
    TextAlertFacebookLanguage:
      "Oh no 😔 , Something went wrong please try again later Or sign in manual from the form below.",
    TitleAlertInfoLanguage: "Hi There 👋",
    TextAlertInfoLanguage:
      "Please note that we use cookies to keep your sign in for a week, after then it automatically sign out , if you don't want to keep your sign in, you can hit on sign out option from menu 😉",
    EmailValidationRequiredLanguage: "Please Enter A Email !!",
    IsEmailValidationLanguage:
      "Email must contain ( @ ) and end with ( .com ) ",
    PasswordValidationLanguage: "Please Enter A Password !!",
  },
  arabic: {
    SignInFacebookLanguage: "تسجيل الدخول عبر ",
    OrTextLanguage: "أو",
    EmailLanguage: "البريد الإلكتروني",
    PasswordLanguage: "الرقم السري",
    RememberMeLanguage: "تذكرني",
    ForgotPasswordLanguage: "نسيت كلمة المرور ؟",
    LoginBtnLanguage: "دخول",
    HaveAccountLanguage: "لا تمتلك حساب؟",
    RegisterLanguage: "سجل الآن",
    TextAlertFacebookLanguage:
      "عذرًا 😔، حدث خطأ ما ، يرجى المحاولة مرة أخرى لاحقًا أو تسجيل الدخول يدويًا من النموذج أدناه",
    TitleAlertInfoLanguage: "👋 مرحباً ",
    TextAlertInfoLanguage:
      "يرجى ملاحظة أننا نستخدم ملفات تعريف الارتباط للاحتفاظ بتسجيل الدخول الخاص بك لمدة أسبوع ، وبعد ذلك يتم تسجيل الخروج تلقائيًا ، إذا كنت لا تريد الاحتفاظ بتسجيل الدخول ، فيمكنك الضغط على خيار تسجيل الخروج من القائمة",
    EmailValidationRequiredLanguage: "!! الرجاء إدخال بريد إلكتروني",
    IsEmailValidationLanguage:
      " ( .com ) البريد الإلكتروني يجب أن يحتوي على ( @ ) وينتهي ب ",
    PasswordValidationLanguage: "يرجى إدخال كلمة المرور",
  },
};

export default function Login() {
  /*----------------------context language-------------------*/
  const { language } = useContext(LanguageContext);
  const {
    SignInFacebookLanguage,
    OrTextLanguage,
    EmailLanguage,
    PasswordLanguage,
    RememberMeLanguage,
    ForgotPasswordLanguage,
    LoginBtnLanguage,
    HaveAccountLanguage,
    RegisterLanguage,
    TextAlertFacebookLanguage,
    TitleAlertInfoLanguage,
    TextAlertInfoLanguage,
    EmailValidationRequiredLanguage,
    IsEmailValidationLanguage,
    PasswordValidationLanguage,
  } = languageWords[language];
  /*-----------------------------X---------------------------*/

  /*-----------------state for input forms------------------*/
  const { login, error } = useContext(AuthContext);
  const [email, handleChangeEmail, resetEmail] = useInputState("");
  const [password, handleChangePassword, resetPassword] = useInputState("");
  /*---------------------------X----------------------------*/

  const handleSubmit = (evnt) => {
    evnt.preventDefault();
    login({ email, password });
    resetPassword();
    resetEmail();
  };

  /*---------------sweetAlert for info cookies---------------*/
  const alertInfo = () => {
    swal(TitleAlertInfoLanguage, TextAlertInfoLanguage, "info");
  };
  /*---------------------------X-----------------------------*/

  /*---------------toast alert error in login----------------*/
  useEffect(() => error && swal(error, "", "error"));

  const handleClickFacebook = () => {
    swal(TextAlertFacebookLanguage, "", "error");
  };
  /*---------------------------X-----------------------------*/

  /*------------------state for show password and hide---------------------*/
  const [visiblePasswrod, setVisiblePasswrod] = useState(false);
  const handleVisiblePassword = () => {
    setVisiblePasswrod(!visiblePasswrod);
  };
  /*-----------------------------------X-----------------------------------*/

  useEffect(() => {
    ValidatorForm.addValidationRule("isEmail", (value) => {
      if (value.match(".com") && value.match("@")) {
        return true;
      }
      return false;
    });
  });

  return (
    <section className={styles.main}>
      <div className={`container-fluid ${styles.hCustom}`}>
        <div className="row d-flex justify-content-center align-items-center h-100">
          {/*---------------image login-----------------*/}
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="/images/fayyad/login.jpg"
              className="img-fluid"
              alt="Al_Fayyad"
            />
          </div>
          {/*--------------------X----------------------*/}

          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            {/*----------login with social media (read only)-----------*/}
            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
              {language === "arabic" ? (
                <>
                  <button
                    type="button"
                    onClick={handleClickFacebook}
                    className={`${styles.loginSocialBtn} mx-1 mt-3`}
                  >
                    <ImFacebook
                      style={{ margin: "0 0 0.2rem 0", fontSize: "1.1rem" }}
                    />
                  </button>
                  <p className="lead fw-normal mt-3 mb-0 me-3">
                    {" "}
                    {SignInFacebookLanguage}{" "}
                  </p>
                </>
              ) : (
                <>
                  <p className="lead fw-normal mt-3 mb-0 me-3">
                    {" "}
                    {SignInFacebookLanguage}{" "}
                  </p>
                  <button
                    type="button"
                    onClick={handleClickFacebook}
                    className={`${styles.loginSocialBtn} mx-1 mt-3`}
                  >
                    <ImFacebook
                      style={{ margin: "0 0 0.2rem 0", fontSize: "1.1rem" }}
                    />
                  </button>
                </>
              )}
            </div>
            {/*--------------------------X-----------------------------*/}

            <div className={`${styles.divider} d-flex align-items-center my-4`}>
              <p className="text-center fw-bold mx-3 mb-0">
                {" "}
                {OrTextLanguage}{" "}
              </p>
            </div>

            <ValidatorForm onSubmit={handleSubmit}>
              {/*-------------------all inputs-------------------*/}
              <div className="form-outline mb-3">
                <TextValidator
                  type="email"
                  onChange={handleChangeEmail}
                  value={email}
                  fullWidth
                  variant="standard"
                  label={EmailLanguage}
                  validators={["required", "isEmail"]}
                  errorMessages={[
                    EmailValidationRequiredLanguage,
                    IsEmailValidationLanguage,
                  ]}
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <div className="form-outline flex-fill mb-4">
                  <TextValidator
                    type={visiblePasswrod === true ? "text" : "password"}
                    value={password}
                    onChange={handleChangePassword}
                    fullWidth
                    variant="standard"
                    label={PasswordLanguage}
                    validators={["required"]}
                    errorMessages={[PasswordValidationLanguage]}
                  />
                </div>
                {visiblePasswrod === true ? (
                  <AiFillEye
                    className={styles.visiblePassword}
                    onClick={handleVisiblePassword}
                  />
                ) : (
                  <AiFillEyeInvisible
                    onClick={handleVisiblePassword}
                    className={styles.visiblePassword}
                  />
                )}
              </div>
              {/*-----------------------X------------------------*/}

              <div className="d-flex justify-content-between align-items-center">
                {/*----------------ckeckbox remember me (readOnly)------------*/}
                <div className="form-check mb-0">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    id="form2Example3"
                    checked
                    readOnly
                  />
                  <label className="form-check-label" htmlFor="form2Example3">
                    {RememberMeLanguage}{" "}
                    <FaQuestion
                      onClick={alertInfo}
                      className={styles.questionIcon}
                    />
                  </label>
                </div>
                {/*------------------------------X----------------------------*/}

                {/*-------------------link forget password--------------------*/}
                <Link href="/forget-password">
                  <a className="text-body"> {ForgotPasswordLanguage} </a>
                </Link>
                {/*-----------------------------X-----------------------------*/}
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                {/*----------------------button login-------------------------*/}
                <button type="submit" className={styles.loginBtn}>
                  {LoginBtnLanguage} <GoSignIn />
                </button>
                {/*----------------------------X------------------------------*/}

                {/*----------------------register link------------------------*/}
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  {HaveAccountLanguage}{" "}
                  <Link href="/account/register">
                    <a className={styles.linkRegister}> {RegisterLanguage} </a>
                  </Link>
                </p>
                {/*----------------------------X------------------------------*/}
              </div>
            </ValidatorForm>
          </div>
        </div>
      </div>
    </section>
  );
}
