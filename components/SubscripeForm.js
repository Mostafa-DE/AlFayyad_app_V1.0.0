import styles from "@/styles/SubscripeForm.module.css";
import { useState } from "react";
import emailjs from "emailjs-com";
import swal from "sweetalert";

function SubscripeForm() {
  /*--------state for input email------------*/
  const [email, setEmail] = useState("");
  const handleChange = (evnt) => {
    setEmail(evnt.target.value);
  };
  /*-------------------X---------------------*/

  /*--------send email using emailJS---------*/
  const handleSubmit = async (evnt) => {
    evnt.preventDefault();
    emailjs
      .sendForm(
        "service_8swmbyy",
        "template_b6gqepg",
        evnt.target,
        "user_tjMhMjtx9IxF7pqse8vPx"
      )
      .then(setEmail(""))
      .catch((err) => console.log(err));
    swal(
      "Thank You 😉",
      "Please note that there is no spam, just we will notify you for any new updates, discounts or products.",
      "success"
    );
    setEmail("");
  };
  /*--------------------X--------------------*/

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h6> JOIN OUR NEWSLETTER </h6>
        <h1>Subscribe to get Updated with new offers</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.containerEmail}>
            <input
              className={styles.inputEmail}
              type="email"
              name="email"
              placeholder="Enter Email Address"
              value={email}
              onChange={handleChange}
              required
            />
            <button className={styles.btnSubsecripe} type="submit">
              Get Notified
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SubscripeForm;
