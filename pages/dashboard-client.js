import styles from "@/styles/dashboardOrderClient.module.css";
import { parseCookies } from "@/helpers/index.js";
import { API_URL } from "../config";
import { AiOutlineLine } from "react-icons/ai";
import Link from "next/link";
import Layout from "@/components/Layout";
import React, { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const languageWords = {
  english: {
    TitleOrdersHistoryLanguage: "Orders History",
    TextNoOrdersToShowLanguage: "Seems You Don't Have Any Order History",
    TextWaitingforLanguage: "What Are You Waiting For 🙄",
    ShopNowBtnLanguage: "Shop Now",
    OrderNumberLanguage: "Order Number",
    CreatedByLanguage: "By",
    AddressLanguage: "Address",
    CreatedDateLanguage: "Created Date",
    TotalAmountLanguage: "Total Amount",
    OrderStatusLanguage: "Order Status",
    TextOrderStatusLanguage: "Received",
  },
  arabic: {
    TitleOrdersHistoryLanguage: "سجل الطلبات",
    TextNoOrdersToShowLanguage: "يبدو أنه ليس لديك سجل للطلبات",
    TextWaitingforLanguage: "🙄 ما الذي تنتظره",
    ShopNowBtnLanguage: "تسوق الآن",
    OrderNumberLanguage: "رقم الطلب",
    CreatedByLanguage: "بواسطة",
    AddressLanguage: "العنوان",
    CreatedDateLanguage: "تاريخ الطلب",
    TotalAmountLanguage: "قيمة الطلب",
    OrderStatusLanguage: "حالة الطلب",
    TextOrderStatusLanguage: "تم الإستلام",
  },
};

export default function Dashboard({ orders }) {
  /*----------------------context language-------------------*/
  const { language } = useContext(LanguageContext);
  const {
    TitleOrdersHistoryLanguage,
    TextNoOrdersToShowLanguage,
    TextWaitingforLanguage,
    ShopNowBtnLanguage,
    OrderNumberLanguage,
    CreatedByLanguage,
    AddressLanguage,
    CreatedDateLanguage,
    TotalAmountLanguage,
    OrderStatusLanguage,
    TextOrderStatusLanguage,
  } = languageWords[language];
  /*-----------------------------X---------------------------*/

  return (
    <Layout title="Orders History | Al Fayyad Store">
      <>
        <h1 className={styles.h1OrdersHistory}>
          {TitleOrdersHistoryLanguage}
          <span>
            <AiOutlineLine />
          </span>
        </h1>
        {orders.length !== 0 ? (
          <>
            <Paper style={{ margin: "2rem 0 8rem 0" }}>
              <TableContainer>
                <Table style={{ minWidth: "950px" }}>
                  <TableHead className={styles.backgroundColorHeadTable}>
                    <TableRow>
                      <TableCell style={{ color: "#fff", fontWeight: 600 }}>
                        {OrderNumberLanguage}
                      </TableCell>
                      <TableCell
                        align="center"
                        style={{ color: "#fff", fontWeight: 600 }}
                      >
                        {CreatedByLanguage}
                      </TableCell>
                      <TableCell
                        align="center"
                        style={{ color: "#fff", fontWeight: 600 }}
                      >
                        {AddressLanguage}
                      </TableCell>
                      <TableCell
                        align="center"
                        style={{ color: "#fff", fontWeight: 600 }}
                      >
                        {CreatedDateLanguage}
                      </TableCell>

                      <TableCell
                        style={{ color: "#fff", fontWeight: 600 }}
                        align="center"
                      >
                        {TotalAmountLanguage}
                      </TableCell>
                      <TableCell
                        style={{ color: "#fff", fontWeight: 600 }}
                        align="center"
                      >
                        {OrderStatusLanguage}
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {orders.map((order) => (
                      <>
                        <TableRow hover key={order.id}>
                          <TableCell>0054522</TableCell>
                          <TableCell align="center">
                            {" "}
                            {order.firstName} {order.lastName}{" "}
                          </TableCell>
                          <TableCell align="center"> {order.address}</TableCell>
                          <TableCell align="center">
                            {" "}
                            {order.created_at.slice(0, -14)}{" "}
                          </TableCell>

                          <TableCell align="center">
                            {" "}
                            {order.amount} JD
                          </TableCell>
                          <TableCell
                            align="center"
                            style={{ fontWeight: 700, color: "#8ECE27" }}
                          >
                            {" "}
                            {TextOrderStatusLanguage}{" "}
                          </TableCell>
                        </TableRow>
                      </>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </>
        ) : (
          <div className={styles.containeraNoOrders}>
            <h1 className={styles.noOrdersText}>
              {TextNoOrdersToShowLanguage}
            </h1>
            <h3 className={styles.waitingText}> {TextWaitingforLanguage} </h3>
            <Link href="/products/products-list" passHref={true}>
              <button className={styles.ShopBtn}> {ShopNowBtnLanguage} </button>
            </Link>
          </div>
        )}
      </>
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);
  const res = await fetch(` ${API_URL}/orders/me `, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const orders = await res.json();

  return {
    props: {
      orders,
    },
  };
}
