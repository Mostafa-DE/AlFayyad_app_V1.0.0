import styles from "@/styles/ContactForm.module.css";
import { useEffect } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import useInputState from "@/Hooks/useInputState";
import emailjs from "emailjs-com";
import swal from "sweetalert";

function Login() {
  /*----------------------State for form---------------------*/
  const [name, handleChangeName, resetName] = useInputState("");
  const [email, handleChangeEmail, resetEmail] = useInputState("");
  const [message, handleChangeMessage, resetMessage] = useInputState("");
  const [phone, handleChangePhone, resetPhone] = useInputState("");
  /*-----------------------------X---------------------------*/

  const handleSubmit = (evnt) => {
    evnt.preventDefault();
    //send email using EmailJS
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
    //reset all state
    resetName();
    resetEmail();
    resetMessage();
    resetPhone();
  };

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
                  label="Your Name"
                  validators={["required"]}
                  errorMessages={["Please Enter Your Name !!"]}
                />
                <TextValidator
                  type="text"
                  name="phone"
                  value={phone}
                  onChange={handleChangePhone}
                  fullWidth
                  style={{ marginLeft: "1rem" }}
                  variant="standard"
                  label="Your Phone (Optional)"
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
                  label="What's on your mind 🙂"
                  validators={["required"]}
                  errorMessages={["Please let us know what's on your mind :)"]}
                />
              </div>
              <div className="d-flex justify-content-between align-items-center"></div>
              <div className="text-center text-lg-start mt-4 pt-2">
                <button type="submit" className={styles.sendBtn}>
                  Send <i className="fas fa-paper-plane"></i>
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
