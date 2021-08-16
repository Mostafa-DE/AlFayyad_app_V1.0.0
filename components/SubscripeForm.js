import styles from "@/styles/SubscripeForm.module.css";
import { useState } from "react";
import emailjs from "emailjs-com";

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
      .then((res) => console.log(res))
      .then(setEmail(""))
      .catch((err) => console.log(err));
  };
  /*--------------------X--------------------*/

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-xl-8 col-lg-10 mx-auto">
          <div className={`${styles.card} p-5 px-5`}>
            <h2 className="font-weight-bold text-white">Stay tuned</h2>
            <h6 className={`mb-5 ${styles.textColor}`}>
              Subscribe to our newsletter and never miss our latest news,
              designs, and product updates.
            </h6>
            {/*-------------------------input email-----------------------------*/}
            <div className="form-group bg-white border rounded px-2 py-2 mb-2">
              <form className="row" onSubmit={handleSubmit}>
                <div className="col">
                  <input
                    type="email"
                    name="email"
                    className={`${styles.formControl} pl-3 shadow-none bg-transparent border-0`}
                    placeholder="Email address"
                    required
                    onChange={handleChange}
                    value={email}
                  />
                </div>
                <div className="col-auto">
                  <button
                    type="submit"
                    className={`${styles.btn} btn-block ${styles.btnDark}`}
                  >
                    Get notified
                  </button>
                </div>
              </form>
            </div>
            {/*------------------------------X----------------------------------*/}

            <span className={`mb-4 ${styles.textColor}`}>
              No spam, notifications only about new products, updates and
              freebies.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscripeForm;
