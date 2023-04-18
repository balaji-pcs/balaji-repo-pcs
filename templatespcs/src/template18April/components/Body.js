import * as React from "react";
import Box from "@mui/material/Box";
import {
  Avatar,
  Card,
  CardContent,
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  makeStyles,
} from "@mui/material";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import MoneyIcon from "@mui/icons-material/Money";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";

import { products, orders } from "../DATA/orderAndProducts";

export default function Body() {
  return (
    <Box
      sx={{
        margin: "40px 20px",
        width: "100%",
        height: "93%",
      }}
    >
      <div className="bodyDiv">
        <Card
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",

            padding: "10px",
            width: "21.3%",
          }}
        >
          <CardContent>
            <Typography variant="caption">BUDGET</Typography>
            <Typography variant="h5" sx={{ fontWeight: "300" }}>
              $24k
            </Typography>
            <Typography variant="caption">BUDGET</Typography>
          </CardContent>
          <Avatar sx={{ bgcolor: "#cf4242" }}>
            <MoneyIcon />
          </Avatar>
        </Card>
        <Card
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px",
            width: "21.3%",
          }}
        >
          <CardContent>
            <Typography variant="caption">TOTAL CUSTOMERS</Typography>
            <Typography variant="h5" sx={{ fontWeight: "300" }}>
              1,6K
            </Typography>
            <Typography variant="caption">BUDGET</Typography>
          </CardContent>
          <Avatar sx={{ bgcolor: "#3db5a3" }}>
            <PeopleAltIcon />
          </Avatar>
        </Card>
        <Card
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px",
            width: "21.3%",
          }}
        >
          <CardContent>
            <Typography variant="caption">TASKS PROGRESS</Typography>
            <Typography variant="h5" sx={{ fontWeight: "300" }}>
              75.5%
            </Typography>
            <Typography variant="caption">BUDGET</Typography>
          </CardContent>
          <Avatar sx={{ bgcolor: "#f8b021" }}>
            <InsertChartOutlinedIcon />
          </Avatar>
        </Card>
        <Card
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px",
            width: "21.3%",
          }}
        >
          <CardContent>
            <Typography variant="caption">TOTAL PROFIT</Typography>
            <Typography variant="h5" sx={{ fontWeight: "300" }}>
              $23k
            </Typography>
            <Typography variant="caption">BUDGET</Typography>
          </CardContent>
          <Avatar sx={{ bgcolor: "#5048e5" }}>
            <AttachMoneyOutlinedIcon />
          </Avatar>
        </Card>
      </div>
      <div className="bodyDiv">
        <Productdata />
        <Ordersdata />
      </div>
    </Box>
  );
}

function Productdata() {
  return (
    <Box
      sx={{
        width: "312px",
        height: "434px",
      }}
    >
      <TableContainer variant="outlined" component={Paper}>
        <Typography sx={{ padding: "10px" }} variant="h6">
          Latest Products
        </Typography>
        <Table>
          <TableHead>
            {products?.map((item, index) => {
              return (
                <TableRow>
                  <TableCell align="left">{item.icon}</TableCell>
                  <TableCell align="left">
                    <Typography sx={{ padding: 0 }}>{item.lable}</Typography>
                    <Typography variant="caption">
                      updated about {item.update} hours
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <MoreVertOutlinedIcon />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableHead>
        </Table>
      </TableContainer>
    </Box>
  );
}

function Ordersdata() {
  return (
    <Box
      sx={{
        width: "980px",
        height: "434px",
      }}
    >
      <TableContainer variant="outlined" component={Paper}>
        <Typography sx={{ padding: "10px" }} variant="h6">
          Latest Orders
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="LEFT">
                <Typography variant="overline">ORDER REF</Typography>
              </TableCell>
              <TableCell align="LEFT">
                <Typography variant="overline">CUSTOMER</Typography>
              </TableCell>
              <TableCell align="LEFT">
                <Typography variant="overline">DATE</Typography>
              </TableCell>
              <TableCell align="LEFT">
                <Typography variant="overline">STATUS</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders?.map((item) => {
              return (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="LEFT">
                    <Typography variant="body2">{item.orderRef}</Typography>
                  </TableCell>
                  <TableCell align="LEFT">
                    <Typography variant="body2">{item.customer}</Typography>
                  </TableCell>
                  <TableCell align="LEFT">
                    <Typography variant="body2">{item.date}</Typography>
                  </TableCell>
                  <TableCell align="LEFT">
                    <Chip
                      label={item.status}
                      color={
                        item.status === "DELEVERED"
                          ? "success"
                          : item.status === "PENDING"
                          ? "warning"
                          : "error"
                      }
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
