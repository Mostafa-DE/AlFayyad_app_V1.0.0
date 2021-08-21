import styles from "@/styles/Register.module.css";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { useEffect } from "react";
import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import useInputState from "@/Hooks/useInputState";
import AuthContext from "@/context/AuthContext";

function Register() {
  /*-----------context authenication-----------*/
  const { register } = useContext(AuthContext);
  /*---------------------X---------------------*/

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
    ValidatorForm.addValidationRule("isGmail", (value) => {
      if (value.match("@gmail")) {
        return true;
      }
      return false;
    });
  });
  /*-----------------------------------X-----------------------------------*/

  const handleSubmit = (evnt) => {
    evnt.preventDefault();

    /*------------validation for match password--------------*/
    if (password !== passwordConf) {
      toast.error("Passwords Don't Match, Please Try Again !!");
      return;
    }

    if (password.length < 8) {
      toast.error("Password must be at least 8 character");
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
      <ToastContainer position="top-center" style={{ width: "30rem" }} />
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ border: "none" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Sign up
                    </p>

                    <ValidatorForm
                      onSubmit={handleSubmit}
                      className="mx-1 mx-md-4"
                    >
                      {/*-------------------input Username---------------*/}
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
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
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-4">
                          <TextValidator
                            type="email"
                            value={email}
                            onChange={handleChangeEmail}
                            fullWidth
                            variant="standard"
                            label="Email Address"
                            validators={["required", "isGmail"]}
                            errorMessages={[
                              "Please Enter A Valid Email !!",
                              "Please Enter A { Gmail } Address !!",
                            ]}
                          />
                        </div>
                      </div>
                      {/*------------------------X-----------------------*/}

                      {/*---------------input phone number---------------*/}
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-mobile-alt fa-lg me-3 fa-fw"></i>
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
                            ]}
                            errorMessages={[
                              "Please Enter A Phone Number !!",
                              "Phone Number Must Be A Numbers !!",
                              "Phone Number Must Be (10 number) !!",
                            ]}
                          />
                        </div>
                      </div>
                      {/*------------------------X-----------------------*/}

                      {/*------------------input password----------------*/}
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-4">
                          <TextValidator
                            type="password"
                            value={password}
                            onChange={handleChangePassword}
                            fullWidth
                            variant="standard"
                            label="Password"
                            validators={["required"]}
                            errorMessages={["Please Enter A Password !!"]}
                          />
                        </div>
                      </div>
                      {/*------------------------X-----------------------*/}

                      {/*---------------input password confirm-----------*/}
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-4">
                          <TextValidator
                            type="password"
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
                        Already have an account?{" "}
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
