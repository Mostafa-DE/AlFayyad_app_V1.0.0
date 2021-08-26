import styles from "@/styles/Register.module.css";
import { useState } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { useEffect } from "react";
import { useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import useInputState from "@/Hooks/useInputState";
import AuthContext from "@/context/AuthContext";
import { AiOutlineLine } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaMobileAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import swal from "sweetalert";

function Register() {
  const router = useRouter();
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
  /*-----------------------------------X-----------------------------------*/

  /*----------------------------show info alert----------------------------*/
  useEffect(() => {
    if (router.pathname === "/account/register") {
      const timer = setTimeout(() => {
        swal({
          title: "Hi There 👋",
          text: "Please make sure to enter a valid email and a valid phone, because we will contact you through them, any mistake may lead to delay or cancellation of orders.",
          icon: "warning",
        }).then(() => {
          swal({
            title: "Almost Finish ",
            text: "Please make sure enter a password greater than 8 character  and contain at least one number.",
            icon: "warning",
          });
        });
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, []);
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
      swal("Passwords Don't Match, Please Try Again !!", "", "error");
      return;
    }

    if (password.length < 8) {
      swal("Password must be at least 8 character !!", "", "error");
      return;
    }

    if (password.search(/[a-z]/i) === -1) {
      swal("Password must contain at least one letter !!", "", "error");
      return;
    }

    if (password.search(/[0-9]/) === -1) {
      swal("Password must contain at least one number !!", "", "error");
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
                      Sign Up
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
                            label="Username"
                            validators={["required"]}
                            errorMessages={["Please Enter A Username !!"]}
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
                            label="Email Address"
                            validators={["required"]}
                            errorMessages={["Please Enter A Valid Email !!"]}
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
                            label="Phone Number (For contact purposes)"
                            validators={[
                              "required",
                              "isNumber",
                              "isPhoneNumber",
                              "isLocalNumber",
                            ]}
                            errorMessages={[
                              "Please Enter A Phone Number !!",
                              "Phone Number Must Be A Numbers !!",
                              "Phone Number Must Be (10 number) !!",
                              "Phone Number Must Begin With (078 , 079, 077)",
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
                            label="Password"
                            validators={["required"]}
                            errorMessages={["Please Enter A Password !!"]}
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
                            label="Confirm Password"
                            validators={["required"]}
                            errorMessages={[
                              "Please Retype A Password (Must Be Match) !!",
                            ]}
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
                          I do accept the{" "}
                          <Link href="/terms-policy/terms-conditions">
                            <a className={styles.linkTermsAndConditions}>
                              Terms & Conditions{" "}
                            </a>
                          </Link>{" "}
                          of the site.
                        </label>
                      </div>
                      {/*------------------------X-----------------------*/}

                      {/*------------button submit the form--------------*/}
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="submit" className={styles.registerBtn}>
                          Register
                        </button>
                      </div>
                      {/*------------------------X-----------------------*/}

                      {/*-------------link for login page----------------*/}
                      <p className="small text-center fw-bold mt-2 pt-1 mb-0">
                        Already have an account ?{" "}
                        <Link href="/account/login">
                          <a className={styles.linklogin}>Login</a>
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
