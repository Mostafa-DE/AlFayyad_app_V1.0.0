import React, { useContext } from "react";
import styles from "@/styles/WishList.module.css";
import Layout from "./Layout";
import { AiOutlineLine } from "react-icons/ai";
import { WishContext } from "@/context/WishContext";
import { CartContext } from "@/context/CartContext";
import Link from "next/link";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

function ShoppingCart() {
  const { wishProduct, removeFromWishList } = useContext(WishContext);
  /* -----------Cart Shopping context----------------- */
  const { addToCart } = useContext(CartContext);
  /* -----------------------X------------------------- */
  const { items = [] } = wishProduct;
  return (
    <Layout title="Shopping Cart">
      <h1 className={styles.h1Text}>
        WishList
        <span>
          <AiOutlineLine />
        </span>
      </h1>
      <TableContainer>
        <Table style={{ minWidth: "750px" }}>
          <TableHead>
            <TableRow>
              <TableCell align="left"></TableCell>
              <TableCell align="center">Image</TableCell>
              <TableCell align="center">Product</TableCell>
              <TableCell align="cenetr">Price</TableCell>
              <TableCell align="center">Stock Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <i
                    onClick={() => removeFromWishList(item)}
                    className={`fas fa-trash ${styles.deleteBtn} `}
                  ></i>
                </TableCell>
                <TableCell component="th" scope="row">
                  <img
                    src={item.images[0].url}
                    width={175}
                    height={130}
                    alt={item.name}
                    style={{ borderRadius: "15px" }}
                  />
                </TableCell>
                <TableCell align="center">{item.name}</TableCell>
                <TableCell align="left">{item.price} JD</TableCell>
                <TableCell align="center">In Stock</TableCell>
                <TableCell>
                  <button
                    className={styles.addBtn}
                    onClick={() => addToCart(item)}
                  >
                    Add To Cart
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className={styles.checkOutContainer}>
        <Link href="/products/productsList">
          <button className={styles.backBtn}>Back To Products List</button>
        </Link>
      </div>
    </Layout>
  );
}

export default ShoppingCart;
