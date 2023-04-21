import * as React from "react";
import { styled, alpha, createStyles, makeStyles } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Button, Link } from "@mui/material";
import adobeCloud from "../Images/creative-cloud.png";
import adobePng from "../Images/adobe.png";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "40px",

  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  border: "1px solid lightgray",
  borderRadius: "40px",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const RoundButton1 = styled(Button)({
  borderRadius: "30px",
  marign: "0px 5px",
  paddingLeft: "15px",
  paddingRight: "15px",
  textTransform: "none",
  fontSize: 17,
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
});
export const RoundButton2 = styled(Button)({
  borderRadius: "30px",
  marign: "0px 5px",
  paddingLeft: "15px",
  paddingRight: "15px",
  borderColor: "lightgray",
  textTransform: "none",
  fontSize: 17,
  color: "black",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
});

export default function AppNavigation() {
  const pages = ["For You", "Discover", "Livestream", "Hire", "Jobs"];

  return (
    <Box sx={{ flexGrow: 1, bgcolor: "#fff" }}>
      <AppBar
        position="static"
        sx={{
          bgcolor: "#fff",
          color: "#000",
          boxShadow: "0px 0px 1px 0px gray",
        }}
      >
        <Toolbar>
          <Typography
            variant="h5"
            color="inherit"
            sx={{ mr: 2, fontWeight: "bold" }}
          >
            Bẽhance
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              typography: "body1",
              "& > :not(style) + :not(style)": {
                ml: 2,
              },
            }}
          >
            {pages.map((page) => (
              <Link
                href={`/${page.toLocaleLowerCase()}`}
                key={page}
                underline="none"
                variant="h6"
                sx={{
                  height: "62px",
                  color: "inherit",
                  display: "flex",
                  alignItems: "center",
                  "&:hover": {
                    borderBottom: "2px solid purple",
                  },
                }}
              >
                {page}
              </Link>
            ))}
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              sx={{ width: "402px" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: "10px" }}>
            <RoundButton1 size="medium" variant="outlined">
              Login
            </RoundButton1>
            <RoundButton1 size="medium" variant="contained">
              Sign Up
            </RoundButton1>
            <Typography variant="h6" color="lightgray">
              |
            </Typography>
            <RoundButton2 size="medium" variant="outlined">
              <img src={adobeCloud} width="25px" height="25px" /> Free Trial
            </RoundButton2>
            <RoundButton2 size="medium">
              <img src={adobePng} width="25px" height="25px" />
              Adobe
            </RoundButton2>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
