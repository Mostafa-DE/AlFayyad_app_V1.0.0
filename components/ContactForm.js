import styles from "@/styles/ContactForm.module.css";
import { useState, useEffect } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import useInputState from "@/Hooks/useInputState";
import emailjs from "emailjs-com";
import swal from "sweetalert";
import { SiMessenger } from "react-icons/si";
import { ImWhatsapp } from "react-icons/im";
import { FiMail } from "react-icons/fi";
import { FaMobileAlt } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";

function Login({ account }) {
  /*----------------------State for form---------------------*/
  const [name, setName] = useState(
    `${account.username === undefined ? "" : account.username}`
  );
  const handleChangeName = (evnt) => {
    setName(evnt.target.value);
  };
  const [email, setEmail] = useState(
    `${account.email === undefined ? "" : account.email}`
  );
  const handleChangeEmail = (evnt) => {
    setEmail(evnt.target.value);
  };

  const [message, handleChangeMessage, resetMessage] = useInputState("");

  const [phone, setPhone] = useState(
    `${account.phone === undefined ? "" : `0${account.phone}`}`
  );
  const handleChangePhone = (evnt) => {
    setPhone(evnt.target.value);
  };
  /*-----------------------------X---------------------------*/

  const handleSubmit = (evnt) => {
    evnt.preventDefault();
    /*------------send email using EmailJS------------*/
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
    /*-----------------------X------------------------*/

    /*---------------reset all state------------------*/
    resetMessage();
    setPhone("");
    setName("");
    setEmail("");
    /*-----------------------X------------------------*/
  };

  /*------------------Validation TextField phone number-------------------*/
  useEffect(() => {
    ValidatorForm.addValidationRule("isPhoneNumber", (value) => {
      if (value) {
        if (value.length > 10 || value?.length < 10) {
          return false;
        } else {
          return true;
        }
      } else {
        return true;
      }
    });
  });

  useEffect(() => {
    ValidatorForm.addValidationRule("isNumber", (value) => {
      if (value?.match(/^[A-Za-z]+$/)) {
        return false;
      }
      return true;
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
                <SiMessenger className={styles.socialContact} />
              </a>

              <a
                href="https://wa.me/message/TDOPR6Z3RHN7L1"
                className={`${styles.contactBtns} mx-1 mt-3`}
              >
                <ImWhatsapp className={styles.socialContact} />
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&source=mailto&to=fayyadm524@gmail.com"
                className={`${styles.contactBtns} mx-1 mt-3`}
              >
                <FiMail className={styles.socialContact} />
              </a>

              <a
                href="tel:0787731525"
                className={`${styles.contactBtns} mx-1 mt-3`}
              >
                <FaMobileAlt className={styles.socialContact} />
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
                  label="Your Phone"
                  validators={["isNumber", "isPhoneNumber"]}
                  errorMessages={[
                    "Phone Number Must Be A Numbers !!",
                    "Phone Number Must Be (10 number) !!",
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
                  errorMessages={["Please Enter A Valid Email !!"]}
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
                  Send <RiSendPlaneFill style={{ fontSize: "1.6rem" }} />
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
