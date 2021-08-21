import styles from "@/styles/DrawerCart.module.css";
import React, { useState } from "react";
import Link from "next/link";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { AiOutlineLine } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Slide from "@material-ui/core/Slide";
import swal from "sweetalert";

/*------------------------transition for drawer--------------------*/
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
/*-----------------------------------X-----------------------------*/

/*-------------------Alert(error) when cart list empty-------------*/
const alertError = () => {
  swal("Oh No 😔", "Your cart is empty add some products to continue", "error");
};
/*----------------------------------X------------------------------*/

/*------------error for uWallet payment method------------*/
const alertErrorPayment = () => {
  swal(
    "Sorry 😔 this option will be available soon, try with cash method.",
    "",
    "error"
  );
};
/*------------------------------X-------------------------*/

export default function DrawerCart({ cart, removeFromCart }) {
  /*---------------Context shopping cart------------*/
  const { items = [] } = cart;
  const cartTotal = cart.cartTotal;
  const totalAmount = cartTotal.toFixed(2);
  /*--------------------------X---------------------*/

  /*---state for handle drawer cart (open/close)----*/
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(!open);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  /*------------------------X-----------------------*/

  /*-----state for handle dialog payment method-----*/
  const [openPaymentMethod, setPaymentMethod] = useState(false);
  const handleClickOpen = () => {
    setPaymentMethod(true);
  };
  const handleClose = () => {
    setPaymentMethod(false);
  };
  /*-------------------------X----------------------*/

  return (
    <div>
      {/*------------------cart icon---------------*/}
      <CssBaseline />
      <IconButton
        aria-label="open drawer"
        edge="end"
        onClick={handleDrawerOpen}
      >
        <HiOutlineShoppingCart className={styles.shoppingCartIcon} />
      </IconButton>
      {/*----------------------X-------------------*/}

      <Drawer anchor="right" open={open}>
        {/*-----------------Close button icon------------*/}
        <div style={{ margin: "1rem 0 2rem 0" }} onClick={handleDrawerClose}>
          <IconButton onClick={handleDrawerClose}>
            <FaTimes className={styles.closeDrawer} />
          </IconButton>
        </div>
        {/*--------------------------X-------------------*/}

        {/*-------table show all product in cart list--------*/}
        {items.length === 0 ? (
          <p className={styles.cartEmpty}>
            <span>Your Cart Is Empty 😔</span>
            <br /> Add some products to show here
          </p>
        ) : null}
        <TableContainer style={{ maxWidth: "320px" }}>
          <Table style={{ minWidth: "310px" }}>
            <TableBody>
              {items.map((item) => (
                <TableRow key={item.id}>
                  <TableCell component="th" scope="row">
                    <img
                      src={item.images[0].url}
                      width={100}
                      height={60}
                      alt={item.name}
                      className={styles.img}
                    />
                  </TableCell>
                  <TableCell align="inherit">
                    {item.name} <br /> {item.qty} X {item.price.toFixed(2)} JD
                  </TableCell>

                  <TableCell>
                    <i
                      onClick={() => removeFromCart(item)}
                      className={`fas fa-trash ${styles.deleteBtn} `}
                    ></i>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/*----------------------X---------------------------*/}

        {/*------------------Text total amount-----------*/}
        <div className={styles.totalAmount}>
          <p className={styles.totalP}>total:</p>
          <p className={styles.priceP}> {totalAmount} JD</p>
        </div>
        {/*--------------------------x-------------------*/}

        <div>
          {/*----------Button (view cart) & (checkout)----------*/}
          <div className={styles.containerBtn}>
            <Link href="/products/shoppingCart" passHref={true}>
              <button className={styles.btn}>View Cart</button>
            </Link>
            {items.length === 0 ? (
              <button className={styles.btn} onClick={alertError}>
                Checkout
              </button>
            ) : (
              <button className={styles.btn} onClick={handleClickOpen}>
                Checkout
              </button>
            )}
          </div>
          {/*----------------------------X----------------------*/}

          {/*--------------- dialog for payment method-------------*/}
          <Dialog
            open={openPaymentMethod}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
          >
            <FaTimes onClick={handleClose} className={styles.closeIcon} />

            <DialogContent className={styles.dialogContent}>
              <div className={styles.main}>
                <h1 className={styles.h1Text}>
                  Please choose one of the following payment methods
                  <span>
                    <AiOutlineLine />
                  </span>
                </h1>
                <div className={styles.container}>
                  <div className={styles.ContainerCash}>
                    <h4 className={styles.textImg}>Cash Payment</h4>
                    <Link href="/payment/order" passHref={true}>
                      <img
                        className={`img-fluid ${styles.cashImg}`}
                        src="/images/fayyad/cash.jpg"
                        alt="payment method"
                      />
                    </Link>
                  </div>
                  <div className={styles.uWalletContainerImg}>
                    <h4 className={styles.textImg}>Pay Through</h4>

                    <img
                      className={`img-fluid ${styles.uWalletImg}`}
                      src="/images/fayyad/uWallet.bmp"
                      onClick={alertErrorPayment}
                      alt="payment method"
                    />
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          {/*-----------------------------X------------------------*/}
        </div>
      </Drawer>
    </div>
  );
}
