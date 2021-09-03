import styles from "@/styles/Register.module.css";
import { useState, useEffect, useContext } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { useRouter } from "next/router";
import Link from "next/link";
import useInputState from "@/Hooks/useInputState";
import AuthContext from "@/context/AuthContext";
import { LanguageContext } from "@/context/LanguageContext";
import { AiOutlineLine } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaMobileAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import { FaFileSignature } from "react-icons/fa";

import { AiFillEyeInvisible } from "react-icons/ai";
import swal from "sweetalert";

const languageWords = {
  english: {
    TitleLanguage: "Sign Up",
    UsernameLanguage: "Username",
    EmailLanguage: "Email Address",
    PhoneLanguage: "Phone Number (For contact purposes)",
    PasswordLanguage: "Password",
    PasswordConfirmLanguage: "Confirm Password",
    IdoAcceptLanguage: "I do accept the",
    TermsLanguage: "Terms & Conditions",
    ThisSiteLanguage: "of this site.",
    RegisterLanguage: "Sign Up",
    HaveAccountLanguage: "Already have an account ?",
    LoginLanguage: "Sign In",
    TitleAlertInfoLanguage: "Hi there 👋, quick note",
    TextAlertInfoNoteLanguage:
      "Please make sure to enter a valid email and a valid phone, because we will contact you through them, any mistake may lead to delay or cancellation of orders.",
    TitleAlertValidationsLanguage: "Validations",
    TextAlertValidationsLanguage:
      "Please make sure enter a unique username like (mostafa01) and email not used before and you must enter a password greater than 8 character and contain at least one number.",
    PhoneValidationRequiredLanguage: "Please Enter A Phone Number !!",
    PhoneValidationIsNumberLanguage: "Phone Number Must Be A Numbers!!",
    PhoneValidationIsPhoneNumberLanguage: "Phone Number Must Be (10 number) !!",
    PhoneValidationIsLocalNumberLanguage:
      "Phone Number Must Begin With (078 , 079, 077)",
    EmailValidationRequiredLanguage: "Please Enter A Email !!",
    IsEmailValidationLanguage:
      "Email must contain ( @ ) and end with ( .com ) ",
    PasswordValidationLanguage: "Please Enter A Password !!",
    PasswordConfirmValidationLanguage:
      "Please Retype A Password (Must Be Match) !!",
    UsernameValidationLanguage: "Please Enter A Username !!",
    MatchPasswordValidationLanguge:
      "Passwords Don't Match, Please Try Again !!",
    ShortPasswordValidationLanguge: "Password must be at least 8 character !!",
    ContainLettersPasswordValidationLanguge:
      "Password must contain at least one letter !!",
    ContainNumbersPasswordValidationLanguge:
      "Password must contain at least one Number !!",
  },
  arabic: {
    TitleLanguage: "إنشاء حساب",
    UsernameLanguage: "إسم المستخدم",
    EmailLanguage: "البريد الإلكتروني",
    PhoneLanguage: "رقم الهاتف",
    PasswordLanguage: "الرقم السري",
    PasswordConfirmLanguage: "تأكيد الرقم السري",
    IdoAcceptLanguage: "أنا أوافق على",
    TermsLanguage: "شروط و أحكام",
    ThisSiteLanguage: "هذا الموقع",
    RegisterLanguage: "إنشاء",
    HaveAccountLanguage: "لديك حساب بالفعل؟",
    LoginLanguage: "تسجيل الدخول",
    TitleAlertInfoLanguage: "مرحباً 👋 ملاحظة سريعة",
    TextAlertInfoNoteLanguage:
      "يرجى التأكد من إدخال بريد إلكتروني صالح وهاتف صالح ، لأننا سنتصل بك من خلالهم ، وأي خطأ قد يؤدي إلى تأخير أو إلغاء الطلبات",
    TitleAlertValidationsLanguage: "التحقق من الصحة",
    TextAlertValidationsLanguage:
      "يرجى التأكد من إدخال اسم مستخدم (فريد) والبريد الإلكتروني غير المستخدم من قبل ويجب إدخال كلمة مرور أكبر من 8 أحرف وتحتوي على رقم واحد على الأقل",
    PhoneValidationRequiredLanguage: "!! الرجاء إدخال رقم هاتف",
    PhoneValidationIsNumberLanguage: "!! رقم الهاتف يجب أن يكون من أرقام فقط",
    PhoneValidationIsPhoneNumberLanguage:
      "!! رقم الهاتف يجب أن يتكون من 10 أرقام فقط",
    PhoneValidationIsLocalNumberLanguage:
      "(078 , 079, 077) رقم الهاتف يجب أن يبدأ ب",
    EmailValidationRequiredLanguage: "!! الرجاء إدخال بريد إلكتروني",
    IsEmailValidationLanguage:
      " ( .com ) البريد الإلكتروني يجب أن يحتوي على ( @ ) وينتهي ب ",
    PasswordValidationLanguage: "!! يرجى إدخال كلمة مرور",
    PasswordConfirmValidationLanguage: "!! يرجى إعادة كتابة كلمة المرور",
    UsernameValidationLanguage: "!! يرجى إدخال إسم مستخدم",
    MatchPasswordValidationLanguge:
      "كلمات المرور غير متابطقة يرجى إعادة المحاولة",
    ShortPasswordValidationLanguge: "كلمة المرور يجب أن تكون على الأقل 8 خانات",
    ContainLettersPasswordValidationLanguge:
      "كلمة المرور يجب أن تحتوي على الأقل حرف واحد",
    ContainNumbersPasswordValidationLanguge:
      "كلمة المرور يجب أن تحتوي على الأقل رقم واحد",
  },
};

function Register() {
  const router = useRouter();

  /*----------------------context language-------------------*/
  const { language } = useContext(LanguageContext);
  const {
    TitleLanguage,
    UsernameLanguage,
    EmailLanguage,
    PhoneLanguage,
    PasswordLanguage,
    PasswordConfirmLanguage,
    IdoAcceptLanguage,
    TermsLanguage,
    ThisSiteLanguage,
    RegisterLanguage,
    HaveAccountLanguage,
    LoginLanguage,
    TitleAlertInfoLanguage,
    TextAlertInfoNoteLanguage,
    TitleAlertValidationsLanguage,
    TextAlertValidationsLanguage,

    PhoneValidationRequiredLanguage,
    PhoneValidationIsNumberLanguage,
    PhoneValidationIsPhoneNumberLanguage,
    PhoneValidationIsLocalNumberLanguage,
    EmailValidationRequiredLanguage,
    IsEmailValidationLanguage,
    PasswordValidationLanguage,
    PasswordConfirmValidationLanguage,
    UsernameValidationLanguage,
    MatchPasswordValidationLanguge,
    ShortPasswordValidationLanguge,
    ContainLettersPasswordValidationLanguge,
    ContainNumbersPasswordValidationLanguge,
  } = languageWords[language];
  /*-----------------------------X---------------------------*/

  /*-----------context authenication-----------*/
  const { register, error } = useContext(AuthContext);
  /*---------------------X---------------------*/

  useEffect(() => {
    error && swal(error, "", "error");
  });

  /*--------------------state for input-------------------*/
  const [username, handleChangeUsername] = useInputState("");
  const [email, handleChangeEmail] = useInputState("");
  const [phone, handleChangePhone] = useInputState("");
  const [password, handleChangePassword] = useInputState("");
  const [passwordConf, handleChangePasswordConf] = useInputState("");
  /*---------------------------X-------------------------*/

  /*------------------Validation TextField phone number-------------------*/
  useEffect(() => {
    ValidatorForm.addValidationRule("isPhoneNumber", (value) => {
      if (value.length > 10 || value.length < 10) {
        return false;
      }
      return true;
    });
  });

  useEffect(() => {
    ValidatorForm.addValidationRule("isNumber", (value) => {
      if (value.match(/^[A-Za-z]+$/)) {
        return false;
      }
      return true;
    });
  });

  useEffect(() => {
    ValidatorForm.addValidationRule("isLocalNumber", (value) => {
      if (value.match("078") || value.match("079") || value.match("077")) {
        return true;
      }
      return false;
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

  /*----------------------------show info alert----------------------------*/
  useEffect(() => {
    if (router.pathname === "/account/register") {
      const timer = setTimeout(() => {
        swal({
          title: TitleAlertInfoLanguage,
          text: TextAlertInfoNoteLanguage,
          icon: "warning",
        }).then(() => {
          swal({
            title: TitleAlertValidationsLanguage,
            text: TextAlertValidationsLanguage,
            icon: "warning",
          });
        });
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [router.pathname]);

  /*-----------------------------------X-----------------------------------*/

  /*------------------state for show password and hide---------------------*/
  const [visiblePasswrod, setVisiblePasswrod] = useState(false);
  const handleVisiblePassword = () => {
    setVisiblePasswrod(!visiblePasswrod);
  };
  /*-----------------------------------X-----------------------------------*/

  const handleSubmit = (evnt) => {
    evnt.preventDefault();

    /*----------------validation password--------------------*/
    if (password !== passwordConf) {
      swal(MatchPasswordValidationLanguge, "", "error");
      return;
    }

    if (password.length < 8) {
      swal(ShortPasswordValidationLanguge, "", "error");
      return;
    }

    if (password.search(/[a-z]/i) === -1) {
      swal(ContainLettersPasswordValidationLanguge, "", "error");
      return;
    }

    if (password.search(/[0-9]/) === -1) {
      swal(ContainNumbersPasswordValidationLanguge, "", "error");
      return;
    }
    /*----------------------------x--------------------------*/

    register({
      username,
      email,
      password,
      phone,
    });
  };

  return (
    <section>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ border: "none" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p
                      className={` ${styles.h1Text} text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4`}
                    >
                      {TitleLanguage}
                      <span>
                        <AiOutlineLine />
                      </span>
                    </p>

                    <ValidatorForm
                      onSubmit={handleSubmit}
                      className="mx-1 mx-md-4"
                    >
                      {/*-------------------input Username---------------*/}
                      <div className="d-flex flex-row align-items-center mb-4">
                        <FaUserAlt className={styles.registerIcons} />
                        <div className="form-outline flex-fill mb-4">
                          <TextValidator
                            type="text"
                            value={username}
                            onChange={handleChangeUsername}
                            fullWidth
                            variant="standard"
                            label={UsernameLanguage}
                            validators={["required"]}
                            errorMessages={[UsernameValidationLanguage]}
                          />
                        </div>
                      </div>
                      {/*------------------------X-----------------------*/}

                      {/*---------------input email address--------------*/}
                      <div className="d-flex flex-row align-items-center mb-4">
                        <IoMail className={styles.registerIcons} />
                        <div className="form-outline flex-fill mb-4">
                          <TextValidator
                            type="email"
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
                        </div>
                      </div>
                      {/*------------------------X-----------------------*/}

                      {/*---------------input phone number---------------*/}
                      <div className="d-flex flex-row align-items-center mb-4">
                        <FaMobileAlt className={styles.registerIcons} />
                        <div className="form-outline flex-fill mb-4">
                          <TextValidator
                            type="text"
                            value={phone}
                            onChange={handleChangePhone}
                            fullWidth
                            variant="standard"
                            label={PhoneLanguage}
                            validators={[
                              "required",
                              "isNumber",
                              "isPhoneNumber",
                              "isLocalNumber",
                            ]}
                            errorMessages={[
                              PhoneValidationRequiredLanguage,
                              PhoneValidationIsNumberLanguage,
                              PhoneValidationIsPhoneNumberLanguage,
                              PhoneValidationIsLocalNumberLanguage,
                            ]}
                          />
                        </div>
                      </div>
                      {/*------------------------X-----------------------*/}

                      {/*------------------input password----------------*/}
                      <div className="d-flex flex-row align-items-center mb-4">
                        <FaLock className={styles.registerIcons} />
                        <div className="form-outline flex-fill mb-4">
                          <TextValidator
                            type={
                              visiblePasswrod === true ? "text" : "password"
                            }
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
                      {/*------------------------X-----------------------*/}

                      {/*---------------input password confirm-----------*/}
                      <div className="d-flex flex-row align-items-center mb-4">
                        <FaKey className={styles.registerIcons} />
                        <div className="form-outline flex-fill mb-4">
                          <TextValidator
                            type={
                              visiblePasswrod === true ? "text" : "password"
                            }
                            value={passwordConf}
                            onChange={handleChangePasswordConf}
                            fullWidth
                            variant="standard"
                            label={PasswordConfirmLanguage}
                            validators={["required"]}
                            errorMessages={[PasswordConfirmValidationLanguage]}
                          />
                        </div>
                        {visiblePasswrod === true ? (
                          <AiFillEye
                            onClick={handleVisiblePassword}
                            className={styles.visiblePassword}
                          />
                        ) : (
                          <AiFillEyeInvisible
                            onClick={handleVisiblePassword}
                            className={styles.visiblePassword}
                          />
                        )}
                      </div>
                      {/*------------------------X-----------------------*/}

                      {/*--------checkBox accept terms&conditions--------*/}
                      <div className="form-check d-flex justify-content-center mb-5">
                        <div className="mb-3 form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                            required
                          />
                        </div>
                        <label
                          className="form-check-label"
                          htmlFor="form2Example3"
                        >
                          {IdoAcceptLanguage}{" "}
                          <Link href="/terms-policy/terms-conditions">
                            <a className={styles.linkTermsAndConditions}>
                              {TermsLanguage}{" "}
                            </a>
                          </Link>{" "}
                          {ThisSiteLanguage}
                        </label>
                      </div>
                      {/*------------------------X-----------------------*/}

                      {/*------------button submit the form--------------*/}
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="submit" className={styles.registerBtn}>
                          {RegisterLanguage}{" "}
                          <FaFileSignature className={styles.icons} />
                        </button>
                      </div>
                      {/*------------------------X-----------------------*/}

                      {/*-------------link for login page----------------*/}
                      <p className="small text-center fw-bold mt-2 pt-1 mb-0">
                        {HaveAccountLanguage}{" "}
                        <Link href="/account/login">
                          <a className={styles.linklogin}> {LoginLanguage} </a>
                        </Link>
                      </p>
                      {/*------------------------X-----------------------*/}
                    </ValidatorForm>
                  </div>

                  {/*-------------------image register page---------------------*/}
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="/images/fayyad/register.jpg"
                      className="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                  {/*----------------------------X------------------------------*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
