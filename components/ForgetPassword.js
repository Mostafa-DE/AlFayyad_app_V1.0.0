import styles from "@/styles/ForgetPassword.module.css";
import { useState } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import swal from "sweetalert";
import Link from "next/link";

function ForgetPassword() {
  /*--------------state for email input-------------*/
  const [email, setEmail] = useState("");
  const handleChangeEmail = (evnt) => {
    setEmail(evnt.target.value);
  };
  /*-------------------------X----------------------*/

  const handleSubmit = (evnt) => {
    evnt.preventDefault();
    swal(
      "Awesome 😉",
      "Check your email inbox, we sent you an email contain a recovery link",
      "success"
    );
    setEmail("");
  };

  return (
    <div className={styles.main}>
      <ValidatorForm onSubmit={handleSubmit}>
        <div className={styles.container}>
          <div className={styles.boxContainer}>
            <h4>Recover Password</h4>
            <hr />
            <p>Don't worry, happens to the most of us.</p>
            <TextValidator
              type="text"
              name="email"
              value={email}
              onChange={handleChangeEmail}
              fullWidth
              variant="standard"
              label="Please enter an email address"
              validators={["required", "isEmail"]}
              errorMessages={[
                "Please Enter A Email !!",
                "The Email Is Invalid !!",
              ]}
            />
            <button type="submit" className={styles.btn}>
              {" "}
              Email me a recovery link{" "}
            </button>
            <div className={styles.contactText}>
              If you have any problem with recover password{" "}
              <Link href="/contact">
                <a className={styles.link}>Contact Us</a>
              </Link>
            </div>
          </div>
        </div>
      </ValidatorForm>
    </div>
  );
}

export default ForgetPassword;
