import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

function Dashboard({ orders }) {
  return (
    <div style={{ marginTop: "10rem" }}>
      <div className="col-md-6 text-right mt-4">
        <h4 style={{ color: "#03c7ff", fontSize: "2rem" }}> All Orders</h4>
      </div>
      <TableContainer>
        <Table style={{ maxWidth: "1400px" }}>
          <TableHead>
            <TableRow>
              <TableCell>Full Name</TableCell>
              <TableCell>Email Address</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>City</TableCell>
              <TableCell>Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>
                  {order.firstName} {order.lastName}
                </TableCell>
                <TableCell>{order.email}</TableCell>
                <TableCell>0{order.phone}</TableCell>
                <TableCell>{order.city}</TableCell>
                <TableCell>{order.address}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Dashboard;
