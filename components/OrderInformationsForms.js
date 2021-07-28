import Link from "next/link";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import useInputState from "@/Hooks/useInputState";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { useContext } from "react";
import AuthContext from "@/context/AuthContext";
import { InputLabel } from "@material-ui/core";

function OrderInformationsForms() {
  return (
    <section style={{ marginTop: "8rem" }}>
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
                      //   onSubmit={handleSubmit}
                      className="mx-1 mx-md-4"
                    >
                      <div className="row">
                        <div className="col d-flex">
                          <div className="mb-4">
                            <TextValidator
                              type="text"
                              // value={username}
                              // onChange={handleChangeUsername}
                              variant="standard"
                              label="First Name"
                              validators={["required"]}
                              errorMessages={["Please Enter A First Name !!"]}
                            />
                          </div>

                          <div className="  mb-4 mx-3">
                            <TextValidator
                              type="text"
                              // value={email}
                              // onChange={handleChangeEmail}
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
                          // value={password}
                          // onChange={handleChangePassword}
                          fullWidth
                          variant="standard"
                          label="Address"
                          validators={["required"]}
                          errorMessages={["Please Enter An Address !!"]}
                        />
                      </div>

                      <div className="d-flex flex-row align-items-center">
                        <div className="form-outline flex-fill mb-3">
                          <TextValidator
                            type="text"
                            // value={passwordConf}
                            // onChange={handleChangePasswordConf}
                            fullWidth
                            variant="standard"
                            label="City"
                            validators={["required"]}
                            errorMessages={["Please Enter A City !!"]}
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center">
                        <div className="form-outline flex-fill mb-5">
                          <TextValidator
                            type="text"
                            // value={passwordConf}
                            // onChange={handleChangePasswordConf}
                            fullWidth
                            variant="standard"
                            label="Phone Number (important)"
                            validators={["required"]}
                            errorMessages={[
                              "Please Enter a valid phone number !!",
                            ]}
                          />
                        </div>
                      </div>

                      <div className="d-flex justify-content-around  ">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg"
                          style={{
                            padding: "0.5rem 0.8rem",
                            fontSize: "1rem",
                            backgroundColor: "#03c7ff",
                            border: "1px solid #03c7ff",
                          }}
                        >
                          Continue to Shipping
                        </button>
                        <Link href="/products/productsList">
                          <a
                            style={{
                              marginTop: "0.5rem",
                              color: "#333",
                              textDecoration: "none",
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
                            {/* <TableCell align="">Price</TableCell> */}
                            <TableCell align="center">QTY</TableCell>
                            <TableCell align="center">Amount</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <TableRow>
                            {" "}
                            {/* key={item.id} */}
                            <TableCell component="th" scope="row">
                              <img
                                src="/images/fayyad/grill.jpg"
                                width={120}
                                height={100}
                                alt="..."
                                style={{ borderRadius: "15px" }}
                              />
                            </TableCell>
                            <TableCell align="inherit">
                              multi function ozito
                            </TableCell>
                            {/* <TableCell align="center">2 JD</TableCell> */}
                            <TableCell align="center">1</TableCell>
                            <TableCell align="center">45 JD</TableCell>
                          </TableRow>
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
