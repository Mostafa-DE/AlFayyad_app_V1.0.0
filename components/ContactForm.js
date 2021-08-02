import { useEffect } from "react";
import { useRouter } from "next/router";
import emailjs from "emailjs-com";
import styles from "@/styles/ContactForm.module.css";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import useInputState from "@/Hooks/useInputState";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [name, handleChangeName, resetName] = useInputState("");
  const [email, handleChangeEmail, resetEmail] = useInputState("");
  const [message, handleChangeMessage, resetMessage] = useInputState("");
  const [phone, handleChangePhone, resetPhone] = useInputState("");
  const router = useRouter();
  const handleSubmit = (evnt) => {
    evnt.preventDefault();
    emailjs
      .sendForm(
        "service_8swmbyy",
        "template_b6gqepg",
        evnt.target,
        "user_tjMhMjtx9IxF7pqse8vPx"
      )
      .then(() => toast.success("Great The Message Was Sent :)"))
      //   .then(() => router.push("/"))
      .catch((err) => console.log(err));
    resetName();
    resetEmail();
    resetMessage();
    resetPhone();
  };

  /*------------------Validation TextField phone number-------------------*/
  useEffect(() => {
    ValidatorForm.addValidationRule("isNumber", (value) => {
      if (value.match(/^[A-Za-z]+$/)) {
        return false;
      }
      return true;
    });
  });
  /*-----------------------------------X-----------------------------------*/

  return (
    <section className={styles.main}>
      <ToastContainer position="top-center" style={{ width: "30rem" }} />
      <div className={`container-fluid ${styles.hCustom}`}>
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="/images/fayyad/contact.jpg"
              className="img-fluid"
              alt="Al_Fayyad"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
              <p className="lead fw-normal mt-3 mb-0 me-3 text-center">
                Contact Us with
              </p>
              <a
                href="http://m.me/fayyado"
                className={`${styles.contactBtns} mx-1 mt-3`}
              >
                <i className="fab fa-facebook-messenger"></i>
              </a>

              <a
                href="https://wa.me/message/TDOPR6Z3RHN7L1"
                className={`${styles.contactBtns} mx-1 mt-3`}
              >
                <i className="fab fa-whatsapp"></i>
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&source=mailto&to=fayyadm524@gmail.com"
                className={`${styles.contactBtns} mx-1 mt-3`}
              >
                <i className="far fa-envelope"></i>
              </a>

              <a
                href="tel:0787731525"
                className={`${styles.contactBtns} mx-1 mt-3`}
              >
                <i className="fas fa-mobile-alt"></i>
              </a>
            </div>

            <div className={`${styles.divider} d-flex align-items-center my-4`}>
              <p className="text-center fw-bold mx-3 mb-0">Or</p>
            </div>
            <ValidatorForm onSubmit={handleSubmit}>
              <div className="form-outline mb-3 d-flex">
                <TextValidator
                  type="text"
                  onChange={handleChangeName}
                  value={name}
                  name="name"
                  variant="standard"
                  label="Your Name"
                  validators={["required"]}
                  errorMessages={["Please Enter Your Name !!"]}
                />
                <TextValidator
                  type="text"
                  onChange={handleChangePhone}
                  value={phone}
                  name="phone"
                  style={{ marginLeft: "1rem" }}
                  variant="standard"
                  label="Your Phone (Optional)"
                  validators={["isNumber"]}
                  errorMessages={["Phone Number Must Be A Numbers !!"]}
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
                  label="Your Email Address"
                  validators={["required"]}
                  errorMessages={["Please Enter Your Email !!"]}
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
                  label="What's on your mind :)"
                  validators={["required"]}
                  errorMessages={["Please let us know what's on your mind :)"]}
                />
              </div>
              <div className="d-flex justify-content-between align-items-center"></div>
              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  style={{
                    paddingLeft: "2.5rem",
                    paddingRight: "2.5rem",
                    backgroundColor: "#03c7ff",
                    border: "1px solid #03c7ff",
                    borderRadius: "20px",
                  }}
                >
                  Send <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </ValidatorForm>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
