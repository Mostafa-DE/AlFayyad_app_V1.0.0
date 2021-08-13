import React, { useContext } from "react";
import styles from "@/styles/InvoiceOrder.module.css";
import "react-toastify/dist/ReactToastify.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { CartContext } from "@/context/CartContext";
import Swal from "sweetalert2";

function InvoiceOrder() {
  const { cart } = useContext(CartContext);
  const { items = [] } = cart;
  const cartTotal = cart.cartTotal;
  const totalAmount = cartTotal.toFixed(2);

  Swal.fire({
    position: "top-center",
    icon: "success",
    title: "All done 😉 ",
    showConfirmButton: false,
    timer: 3500,
  });

  return (
    <div className={styles.main}>
      <div>
        <p className={styles.thanksText}>
          <span>Thank you.</span> We have received your order and will contact
          you as soon as possible, We hope your experience was awesome.
        </p>
        <hr />
        <div className={styles.contact48H}>
          <span>Please note</span> that you will be contacted within 48 hours
          for delivery, for assistance please feel free to contact us on each of
          the following:-
        </div>

        <div className="d-flex flex-row align-items-center justify-content-center ">
          <a
            href="http://m.me/fayyado"
            className={`${styles.contactBtns} mx-1 mt-3`}
          >
            <i className="fab fa-facebook-messenger"></i>
          </a>

          <a
            href="https://wa.me/message/TDOPR6Z3RHN7L1"
            className={`${styles.contactBtns} mx-1 mt-3`}
          >
            <i className="fab fa-whatsapp"></i>
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&source=mailto&to=fayyadm524@gmail.com"
            className={`${styles.contactBtns} mx-1 mt-3`}
          >
            <i className="far fa-envelope"></i>
          </a>

          <a
            href="tel:0787731525"
            className={`${styles.contactBtns} mx-1 mt-3`}
          >
            <i className="fas fa-mobile-alt"></i>
          </a>
        </div>

        <hr />
      </div>
      <div className="col-md-6 text-right mt-4">
        <h4 className={styles.alfayyadText}>Order Details</h4>
      </div>
      <TableContainer>
        <Table style={{ minWidth: "300px" }}>
          <TableHead>
            <TableRow>
              <TableCell align="inherit">Product</TableCell>
              <TableCell align="center">Qty</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Total</TableCell>
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
      <div className={styles.totalAmount}>
        <span>Total Amount:</span> {totalAmount} JD
      </div>
      <div className={styles.info}>
        <p>
          <strong>Reminder !!</strong> <br /> Delivery fees will be added
          automatically
          <br />
          <strong>2.50 JD</strong> Inside Amman, <strong>3.50 JD</strong>{" "}
          Outside Amman
        </p>
      </div>
      <button type="button" className={styles.btnConfirm}>
        Return to cart
      </button>
    </div>
  );
}

export default InvoiceOrder;
