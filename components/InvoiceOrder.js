import styles from "@/styles/InvoiceOrder.module.css";
import React, { useContext, useEffect } from "react";
import { CartContext } from "@/context/CartContext";
import { LanguageContext } from "@/context/LanguageContext";
import Link from "next/link";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Swal from "sweetalert2";
import AnimationGongrats from "./AnimationGongrats";
import { ImWhatsapp } from "react-icons/im";
import { SiMessenger } from "react-icons/si";
import { IoMdMail } from "react-icons/io";
import { FaMobileAlt } from "react-icons/fa";

const languageWords = {
  english: {
    ThankYouLanguage: "Thank you.",
    ReceivedOrderTextLanguage:
      "We have received your order and will contact you as soon as possible, We hope your experience was awesome. Please check your email inbox, we sent you an invoice email.",
    PleaaseNoteLanguage: "Please note",
    ContactMethodsLanguage:
      "that you will be contacted within 48 hours for delivery, for assistance please feel free to contact us on each of the following:-",
    OrderDetailsLanguage: "Order Details",
    NameTableLanguage: "Name",
    QtyTableLanguage: "QTY",
    PriceTableLanguage: "Price",
    TotalTableLanguage: "Total",
    ReminderLanguage: "Reminder !!",
    DeliveryFeesLanguage:
      "Delivery fees will be added automatically 2.50 JD Inside Amman, 4 JD Outside Amman",
    ReturnToCartBtnLanguage: "Return To Cart",
    TotalAmountLanguage: "Total Amount:",
    AlertOrderReceivedLanguage:
      "Congrats, your order has been received successfully 😉",
  },
  arabic: {
    ThankYouLanguage: "شكراً لك",
    ReceivedOrderTextLanguage:
      "لقد تلقينا طلبك وسنتصل بك في أقرب وقت ممكن ، ونأمل أن تكون تجربتك رائعة. يرجى التحقق من صندوق البريد الإلكتروني الخاص بك ، لقد أرسلنا لك فاتورة بالبريد الإلكتروني",
    PleaaseNoteLanguage: "يرجى الإنتباه ",
    ContactMethodsLanguage:
      "أنه سيتم الاتصال بك في غضون 48 ساعة للتوصيل ، للحصول على المساعدة ، لا تتردد في الاتصال بنا على كل مما يلي",
    OrderDetailsLanguage: "معلومات الطلب",
    NameTableLanguage: "الإسم",
    QtyTableLanguage: "الكمية",
    PriceTableLanguage: "السعر",
    TotalTableLanguage: "المجموع",
    ReminderLanguage: "!! تذكير",
    DeliveryFeesLanguage:
      "تضاف رسوم التوصيل تلقائيا 2.50 دينار داخل عمان و 4 دينار خارج عمان",
    ReturnToCartBtnLanguage: "العودة إلى السلة",
    AlertOrderReceivedLanguage: "😉 تهانينا لقد تم إستلام طلبك بنجاح",
  },
};

function InvoiceOrder() {
  /*----------------------context language-------------------*/
  const { language } = useContext(LanguageContext);
  const {
    ThankYouLanguage,
    ReceivedOrderTextLanguage,
    PleaaseNoteLanguage,
    ContactMethodsLanguage,
    OrderDetailsLanguage,
    NameTableLanguage,
    QtyTableLanguage,
    PriceTableLanguage,
    TotalTableLanguage,
    ReminderLanguage,
    DeliveryFeesLanguage,
    ReturnToCartBtnLanguage,
    AlertOrderReceivedLanguage,
  } = languageWords[language];
  /*-----------------------------X---------------------------*/

  /*-------------context shopping cart-----------*/
  const { cart } = useContext(CartContext);
  const { items = [] } = cart;
  const cartTotal = cart.cartTotal;
  const totalAmount = cartTotal.toFixed(2);
  /*----------------------X---------------------*/

  /*---------alert (sweetalert) all done--------*/
  Swal.fire({
    position: "center",
    icon: "success",
    title: AlertOrderReceivedLanguage,
    showConfirmButton: false,
    timer: 2500,
  });
  /*-----------------------X--------------------*/

  return (
    <div className={styles.main}>
      <AnimationGongrats />
      <div>
        {/*-------------------Thanks message paragraph------------------*/}
        <p className={styles.thanksText}>
          <span> {ThankYouLanguage} </span> {ReceivedOrderTextLanguage}
        </p>
        {/*-------------------------------X-----------------------------*/}

        <hr />
        {/*-------------------contact message paragraph-----------------*/}
        <div className={styles.contact48H}>
          <span> {PleaaseNoteLanguage} </span> {ContactMethodsLanguage}
        </div>
        {/*-------------------------------X-----------------------------*/}

        {/*------------------social contact methods---------------------*/}
        <div className="d-flex flex-row align-items-center justify-content-center ">
          <a
            href="http://m.me/fayyado"
            className={`${styles.contactBtns} mx-1 mt-3`}
          >
            <SiMessenger className={styles.socialContact} />
          </a>

          <a
            href="https://wa.me/message/TDOPR6Z3RHN7L1"
            className={`${styles.contactBtns} mx-1 mt-3`}
          >
            <ImWhatsapp className={styles.socialContact} />
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&source=mailto&to=fayyadm524@gmail.com"
            className={`${styles.contactBtns} mx-1 mt-3`}
          >
            <IoMdMail className={styles.socialContact} />
          </a>

          <a
            href="tel:0787731525"
            className={`${styles.contactBtns} mx-1 mt-3`}
          >
            <FaMobileAlt className={styles.socialContact} />
          </a>
        </div>
        {/*----------------------------X--------------------------------*/}
        <hr />
      </div>

      {/*--------------------order details text---------------------*/}
      <div className="col-md-6 text-right mt-4">
        <h4 className={styles.alfayyadText}> {OrderDetailsLanguage} </h4>
      </div>
      {/*----------------------------X------------------------------*/}

      {/*----------table show all product in your order-------------*/}
      <TableContainer>
        <Table style={{ minWidth: "300px" }}>
          <TableHead>
            <TableRow>
              <TableCell align="inherit"> {NameTableLanguage} </TableCell>
              <TableCell align="center"> {QtyTableLanguage} </TableCell>
              <TableCell align="center"> {PriceTableLanguage} </TableCell>
              <TableCell align="center"> {TotalTableLanguage} </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id}>
                <TableCell align="inherit">{item.name}</TableCell>
                <TableCell align="center">{item.qty}</TableCell>
                <TableCell align="center">{item.price}</TableCell>
                <TableCell align="center">{item.qty * item.price} JD</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/*---------------------------X-------------------------------*/}

      {/*----------------------total amount-------------------------*/}
      <div className={styles.totalAmount}>
        <span>Total Amount:</span> {totalAmount} JD
      </div>
      {/*---------------------------X-------------------------------*/}

      {/*----------------------delivery fees------------------------*/}
      <div className={styles.info}>
        <p>
          <strong> {ReminderLanguage} </strong> <br /> {DeliveryFeesLanguage}
        </p>
      </div>
      {/*----------------------------X------------------------------*/}

      {/*-----------------return to cart button---------------------*/}
      <Link href="/products/shopping-cart" passHref={true}>
        <button type="button" className={styles.btnConfirm}>
          {ReturnToCartBtnLanguage}
        </button>
      </Link>
      {/*--------------------------X--------------------------------*/}
    </div>
  );
}

export default InvoiceOrder;
