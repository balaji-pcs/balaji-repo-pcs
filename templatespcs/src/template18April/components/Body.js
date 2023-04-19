import * as React from "react";
import Box from "@mui/material/Box";
import {
  Avatar,
  Card,
  CardContent,
  Chip,
  Divider,
  LinearProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
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
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { products, orders } from "../DATA/orderAndProducts";
import { amberColor, redColor, tealColor } from "../customColors/ThemeAndColor";
import { blue, purple } from "@mui/material/colors";
export default function Body() {
  const [value1, setValue1] = React.useState(12);
  const [value2, setValue2] = React.useState(16);

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
            width: "18.55vw",
          }}
        >
          <CardContent>
            <Typography variant="caption">BUDGET</Typography>
            <Typography variant="h5" sx={{ fontWeight: "300" }}>
              $24k
            </Typography>
            <Typography variant="caption">
              <span style={{ color: `${value1 < 50 ? "red" : "green"}` }}>
                <ArrowDownwardIcon fontSize="small" />
                {value1}
              </span>{" "}
              Since last month
            </Typography>
          </CardContent>
          <Avatar sx={{ bgcolor: redColor }}>
            <MoneyIcon />
          </Avatar>
        </Card>
        <Card
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px",
            width: "18.55vw",
          }}
        >
          <CardContent>
            <Typography variant="caption">TOTAL CUSTOMERS</Typography>
            <Typography variant="h5" sx={{ fontWeight: "300" }}>
              1,6K
            </Typography>
            <Typography variant="caption">
              <span style={{ color: `${value2 < 15 ? "red" : "green"}` }}>
                <ArrowUpwardIcon fontSize="small" />
                {value2}
              </span>{" "}
              Since last month
            </Typography>
          </CardContent>
          <Avatar sx={{ bgcolor: tealColor }}>
            <PeopleAltIcon />
          </Avatar>
        </Card>
        <Card
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px",
            width: "18.55vw",
          }}
        >
          <CardContent>
            <Typography variant="caption">TASKS PROGRESS</Typography>
            <Typography variant="h5" sx={{ fontWeight: "300" }}>
              75.5%
            </Typography>
            <LinearProgress value={70} variant="determinate" />
          </CardContent>
          <Avatar sx={{ bgcolor: amberColor }}>
            <InsertChartOutlinedIcon />
          </Avatar>
        </Card>
        <Card
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px",
            width: "18.55vw",
          }}
        >
          <CardContent>
            <Typography variant="caption">TOTAL PROFIT</Typography>
            <Typography variant="h5" sx={{ fontWeight: "300" }}>
              $23k
            </Typography>
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
// table for products data
function Productdata() {
  return (
    <Box
      sx={{
        width: "22.5%",
        height: "40%",
      }}
    >
      <TableContainer variant="outlined" component={Paper}>
        <Typography sx={{ padding: "10px 20px" }} variant="h6">
          Latest Products
        </Typography>
        <Table>
          <TableHead>
            {products?.map((item, index) => {
              return (
                <TableRow key={index}>
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
          <TableRow>
            <TableCell></TableCell>
            <TableCell
              align="right"
              sx={{ display: "flex", flexDirection: "row" }}
            >
              <Typography color={blue[600]}>View all</Typography>
              <ArrowRightIcon color={blue[800]} />
            </TableCell>
          </TableRow>
        </Table>
      </TableContainer>
    </Box>
  );
}
//  table for order data
function Ordersdata() {
  return (
    <Box
      sx={{
        width: "71%",
        height: "40%",
      }}
    >
      <TableContainer variant="outlined" component={Paper}>
        <Typography sx={{ padding: "10px 20px" }} variant="h6">
          Latest Orders
        </Typography>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: "#d3d3d369" }}>
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
                    {/* chip to determine the order status*/}
                    <Chip
                      label={item.status}
                      size="small"
                      sx={{
                        bgcolor:
                          item.status === "DELEVERED"
                            ? tealColor
                            : item.status === "PENDING"
                            ? amberColor
                            : redColor,
                        color: "#fff",
                      }}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell
                align="right"
                sx={{ display: "flex", flexDirection: "row" }}
              >
                <Typography color={blue[600]}>View all</Typography>
                <ArrowRightIcon color={blue[800]} />
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Box>
  );
}
