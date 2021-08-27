import styles from "@/styles/MyAccount.module.css";
import Link from "next/link";
import { SiInstagram } from "react-icons/si";
import { FiFacebook } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";

function MyAccount({ account }) {
  const WelcomeArray = [
    " “ You look awesome today 😉 ” ",
    " “ You look incredible today 😉 ” ",
    " “ Stay safe 😍 ” ",
    " “ We hope that you fine 😍 ” ",
    " “ Be fine 🌹 ” ",
    " “ Be Strong 🌹 ” ",
    " “ Love the life you live, live the life you love 🌹 ”  ",
    " “ Enjoy in every moment in your life 😉 ”  ",
    ` “ Seize the days, ${account.username} 😉 ”  `,
  ];
  const randWord = Math.floor(Math.random() * WelcomeArray.length);
  const words = WelcomeArray[randWord];
  console.log(words);

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
                      {words}
                    </p>
                    <Link href="/products/shopping-cart" passHref={true}>
                      <button className={styles.btn}>
                        Your Cart <FaShoppingCart />
                      </button>
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
                    <SiInstagram className={styles.instaIcon} />{" "}
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
                    <FiFacebook className={styles.faceIcon} />
                    <a
                      className={styles.link}
                      href="https://web.facebook.com/fayyado"
                    >
                      Facebook
                    </a>
                  </h6>
                  <span className="text-secondary">@AlFayyad</span>
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
                    <Link href="/products/products-list" passHref={true}>
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
