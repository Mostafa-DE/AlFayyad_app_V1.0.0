import React, { useContext, useEffect, useState } from "react";
import styles from "@/styles/OrderInformationsForms.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { CartContext } from "@/context/CartContext";
import emailjs from "emailjs-com";
import { API_URL } from "../config";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Slide from "@material-ui/core/Slide";
import { FaTimes } from "react-icons/fa";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function OrderInformationsForms() {
  const router = useRouter();
  const { cart } = useContext(CartContext);
  const { items = [] } = cart;
  const cartTotal = cart.cartTotal;
  const totalAmount = cartTotal.toFixed(2);

  const [nameOrder, setNameOrder] = useState(
    items.map((itemName) => itemName.name)
  );
  console.log(nameOrder);

  const [values, setValues] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    building: "1",
    phone: "",
    nameOrder: "",
    qty: items.map((item) => item.qty) || "1",
    amount: totalAmount,
  });

  const handleChangeInput = (evnt) => {
    const { name, value } = evnt.target;
    setValues({ ...values, [name]: value });
  };

  const [openConfirmOrder, setopenConfirmOrder] = useState(false);

  const handleClickOpen = () => {
    setopenConfirmOrder(true);
  };

  const handleClose = () => {
    setopenConfirmOrder(false);
  };

  const handleSubmit = async (evnt) => {
    evnt.preventDefault();
    // emailjs
    //   .sendForm(
    //     "service_8swmbyy",
    //     "template_ezya1ej",
    //     evnt.target,
    //     "user_tjMhMjtx9IxF7pqse8vPx"
    //   )
    //   .then(() => toast.success("Great The Message Was Sent :)"))
    //     .then(() => router.push("/"))
    //   .catch((err) => console.log(err));
    // toast.success("Awesome Your Meassage Was Sent :)");
    // router.push("/payment/invoiceOrder");
    console.log(values);
    //   const res = await fetch(`${API_URL}/orders`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(values),
    //   });
    //   if (!res.ok) {
    //     toast.error("Oh No, Somthing Went Wrong!!");
    //   } else {
    //     router.push("/products/shoppingCart");
    //   }
    // };
  };

  /*------------------Validation TextField phone number-------------------*/
  useEffect(() => {
    ValidatorForm.addValidationRule("isPhoneNumber", (value) => {
      if (value.length > 10 || value.length < 10) {
        return false;
      }
      return true;
    });
  });

  useEffect(() => {
    ValidatorForm.addValidationRule("isNumber", (value) => {
      if (value.match(/^[A-Za-z]+$/)) {
        return false;
      }
      return true;
    });
  });

  useEffect(() => {
    ValidatorForm.addValidationRule("isLocalNumber", (value) => {
      if (value.match("078") || value.match("079") || value.match("077")) {
        return true;
      }
      return false;
    });
  });
  /*-----------------------------------X-----------------------------------*/

  return (
    <section>
      <ToastContainer position="top-center" style={{ width: "30rem" }} />
      <ValidatorForm onSubmit={handleSubmit} className="mx-1 mx-md-4">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="text-black" style={{ borderRadius: "25px" }}>
                <div className=" p-md-5">
                  <div className="row justify-content-center">
                    {/*--------------------Forms Order informations--------------------*/}
                    <div
                      className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1"
                      style={{ paddingLeft: "0", paddingRight: "2rem" }}
                    >
                      <div className="text-center h1  mb-5 mx-1 mx-md-4 mt-5">
                        Shipping Address
                      </div>
                      <div className="row">
                        <div className="d-flex flex-row align-items-center">
                          <div className="form-outline flex-fill mb-3">
                            <TextValidator
                              type="text"
                              name="email"
                              value={values.email}
                              onChange={handleChangeInput}
                              fullWidth
                              variant="standard"
                              label="Email Address (important)"
                              validators={["required", "isEmail"]}
                              errorMessages={[
                                "Please Enter A Email !!",
                                "The Email Is Invalid !!",
                              ]}
                            />
                          </div>
                        </div>

                        <div className="col d-flex">
                          <div className="mb-4">
                            <TextValidator
                              type="text"
                              name="firstName"
                              value={values.firstName}
                              onChange={handleChangeInput}
                              variant="standard"
                              label="First Name"
                              validators={["required"]}
                              errorMessages={["Please Enter A First Name !!"]}
                            />
                          </div>

                          <div className="  mb-4 mx-3">
                            <TextValidator
                              type="text"
                              name="lastName"
                              value={values.lastName}
                              onChange={handleChangeInput}
                              variant="standard"
                              label="Last Name"
                              validators={["required"]}
                              errorMessages={["Please Enter A Last Name !!"]}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="form-outline flex-fill mb-3">
                        <TextValidator
                          type="text"
                          name="address"
                          value={values.address}
                          onChange={handleChangeInput}
                          fullWidth
                          variant="standard"
                          label="Full Address"
                          validators={["required"]}
                          errorMessages={["Please Enter An Address !!"]}
                        />
                      </div>

                      <div className="row">
                        <div className="col d-flex">
                          <div className="form-outline flex-fill mb-3">
                            <TextValidator
                              type="text"
                              name="city"
                              value={values.city}
                              onChange={handleChangeInput}
                              fullWidth
                              variant="standard"
                              label="City"
                              validators={["required"]}
                              errorMessages={["Please Enter A City !!"]}
                            />
                          </div>

                          <div className="  mb-4 mx-3">
                            <TextValidator
                              type="text"
                              name="building"
                              value={values.building}
                              onChange={handleChangeInput}
                              variant="standard"
                              label="Building Number"
                              validators={["isNumber"]}
                              errorMessages={["Must Be Number !!"]}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center">
                        <div className="form-outline flex-fill mb-5">
                          <TextValidator
                            type="text"
                            name="phone"
                            value={values.phone}
                            onChange={handleChangeInput}
                            fullWidth
                            variant="standard"
                            label="Phone Number (important)"
                            validators={[
                              "required",
                              "isNumber",
                              "isPhoneNumber",
                              "isLocalNumber",
                            ]}
                            errorMessages={[
                              "Please Enter A Phone Number !!",
                              "Phone Number Must Be A Numbers !!",
                              "Phone Number Must Be (10 number) !!",
                              "Phone Number Must Begin With (078 , 079, 077)",
                            ]}
                          />
                        </div>
                      </div>
                      <div className={styles.totalAmountForm}>
                        Total Amount:{" "}
                        <input
                          value={totalAmount}
                          name="amount"
                          readOnly
                          className={styles.inputTotalAmount}
                        />{" "}
                        JD
                      </div>
                      <div className="d-flex justify-content-around  ">
                        <button type="submit" className={styles.btnCheckout}>
                          Checkout <i className="fas fa-credit-card"></i>
                        </button>

                        {/*----------------Dialog Confirm Order----------------*/}
                        <Dialog
                          open={openConfirmOrder}
                          TransitionComponent={Transition}
                          keepMounted
                          onClose={handleClose}
                          aria-labelledby="alert-dialog-slide-title"
                          aria-describedby="alert-dialog-slide-description"
                        >
                          <DialogContent>
                            <div>
                              <p className={styles.thanksText}>
                                <span>Thank you.</span> We have received your
                                order and will contact you as soon as possible,
                                We hope your experience was awesome.
                              </p>
                              <hr />
                            </div>
                            <div className="col-md-6 text-right mt-4">
                              <h4 className={styles.alfayyadText}>Al Fayyad</h4>
                              <span className={styles.alfayyadSpan}>
                                For European Products
                              </span>
                            </div>
                            <TableContainer>
                              <Table style={{ minWidth: "300px" }}>
                                <TableHead>
                                  <TableRow>
                                    <TableCell align="left">Product</TableCell>

                                    <TableCell align="center">Total</TableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {items.map((item) => (
                                    <TableRow key={item.id}>
                                      <TableCell align="inherit">
                                        {item.name}
                                        <br />
                                        {item.qty} X {item.price} JD
                                      </TableCell>

                                      <TableCell align="center">
                                        {item.qty * item.price} JD
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </TableContainer>
                            <div className={styles.totalAmount}>
                              <span>Total Amount:</span> {totalAmount} JD
                            </div>
                            <div className={styles.info}>
                              <p>
                                <strong>Note!!</strong> <br /> Delivery fees
                                will be added automatically
                                <br />
                                {"2.50 JD Inside Amman, 3.50 JD Outside Amman"}
                              </p>
                            </div>
                            <div className={styles.containerBtn}>
                              <button
                                type="button"
                                className={styles.btnConfirm}
                              >
                                Return to cart
                              </button>
                              <button
                                className={styles.btnCancel}
                                onClick={handleClose}
                              >
                                Cancel
                              </button>
                            </div>
                          </DialogContent>
                        </Dialog>
                        {/*----------------------------X-----------------------------*/}

                        <Link href="/products/shoppingCart">
                          <a className={styles.returnCart}>Return to cart</a>
                        </Link>
                      </div>
                    </div>
                    {/*------------------------------------X-----------------------------------*/}

                    {/*------------------------------Details order table-------------------------------*/}
                    <div
                      className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2"
                      style={{ paddingLeft: "8rem" }}
                    >
                      <TableContainer>
                        <Table style={{ maxWidth: "420px" }}>
                          <TableHead>
                            <TableRow>
                              <TableCell align="left">Image</TableCell>
                              <TableCell align="left">Product</TableCell>

                              <TableCell align="center">QTY</TableCell>
                              <TableCell align="center">Amount</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {items.map((item) => (
                              <TableRow key={item.id}>
                                <TableCell component="th" scope="row">
                                  <img
                                    name="img"
                                    src={item.images[0].url}
                                    width={90}
                                    height={70}
                                    alt="..."
                                    style={{ borderRadius: "15px" }}
                                  />
                                </TableCell>
                                <TableCell align="inherit">
                                  <input
                                    style={{
                                      border: "none",
                                    }}
                                    readOnly
                                    name="name"
                                    value={item.name}
                                  />
                                </TableCell>

                                <TableCell align="center">
                                  <input
                                    style={{
                                      border: "none",
                                      textAlign: "center",
                                      maxWidth: "2.5rem",
                                    }}
                                    name="qty"
                                    value={item.qty}
                                    readOnly
                                  />
                                </TableCell>
                                <TableCell align="center">
                                  {item.qty * item.price}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </div>
                    {/*-------------------------------------X-------------------------------------------*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ValidatorForm>
    </section>
  );
}

export default OrderInformationsForms;
