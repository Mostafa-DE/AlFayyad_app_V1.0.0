import React, { useContext } from "react";
import styles from "@/styles/ShoppingCart.module.css";
import Layout from "./Layout";
import { AiOutlineLine } from "react-icons/ai";
import { CartContext } from "@/context/CartContext";
import Link from "next/link";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

function ShoppingCart() {
  const { cart, removeFromCart, addQty, removeQty } = useContext(CartContext);
  const { items = [] } = cart;
  const cartTotal = cart.cartTotal;
  const totalAmount = cartTotal.toFixed(2);
  return (
    <Layout title="Shopping Cart">
      <h1 className={styles.h1Text}>
        Shopping List
        <span>
          <AiOutlineLine />
        </span>
      </h1>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
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
                    style={{ borderRadius: "15px" }}
                  />
                </TableCell>
                <TableCell align="inherit">{item.name}</TableCell>
                <TableCell align="center">{item.price} JD</TableCell>
                <TableCell align="center">
                  {item.qty}
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    {item.qty !== 1 ? (
                      <i
                        onClick={() => removeQty(item)}
                        className={`fas fa-minus ${styles.minus}`}
                      ></i>
                    ) : (
                      <i
                        onClick={() => removeFromCart(item)}
                        className={`fas fa-minus ${styles.minus}`}
                      ></i>
                    )}

                    <i
                      onClick={() => addQty(item)}
                      className={`fas fa-plus ${styles.plus}`}
                    ></i>
                  </div>
                </TableCell>
                <TableCell align="center">
                  {item.price.toFixed(2) * item.qty} JD
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
      <div className={styles.checkOutContainer}>
        <div className={styles.totalAmount}>
          <p className={styles.totalP}>total amount:</p>
          <p className={styles.priceP}> {totalAmount} JD</p>
        </div>
        <button className={styles.checkOutBtn}>
          Check Out <i className="fas fa-credit-card"></i>
        </button>
      </div>
    </Layout>
  );
}

export default ShoppingCart;
