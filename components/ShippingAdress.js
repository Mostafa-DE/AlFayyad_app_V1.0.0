import React, { useContext, useEffect, useState } from "react";
import styles from "@/styles/ShippingAddress.module.css";
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
import { AiOutlineLine } from "react-icons/ai";
import emailjs from "emailjs-com";
import { API_URL } from "../config";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Slide from "@material-ui/core/Slide";
import { FaTimes } from "react-icons/fa";

function ShippingAdress() {
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

  const handleSubmit = async (evnt) => {
    evnt.preventDefault();
    // emailjs
    //   .sendForm(
    //     "service_8swmbyy",
    //     "template_ezya1ej",
    //     evnt.target,
    //     "user_tjMhMjtx9IxF7pqse8vPx"
    //   )
    //   .then(() => router.push("/payment/invoiceOrder"))
    //   .catch((err) => console.log(err));
    router.push("/payment/invoiceOrder");
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
    <div className={styles.main}>
      <ToastContainer position="top-center" style={{ width: "30rem" }} />
      <nav className={`main-breadcrumb ${styles.nav}`}>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/">
              <a className={styles.link} style={{ color: "#03c7ff" }}>
                Home
              </a>
            </Link>
          </li>
          <li className="breadcrumb-item text-secondary">Informations</li>
          <li className="breadcrumb-item text-secondary" aria-current="page">
            Confirm Order
          </li>
        </ol>
      </nav>
      <ValidatorForm onSubmit={handleSubmit} className="mx-1 mx-md-4">
        <div className={styles.container}>
          <div className={styles.containerForms}>
            <h1 className={styles.h1Shipping}>
              Shipping Address
              <span>
                <AiOutlineLine />
              </span>
            </h1>
            {/* <div className={styles.shippingText}></div> */}
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

              <div className="col d-flex justify-content-evenly">
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
            <div className={styles.info}>
              <p>
                <strong>Note!!</strong> <br /> Delivery fees will be added
                automatically
                <br />
                <strong>2.50 JD</strong> Inside Amman, <strong>3.50 JD</strong>{" "}
                Outside Amman
              </p>
            </div>
            <div className="d-flex justify-content-around ">
              <button type="submit" className={styles.btnCheckout}>
                Confirm Order <i className="fas fa-credit-card"></i>
              </button>
              <Link href="/products/shoppingCart">
                <a className={styles.returnCart}>Return to cart</a>
              </Link>
            </div>
          </div>

          {/*--------------------details order------------------ */}
          <div className={styles.containerDetails}>
            {/* <div className={styles.orderText}></div> */}
            <h1 className={styles.h1Order}>
              Order Details
              <span>
                <AiOutlineLine />
              </span>
            </h1>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Image</TableCell>
                    <TableCell align="left">Product</TableCell>
                    <TableCell align="center">Qty</TableCell>
                    <TableCell align="center">Price</TableCell>
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
                      <TableCell align="center">{item.price} JD</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </ValidatorForm>
    </div>
  );
}

export default ShippingAdress;
