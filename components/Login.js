import Link from "next/link";
import { useEffect } from "react";
import { useContext } from "react";
import styles from "@/styles/Login.module.css";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import useInputState from "@/Hooks/useInputState";
import AuthContext from "@/context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const { login, error } = useContext(AuthContext);
  const [email, handleChangeEmail, resetEmail] = useInputState("");
  const [password, handleChangePassword, resetPassword] = useInputState("");
  const handleSubmit = (evnt) => {
    evnt.preventDefault();
    login({ email, password });
    resetPassword();
    resetEmail();
  };

  useEffect(() => error && toast.error(error));
  return (
    <section className={styles.main}>
      <ToastContainer position="top-center" style={{ width: "30rem" }} />
      <div className={`container-fluid ${styles.hCustom}`}>
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="/images/fayyad/login.jpg"
              className="img-fluid"
              alt="Al_Fayyad"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
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

            <div className={`${styles.divider} d-flex align-items-center my-4`}>
              <p className="text-center fw-bold mx-3 mb-0">Or</p>
            </div>
            <ValidatorForm onSubmit={handleSubmit}>
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
              <div className="d-flex justify-content-between align-items-center">
                <div className="form-check mb-0">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form2Example3"
                  />
                  <label className="form-check-label" htmlFor="form2Example3">
                    Remember me
                  </label>
                </div>
                <a href="#!" className="text-body">
                  Forgot password?
                </a>
              </div>
              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  style={{
                    paddingLeft: "2.5rem",
                    paddingRight: "2.5rem",
                    backgroundColor: "#03c7ff",
                    border: "1px solid #03c7ff",
                  }}
                >
                  Login
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?{" "}
                  <Link href="/account/register">
                    <a className={styles.linkRegister}>Register</a>
                  </Link>
                </p>
              </div>
            </ValidatorForm>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
