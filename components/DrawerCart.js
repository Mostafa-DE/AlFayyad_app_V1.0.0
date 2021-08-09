import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import styles from "@/styles/DrawerCart.module.css";
import IconButton from "@material-ui/core/IconButton";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";
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
import { AiOutlineLine } from "react-icons/ai";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DrawerCart({ cart, removeFromCart }) {
  const { items = [] } = cart;
  const cartTotal = cart.cartTotal;
  const totalAmount = cartTotal.toFixed(2);

  console.log(cart);
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [openPaymentMethod, setPaymentMethod] = useState(false);

  const handleClickOpen = () => {
    setPaymentMethod(true);
  };

  const handleClose = () => {
    setPaymentMethod(false);
  };

  return (
    <div>
      <CssBaseline />

      <IconButton
        aria-label="open drawer"
        edge="end"
        onClick={handleDrawerOpen}
      >
        <HiOutlineShoppingCart className={styles.shoppingCartIcon} />
      </IconButton>

      <Drawer anchor="right" open={open}>
        <div style={{ margin: "1rem 0 2rem 0" }} onClick={handleDrawerClose}>
          <IconButton onClick={handleDrawerClose}>
            <FaTimes className={styles.closeDrawer} />
          </IconButton>
        </div>
        <TableContainer style={{ maxWidth: "320px" }}>
          <Table style={{ minWidth: "310px" }}>
            <TableHead>
              <p style={{ fontWeight: "700", marginLeft: "1rem" }}>
                Shopping Cart
              </p>
            </TableHead>
            <TableBody>
              {items.length === 0 ? (
                <p className={styles.cartEmpty}>
                  <span>Your Cart Is Empty 😔</span>
                  <br /> Add some products to show here
                </p>
              ) : null}
              {items.map((item) => (
                <TableRow key={item.id}>
                  <TableCell component="th" scope="row">
                    <img
                      src={item.images[0].url}
                      width={100}
                      height={60}
                      alt={item.name}
                      style={{ borderRadius: "15px" }}
                    />
                  </TableCell>
                  <TableCell align="inherit">
                    {item.name} <br /> {item.qty} X {item.price.toFixed(2)} JD
                  </TableCell>

                  <TableCell>
                    <i
                      onClick={() => removeFromCart(item)}
                      className="fas fa-trash"
                      style={{ cursor: "pointer", color: "#03c7ff" }}
                    ></i>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <div className={styles.totalAmount}>
          <p className={styles.totalP}>total:</p>
          <p className={styles.priceP}> {totalAmount} JD</p>
        </div>

        <div>
          <div className={styles.containerBtn}>
            <Link href="/products/shoppingCart">
              <button className={styles.btn}>View Cart</button>
            </Link>

            <button className={styles.btn} onClick={handleClickOpen}>
              Checkout
            </button>
          </div>

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
                    <Link href="/payment/order">
                      <img
                        className={`img-fluid ${styles.cashImg}`}
                        src="/images/fayyad/cash.jpg"
                      />
                    </Link>
                  </div>
                  <div className={styles.uWalletContainerImg}>
                    <h4 className={styles.textImg}>Pay Through</h4>
                    <Link href="#">
                      <img
                        className={`img-fluid ${styles.uWalletImg}`}
                        src="/images/fayyad/uWallet.bmp"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </Drawer>
    </div>
  );
}
