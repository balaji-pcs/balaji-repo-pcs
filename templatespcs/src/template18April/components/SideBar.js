import * as React from "react";
import Box from "@mui/material/Box";
import {
  Button,
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import img from "../images/stack.png";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import LockIcon from "@mui/icons-material/Lock";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import CancelIcon from "@mui/icons-material/Cancel";
import styled from "@emotion/styled";
import { greenColor } from "../customColors/ThemeAndColor";
import page from "../images/landing-page.png";
import LaunchIcon from "@mui/icons-material/Launch";

const sideMenuItems = [
  { icon: <SignalCellularAltIcon />, title: "Dashboard" },
  { icon: <PeopleAltIcon />, title: "Customers" },
  { icon: <ShoppingBagIcon />, title: "Products" },
  { icon: <PersonIcon />, title: "Account" },
  { icon: <SettingsIcon />, title: "Settings" },
  { icon: <LockIcon />, title: "Login" },
  { icon: <PersonAddAlt1Icon />, title: "Register" },
  { icon: <CancelIcon />, title: "Error" },
];
const ListItemStyle = styled("li")({
  width: "200px",
  borderRadius: "10px",
  color: "#fff",
  "&:hover": { color: greenColor, backgroundColor: "#2c3955" },
});

export default function SideBar() {
  return (
    <Box
      sx={{
        minWidth: "13%",
        height: "100vh",
        backgroundColor: "#111827",
        padding: "10px",
        color: "#fff",
      }}
    >
      <List>
        {/* logo */}
        <ListItem>
          <img src={img} width="30px" height="30px" />
        </ListItem>
        <ListItem>
          <Card
            sx={{
              backgroundColor: "#1b263d",
              display: "flex",
              alignItems: "center",
            }}
          >
            <CardContent>
              <Typography variant="h7" color="#fff">
                Acme Inc
              </Typography>
              <br />
              <Typography variant="caption" color="lightgrey">
                Your tier : Premium
              </Typography>
            </CardContent>
            <UnfoldMoreIcon color="success" fontSize="small" />
          </Card>
        </ListItem>
      </List>

      <Divider sx={{ borderColor: "gray" }} />
      <List sx={{ height: "50vh" }}>
        {/* menu */}
        {sideMenuItems?.map((item, index) => {
          return (
            <ListItem key={item.title} disablePadding>
              <ListItemStyle>
                <ListItemButton>
                  <ListItemIcon sx={{ color: "inherit" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItemStyle>
            </ListItem>
          );
        })}
      </List>
      <Divider sx={{ borderColor: "gray", marginBottom: "10px" }} />
      <Typography variant="h7">Need more features?</Typography>
      <br />
      <span style={{ fontSize: ".7rem", fontWeight: "lighter", color: "gray" }}>
        Checkout our Pro solutions template.
      </span>
      <img src={page} height="160px" width="160px" />

      <Button
        variant="contained"
        color="success"
        sx={{ width: "90%", margin: "10px", padding: "8px 10px" }}
      >
        Pro live preview
        <LaunchIcon />
      </Button>
    </Box>
  );
}
