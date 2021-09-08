import styles from "@/styles/LoginDialogRemember.module.css";
import React, { useContext, useState } from "react";
import Link from "next/link";
import AuthContext from "@/context/AuthContext";
import Dialog from "@material-ui/core/Dialog";

export default function LoginDialogRemember() {
  /* -----------Auth User context----------------- */
  const { user } = useContext(AuthContext);
  /* --------------------X------------------------ */

  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {!user && (
        <div>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
          >
            <div className={styles.mainContainer}>
              <h1 className={styles.signUpText}>#Sign Up Now</h1>
              <p className={styles.descriptionText}>
                SIGN UP NOW TO GET UPDATES ON THE LATEST & GREATEST PRODUCTS
              </p>
              <div className={styles.containerBtns}>
                <Link href="/account/login" passHref={true}>
                  <button onClick={handleClose} className={styles.signUpBtn}>
                    Sign Up
                  </button>
                </Link>
                <button onClick={handleClose} className={styles.RemindMeBtn}>
                  remind me later
                </button>
              </div>
            </div>
          </Dialog>
        </div>
      )}
    </>
  );
}
