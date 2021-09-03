import styles from "@/styles/ShoppingCart.module.css";
import React, { useContext, useState } from "react";
import { AiOutlineLine } from "react-icons/ai";
import { CartContext } from "@/context/CartContext";
import { LanguageContext } from "@/context/LanguageContext";
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

const languageWords = {
  english: {
    TitleCartListLanguage: "Cart List",
    EmptyCartLanguage: "Your Cart Is Empty 😔",
    AddProductsLanguage: "Add Some Products To Show Here",
    ContinueBtnLanguage: "Continue Shopping",
    TitleImageTable: "Image",
    TitleNameTable: "Name",
    TitlePriceTable: "Price",
    TitleQtyTable: "QTY",
    TitleAmountTable: "Amount",
    CheckoutBtnLanguage: "Checkout",
    TitlePaymentMethodsLanguage:
      "Please Choose One Of The Following Payment Methods",
    CashPaymentLanguage: "Cash Payment",
    ThroughPaymentLanguage: "Pay Through",
    TitleAlertCheckoutLanguage: "Oh No 😔",
    TextAlertCheckoutLanguage:
      "Your cart is empty add some products to continue",
    TextAlertUwalletLanguage:
      "Sorry 😔 this option will be available soon, try with cash method.",
  },
  arabic: {
    TitleCartListLanguage: "عربة التسوق",
    EmptyCartLanguage: "😔 عربة التسوق الخاصة بك فارغة",
    AddProductsLanguage: "أضف بعض المنتجات لتظهر هنا",
    ContinueBtnLanguage: "مواصلة التسوق",
    TitleImageTable: "الصورة",
    TitleNameTable: "الإسم",
    TitlePriceTable: "السعر",
    TitleQtyTable: "الكمية",
    TitleAmountTable: "المجموع",
    CheckoutBtnLanguage: "اطلب الآن",
    TitlePaymentMethodsLanguage: "الرجاء اختيار إحدى طرق الدفع التالية",
    CashPaymentLanguage: "الدفع نقداً",
    ThroughPaymentLanguage: "الدفع من خلال",
    TitleAlertCheckoutLanguage: "😔 نعتذر",
    TextAlertCheckoutLanguage:
      "عربة التسوق الخاصة بك فارغة أضف بعض المنتجات للمتابعة",
    TextAlertUwalletLanguage:
      "عذراً 😔 ، سيتوفر هذا الخيار قريبًا ، جرب الطريقة النقدية",
  },
};

/*---------------transition for dialog payment methods-----------------*/
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
/*-----------------------------------X---------------------------------*/

function ShoppingCart() {
  /*----------------------context language-------------------*/
  const { language } = useContext(LanguageContext);
  const {
    TitleCartListLanguage,
    EmptyCartLanguage,
    AddProductsLanguage,
    ContinueBtnLanguage,
    TitleImageTable,
    TitleNameTable,
    TitlePriceTable,
    TitleQtyTable,
    TitleAmountTable,
    CheckoutBtnLanguage,
    TitlePaymentMethodsLanguage,
    CashPaymentLanguage,
    ThroughPaymentLanguage,
    TitleAlertCheckoutLanguage,
    TextAlertCheckoutLanguage,
    TextAlertUwalletLanguage,
  } = languageWords[language];
  /*-----------------------------X---------------------------*/

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
    swal(TitleAlertCheckoutLanguage, TextAlertCheckoutLanguage, "error");
  };
  /*------------------------------X-------------------------*/

  /*------------error for uWallet payment method------------*/
  const alertErrorPayment = () => {
    swal(TextAlertUwalletLanguage, "", "error");
  };
  /*------------------------------X-------------------------*/

  return (
    <div>
      <h1 className={styles.h1Text}>
        {TitleCartListLanguage}
        <span>
          <AiOutlineLine />
        </span>
      </h1>
      {/*----------------message text when cart empty-------------------*/}
      {items.length === 0 ? (
        <div className={styles.containerCartEmpty}>
          <h4 className={styles.h2CartEmpty}>
            <span>{EmptyCartLanguage}</span> <br />
            <br /> {AddProductsLanguage}
          </h4>
          <Link href="/products/products-list" passHref={true}>
            <button className={styles.continueBtn}>
              {" "}
              {ContinueBtnLanguage}{" "}
            </button>
          </Link>
        </div>
      ) : null}
      {/*-------------------------------X-------------------------------*/}

      {/*-----------------------cart list details-----------------------*/}
      <TableContainer>
        <Table style={{ minWidth: "750px" }}>
          <TableHead>
            <TableRow>
              <TableCell align="left"> {TitleImageTable} </TableCell>
              <TableCell align="inherit"> {TitleNameTable} </TableCell>
              <TableCell align="center"> {TitlePriceTable} </TableCell>
              <TableCell align="center"> {TitleQtyTable} </TableCell>
              <TableCell align="center"> {TitleAmountTable} </TableCell>
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
            {CheckoutBtnLanguage} <GiCash style={{ fontSize: "1.5rem" }} />
          </button>
        ) : (
          <button className={styles.checkOutBtn} onClick={handleClickOpen}>
            {CheckoutBtnLanguage} <GiCash style={{ fontSize: "1.5rem" }} />
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
                  {TitlePaymentMethodsLanguage}
                  <span>
                    <AiOutlineLine />
                  </span>
                </h1>
                <div className={styles.container}>
                  <div className={styles.ContainerCash}>
                    <h4 className={styles.textImg}> {CashPaymentLanguage} </h4>
                    <Link href="/payment/order" passHref={true}>
                      <img
                        className={`img-fluid ${styles.cashImg}`}
                        src="/images/fayyad/cash.jpg"
                        alt="payment photo"
                      />
                    </Link>
                  </div>
                  <div className={styles.uWalletContainerImg}>
                    <h4 className={styles.textImg}>
                      {" "}
                      {ThroughPaymentLanguage}{" "}
                    </h4>
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
