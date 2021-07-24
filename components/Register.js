import Link from "next/link";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import useInputState from "@/Hooks/useInputState";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import AuthContext from "@/context/AuthContext";

function Register() {
  const { register, error } = useContext(AuthContext);
  const [username, handleChangeUsername, resetUsername] = useInputState("");
  const [email, handleChangeEmail, resetEmail] = useInputState("");
  const [password, handleChangePassword, resetPassword] = useInputState("");
  const [passwordConf, handleChangePasswordConf, resetPasswordConf] =
    useInputState("");

  const handleSubmit = (evnt) => {
    evnt.preventDefault();

    if (password !== passwordConf) {
      toast.error("Passwords Don't Match, Please Try Again !!");
      return;
    }

    if (password.length < 8) {
      toast.error("Password must be at least 8 character");
      return;
    }

    register({
      username,
      email,
      password,
    });
    // resetUsername();
    // resetEmail();
    // resetPassword();
    // resetPasswordConf();
  };
  return (
    <section style={{ marginTop: "8rem" }}>
      <ToastContainer position="top-center" style={{ width: "30rem" }} />
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
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

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-4">
                          <TextValidator
                            type="email"
                            value={email}
                            onChange={handleChangeEmail}
                            fullWidth
                            variant="standard"
                            label="Email Adress"
                            validators={["required"]}
                            errorMessages={["Please Enter A Valid Email !!"]}
                          />
                        </div>
                      </div>

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

                      <div className="form-check d-flex justify-content-center mb-5">
                        <div class="mb-3 form-check">
                          <input
                            type="checkbox"
                            class="form-check-input"
                            id="exampleCheck1"
                            required
                          />
                        </div>
                        <label
                          className="form-check-label"
                          htmlFor="form2Example3"
                        >
                          I do accept the{" "}
                          <Link href="/terms-conditions">
                            <a style={{ color: "#03c7ff" }}>
                              {" "}
                              Terms & Conditions{" "}
                            </a>
                          </Link>{" "}
                          of your site.
                        </label>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
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
                          Register
                        </button>
                      </div>
                      <p className="small text-center fw-bold mt-2 pt-1 mb-0">
                        Already have an account?{" "}
                        <Link href="/account/login">
                          <a style={{ color: "#03c7ff" }}>Login</a>
                        </Link>
                      </p>
                    </ValidatorForm>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="/images/fayyad.jpg"
                      className="img-fluid"
                      alt="Sample image"
                    />
                  </div>
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
