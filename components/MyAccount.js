import styles from "@/styles/MyAccount.module.css";

function MyAccount({ account }) {
  return (
    <div className={`${styles.main}`}>
      <div className={styles.padding}>
        <div className="row container d-flex justify-content-center">
          <div className="col-xl-12 col-md-12 col-xs-2">
            <div className={`${styles.card} ${styles.userCardFull}`}>
              <div className={`row ${styles.ml0} ${styles.mr0}`}>
                <div
                  className={`col-sm-4 ${styles.bgLiteGreen} ${styles.userProfile}`}
                >
                  <div
                    className={` ${styles.cardBlock} text-center text-white`}
                  >
                    <div className={`${styles.mb25}`}>
                      <img
                        src="https://img.icons8.com/bubbles/100/000000/user.png"
                        className={styles.imgRadius}
                        alt="User-Profile-Image"
                      />
                    </div>
                    <h3 className="f-w-600">{account.username}</h3>
                    <h5>Be Safe !!</h5>
                    <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                  </div>
                </div>
                <div className="col-sm-8">
                  <div className={styles.cardBlock}>
                    <h6
                      className={` ${styles.mb20} ${styles.pb5} ${styles.bBDefault} ${styles.fw600}`}
                    >
                      Information
                    </h6>
                    <div className="row">
                      <div className="col-sm-6">
                        <p className={` ${styles.mb10} ${styles.fw600}`}>
                          Email Address
                        </p>
                        <h6 className={`${styles.textMuted} f-w-400`}>
                          {account.email}
                        </h6>
                      </div>
                      <div className="col-sm-6">
                        <p className={` ${styles.mb10} ${styles.fw600}`}>
                          Phone Number
                        </p>
                        <h6 className={`${styles.textMuted} f-w-400`}>
                          {account.phone}
                        </h6>
                      </div>
                    </div>
                    <h6
                      className={` ${styles.mb20} ${styles.mt40} ${styles.pb5} ${styles.bBDefault} ${styles.fw600}`}
                    >
                      Projects
                    </h6>
                    <div className="row">
                      <div className="col-sm-6">
                        <p className={` ${styles.mb10} ${styles.fw600}`}>
                          Recent
                        </p>
                        <h6 className={`${styles.textMuted} f-w-400`}>
                          Sam Disuja
                        </h6>
                      </div>
                      <div className="col-sm-6">
                        <p className={` ${styles.mb10} ${styles.fw600}`}>
                          Most Viewed
                        </p>
                        <h6 className={` ${styles.textMuted} f-w-400`}>
                          Dinoter husainm
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAccount;
