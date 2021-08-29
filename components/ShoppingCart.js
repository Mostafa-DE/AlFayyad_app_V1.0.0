import styles from "@/styles/ShoppingCart.module.css";
import React, { useContext, useState } from "react";
import { AiOutlineLine } from "react-icons/ai";
import { CartContext } from "@/context/CartContext";
import { FaTimes } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { HiPlusSm } from "react-icons/hi";
import { HiMinusSm } from "react-icons/hi";
import { GiCash } from "react-icons/gi";
import Link from "next/link";
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

/*---------------transition for dialog payment methods-----------------*/
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
/*-----------------------------------X---------------------------------*/

function ShoppingCart() {
  /*-------------------------context shopping cart-------------------------*/
  const { cart, removeFromCart, addQty, removeQty } = useContext(CartContext);
  const { items = [] } = cart;
  const cartTotal = cart.cartTotal;
  const totalAmount = cartTotal.toFixed(2);
  /*-------------------------------------X---------------------------------*/

  /*--------------state for dialog payment methods---------------*/
  const [openPaymentMethod, setPaymentMethod] = useState(false);
  const handleClickOpen = () => {
    setPaymentMethod(true);
  };

  const handleClose = () => {
    setPaymentMethod(false);
  };
  /*-------------------------------X----------------------------*/

  /*---alert error when click on checkout when cart empty---*/
  const alertError = () => {
    swal(
      "Oh No 😔",
      "Your cart is empty add some products to continue",
      "error"
    );
  };
  /*------------------------------X-------------------------*/

  /*------------error for uWallet payment method------------*/
  const alertErrorPayment = () => {
    swal(
      "Sorry 😔 this option will be available soon, try with cash method.",
      "",
      "error"
    );
  };
  /*------------------------------X-------------------------*/

  return (
    <div>
      <h1 className={styles.h1Text}>
        Cart List
        <span>
          <AiOutlineLine />
        </span>
      </h1>

      {/*----------------message text when cart empty-------------------*/}
      {items.length === 0 ? (
        <div className={styles.containerCartEmpty}>
          <h4 className={styles.h2CartEmpty}>
            <span>Your Cart Is Empty 😔</span> <br /> Add Some Products To Show
            Here
          </h4>
          <Link href="/products/products-list" passHref={true}>
            <button className={styles.continueBtn}>Continue Shopping</button>
          </Link>
        </div>
      ) : null}
      {/*-------------------------------X-------------------------------*/}

      {/*-----------------------cart list details-----------------------*/}
      <TableContainer>
        <Table style={{ minWidth: "750px" }}>
          <TableHead>
            <TableRow>
              <TableCell align="center">Image</TableCell>
              <TableCell align="inherit">Product</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">QTY</TableCell>
              <TableCell align="center">Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id}>
                <TableCell component="th" scope="row">
                  <img
                    src={item.images[0].url}
                    width={175}
                    height={130}
                    alt={item.name}
                    className={styles.imgProduct}
                  />
                </TableCell>
                <TableCell align="inherit">{item.name}</TableCell>
                <TableCell align="center">{item.price} JD</TableCell>
                <TableCell align="center">
                  {item.qty}
                  <div className={styles.addOrRemoveQty}>
                    {item.qty !== 1 ? (
                      <HiMinusSm
                        className={styles.minus}
                        onClick={() => removeQty(item)}
                      />
                    ) : (
                      <HiMinusSm
                        className={styles.minus}
                        onClick={() => removeFromCart(item)}
                      />
                    )}
                    <HiPlusSm
                      className={styles.plus}
                      onClick={() => addQty(item)}
                    />
                  </div>
                </TableCell>
                <TableCell align="center">
                  {item.price.toFixed(2) * item.qty} JD
                </TableCell>
                <TableCell>
                  <FaTrash
                    className={styles.deleteBtn}
                    onClick={() => removeFromCart(item)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/*-------------------------------X-------------------------------*/}

      {/*----------------------dialog payment methods-------------------*/}
      <div className={styles.checkOutContainer}>
        <div className={styles.totalAmount}>
          <p className={styles.totalP}>total amount:</p>
          <p className={styles.priceP}> {totalAmount} JD</p>
        </div>

        {items.length === 0 ? (
          <button className={styles.checkOutBtn} onClick={alertError}>
            Checkout <GiCash style={{ fontSize: "1.5rem" }} />
          </button>
        ) : (
          <button className={styles.checkOutBtn} onClick={handleClickOpen}>
            Checkout <GiCash style={{ fontSize: "1.5rem" }} />
          </button>
        )}
        <div>
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
                <h1 className={styles.h1TextPayment}>
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
                        alt="payment photo"
                      />
                    </Link>
                  </div>
                  <div className={styles.uWalletContainerImg}>
                    <h4 className={styles.textImg}>Pay Through</h4>
                    <img
                      className={`img-fluid ${styles.uWalletImg}`}
                      src="/images/fayyad/uWallet.jpg"
                      onClick={alertErrorPayment}
                      alt="payment photo"
                    />
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      {/*-------------------------------X-------------------------------*/}
    </div>
  );
}

export default ShoppingCart;
