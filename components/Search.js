import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/Search.module.css";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Dialog from "@material-ui/core/Dialog";
import { AiOutlineSearch } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Search() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const router = useRouter();
  const [term, setTerm] = useState("");
  const handleSubmit = (evnt) => {
    evnt.preventDefault();
    router.push(`/products/search?term=${term}`);
    setTerm("");
  };
  const handleChange = (evnt) => {
    setTerm(evnt.target.value);
  };

  return (
    <div>
      <AiOutlineSearch
        className={styles.searchIconNavbar}
        onClick={handleClickOpen}
      />

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <FaTimes onClick={handleClose} className={styles.closeIcon} />
        <DialogTitle
          className={styles.titleDialog}
          id="alert-dialog-slide-title"
        >
          {"What Are You Looking For??"}
        </DialogTitle>
        <DialogContent className={styles.dialogContent}>
          <DialogContentText id="alert-dialog-slide-description">
            <ValidatorForm onSubmit={handleSubmit}>
              <div className={styles.containerSearchField}>
                <TextValidator
                  type="text"
                  onChange={handleChange}
                  value={term}
                  fullWidth
                  variant="standard"
                  label="Search Here 😉"
                  validators={["required"]}
                  errorMessages={["You Can't Leave This Field Empty !!"]}
                />
                <button type="submit" className={styles.searchBtn}>
                  <AiOutlineSearch className={styles.searchIconDialog} />
                </button>
              </div>
            </ValidatorForm>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Search;
