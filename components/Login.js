import styles from "@/styles/Login.module.css";
import React, { useEffect } from "react";
import { useContext } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useInputState from "@/Hooks/useInputState";
import AuthContext from "@/context/AuthContext";
import Link from "next/link";
import swal from "sweetalert";

function Login() {
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
    swal(
      "Hi There!!",
      "Please note that we use cookies to keep you login for a week and it automatically log out after then, if you don't want to keep login you can hit on logout option 😉",
      "info"
    );
  };
  /*---------------------------X-----------------------------*/

  /*---------------toast alert error in login----------------*/
  useEffect(() => error && toast.error(error));
  /*---------------------------X-----------------------------*/

  return (
    <section className={styles.main}>
      <ToastContainer position="top-center" style={{ width: "30rem" }} />
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
              <p className="lead fw-normal mt-3 mb-0 me-3">Sign in with</p>
              <button
                type="button"
                className={`${styles.loginSocialBtn} mx-1 mt-3`}
              >
                <i className="fab fa-facebook-f"></i>
              </button>

              <button
                type="button"
                className={`${styles.loginSocialBtn} mx-1 mt-3`}
              >
                <i className="fas fa-envelope"></i>
              </button>
            </div>
            {/*--------------------------X-----------------------------*/}

            <div className={`${styles.divider} d-flex align-items-center my-4`}>
              <p className="text-center fw-bold mx-3 mb-0">Or</p>
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
                  label="Email Adress"
                  validators={["required"]}
                  errorMessages={["Please Enter A Valid Email !!"]}
                />
              </div>

              <div className="form-outline mb-3">
                <TextValidator
                  type="password"
                  onChange={handleChangePassword}
                  value={password}
                  fullWidth
                  variant="standard"
                  label="Password"
                  validators={["required"]}
                  errorMessages={["Please Enter A Password !!"]}
                />
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
                    Remember me{" "}
                    <i
                      onClick={alertInfo}
                      className={`fas fa-question ${styles.questionIcon} `}
                    ></i>
                  </label>
                </div>
                {/*------------------------------X----------------------------*/}

                {/*-------------------link forget password--------------------*/}
                <Link href="/forget-password">
                  <a className="text-body">Forgot password?</a>
                </Link>
                {/*-----------------------------X-----------------------------*/}
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                {/*----------------------button login-------------------------*/}
                <button type="submit" className={styles.loginBtn}>
                  Login
                </button>
                {/*----------------------------X------------------------------*/}

                {/*----------------------register link------------------------*/}
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?{" "}
                  <Link href="/account/register">
                    <a className={styles.linkRegister}>Register</a>
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

export default Login;
