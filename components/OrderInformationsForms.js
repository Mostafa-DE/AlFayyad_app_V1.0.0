import { useContext, useEffect, useState } from "react";
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
// import useInputState from "@/Hooks/useInputState";
import { API_URL } from "../config";

function OrderInformationsForms() {
  const router = useRouter();
  const { cart } = useContext(CartContext);
  const { items = [] } = cart;
  const cartTotal = cart.cartTotal;
  const totalAmount = cartTotal.toFixed(2);

  const [values, setValues] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    building: "1",
    phone: "",
    nameOrder: "",
    qty: items.map((item) => item.qty),
    amount: totalAmount,
  });

  const handleChangeInput = (evnt) => {
    const { name, value } = evnt.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (evnt) => {
    evnt.preventDefault();
    console.log(values);
    const res = await fetch(`${API_URL}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    if (!res.ok) {
      toast.error("Oh No, Somthing Went Wrong!!");
    } else {
      router.push("/products/shoppingCart");
    }
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
  /*-----------------------------------X-----------------------------------*/

  return (
    <section style={{ marginTop: "10rem" }}>
      <ToastContainer position="top-center" style={{ width: "30rem" }} />
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <div className="text-center h1  mb-5 mx-1 mx-md-4 mt-4">
                      Shipping address
                    </div>

                    <ValidatorForm
                      onSubmit={handleSubmit}
                      className="mx-1 mx-md-4"
                    >
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
                              label="Email Address"
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
                          label="Address"
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
                            ></TextValidator>
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
                            ]}
                            errorMessages={[
                              "Please Enter A Phone Number !!",
                              "Phone Number Must Be A Numbers !!",
                              "Phone Number Must Be (10 number) !!",
                            ]}
                          />
                        </div>
                      </div>
                      <div
                        style={{
                          marginBottom: "3rem",
                          fontSize: "1.4rem",
                          fontWeight: "600",
                          borderLeft: "4px solid #03c7ff",
                          paddingLeft: "0.5rem",
                        }}
                      >
                        Total Amount: {totalAmount} JD
                      </div>
                      <div className="d-flex justify-content-around  ">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg"
                          style={{
                            padding: "0.5rem 0.8rem",
                            fontSize: "0.9rem",
                            backgroundColor: "#03c7ff",
                            border: "1px solid #03c7ff",
                          }}
                        >
                          Continue to Shipping
                        </button>
                        <Link href="/products/shoppingCart">
                          <a
                            style={{
                              marginTop: "0.5rem",
                              color: "#333",
                              textDecoration: "none",
                              textAlign: "center",
                            }}
                          >
                            Return to cart
                          </a>
                        </Link>
                      </div>
                    </ValidatorForm>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <TableContainer>
                      <Table style={{ minWidth: "450px" }}>
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
                                  width={120}
                                  height={100}
                                  alt="..."
                                  style={{ borderRadius: "15px" }}
                                />
                              </TableCell>
                              <TableCell
                                value={values.nameOrder}
                                name="nameOrder"
                                align="inherit"
                              >
                                {item.name}
                              </TableCell>

                              <TableCell name="qty" align="center">
                                {item.qty}
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrderInformationsForms;
