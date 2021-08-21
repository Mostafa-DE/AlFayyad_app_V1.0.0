import styles from "@/styles/MyAccount.module.css";
import Link from "next/link";

function MyAccount({ account }) {
  return (
    <div className={`container ${styles.container}`}>
      <div className={`${styles.mainBody}`}>
        {/*------------nav on the top show user where he is---------------*/}
        <nav className="main-breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/">
                <a className={styles.link} style={{ color: "#03c7ff" }}>
                  Home
                </a>
              </Link>
            </li>
            <li className="breadcrumb-item text-secondary">Account</li>
            <li className="breadcrumb-item active" aria-current="page">
              My Account
            </li>
          </ol>
        </nav>
        {/*------------------------------X--------------------------------*/}

        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            {/*---------------first box show name & (hi word)-------------*/}
            <div className={`${styles.card} card`}>
              <div className={`card-body ${styles.cardBody}`}>
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    src="https://img.icons8.com/bubbles/100/000000/user.png"
                    className="img-radius"
                    alt="User-Profile-Image"
                  />
                  <div className="mt-3">
                    <h4> Hi 👋, {account.username}</h4>
                    <p
                      className="text-secondary mb-1"
                      style={{ paddingBottom: "1rem" }}
                    >
                      You look awesome today 😉
                    </p>
                    <Link href="/products/shoppingCart" passHref={true}>
                      <button className={styles.btn}>Your Cart</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/*-------------------------------X---------------------------*/}

            {/*----------second box show methods to contact us------------*/}
            <div className={`card mt-3 ${styles.card}`}>
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-center align-items-center flex-wrap">
                  <h6 className="mb-0">Follow Us</h6>
                </li>

                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-instagram mr-2 icon-inline text-danger"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>{" "}
                    <a
                      href="https://www.instagram.com/fayyado1/"
                      className={styles.link}
                    >
                      Instagram
                    </a>
                  </h6>
                  <span className="text-secondary">@fayyado</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-facebook mr-2 icon-inline text-primary"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                    <a
                      className={styles.link}
                      href="https://web.facebook.com/fayyado"
                    >
                      Facebook
                    </a>
                  </h6>
                  <span className="text-secondary">@AlFayyad</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <i className={`fas fa-mobile-alt ${styles.phoneIcon} `}></i>{" "}
                    <a href="tel:0787731525" className={styles.link}>
                      Call Us
                    </a>
                  </h6>
                  <span className="text-secondary">+962787731525</span>
                </li>
              </ul>
            </div>
            {/*----------------------------X------------------------------*/}
          </div>

          {/*---third box show details of user that currently logged in---*/}
          <div className="col-md-8">
            <div className={`card mb-3 ${styles.card}`}>
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Username</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {account.username}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Email</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">{account.email}</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Phone</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    0{account.phone}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Status</h6>
                  </div>
                  <div
                    className="col-sm-9 text-success"
                    style={{ fontWeight: "700" }}
                  >
                    Active
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Address</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">Jordan/Amman..</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-9">
                    <Link href="/products/productsList" passHref={true}>
                      <button className={styles.btn}>Go To Products</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*-----------------------------X-------------------------------*/}
        </div>
      </div>
    </div>
  );
}

export default MyAccount;
