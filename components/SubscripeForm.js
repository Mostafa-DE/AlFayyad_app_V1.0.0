import styles from "@/styles/SubscripeForm.module.css";

function SubscripeForm() {
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
            <div className="form-group bg-white border rounded px-2 py-2 mb-2">
              <div className="row">
                <div className="col">
                  {" "}
                  <input
                    type="email"
                    name="email"
                    className={`${styles.formControl} pl-3 shadow-none bg-transparent border-0`}
                    placeholder="Email address"
                    required
                  />{" "}
                </div>
                <div className="col-auto">
                  {" "}
                  <button
                    type="submit"
                    className={`${styles.btn} btn-block ${styles.btnDark}`}
                  >
                    Get notified
                  </button>{" "}
                </div>
              </div>
            </div>{" "}
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

{
  /* <section className={`${styles.subscription} ${styles.bgWhite}`}>
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className={`${styles.subscriptionWrapper}`}>
                    <div className={`d-flex ${styles.subscriptionContent} justify-content-between align-items-center flex-column flex-md-row text-center text-md-left`}>
                        <h3 className="flex-fill">Subscribe <br /> to our newsletter</h3>
                        <form action="#" className={`row ${styles.flexFill}`}>
                            <div className="col-lg-7 my-md-2 my-2"> <input type="email" className={`${styles.formControl} px-4 border-0 w-100 text-center text-md-left`} id="email" placeholder="Your Email" name="email" /> </div>
                            <div className="col-lg-5 my-md-2 my-2"> <button type="submit" className={`${styles.btn} ${styles.btnPrimary} btn-lg border-0 w-100`}>Subscribe Now</button> </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section> */
}
