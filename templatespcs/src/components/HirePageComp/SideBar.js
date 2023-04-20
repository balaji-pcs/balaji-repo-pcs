import * as React from "react";
import { styled, alpha, createStyles, makeStyles } from "@mui/material/styles";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button, Checkbox, Divider } from "@mui/material";
import { creativeFields } from "../Data/sidePanel";
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";
import InterestsOutlinedIcon from "@mui/icons-material/InterestsOutlined";
import PinDropOutlinedIcon from "@mui/icons-material/PinDropOutlined";
import HandymanOutlinedIcon from "@mui/icons-material/HandymanOutlined";
import LocationCityOutlinedIcon from "@mui/icons-material/LocationCityOutlined";

import employeesData from "../Data/employeesData.json";

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

export default function SideBar() {
  return (
    <Box
      sx={{
        width: "15vw",
        height: "89vh",
        padding: "17px 10px",
        borderRight: "1px solid lightgray",
      }}
    >
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search Creatives…"
          inputProps={{ "aria-label": "search" }}
          sx={{ width: "250px" }}
        />
      </Search>
      <Divider sx={{ margin: "15px 0px" }} />
      <SimpleAccordion />
      <Divider sx={{ margin: "15px 0px" }} />
    </Box>
  );
}

const RoundButton1 = styled(Button)({
  borderRadius: "30px",
  marign: "5px",
  paddingLeft: "15px",
  paddingRight: "15px",
  textTransform: "none",
  fontSize: 17,
  width: "100%",
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

function SimpleAccordion() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{ boxShadow: "none" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <PersonSearchOutlinedIcon fontSize="small" />
            &nbsp; Availability
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ maxHeight: "400px" }}>
          <RoundButton1 variant="outlined" sx={{ margin: "5px" }}>
            All
          </RoundButton1>
          <RoundButton1
            variant="outlined"
            sx={{
              margin: "5px",
              color: "#9c479c",
              borderColor: "lightgray",
              "&:hover": {
                borderColor: "#9c479c",
                bgcolor: "#e292e22e",
              },
            }}
          >
            Freelance
          </RoundButton1>
          <RoundButton1
            variant="outlined"
            sx={{
              margin: "5px",
              color: "#24a9ad",
              borderColor: "lightgray",
              "&:hover": {
                borderColor: "#24a9ad",
                bgcolor: "#8ee2e436",
              },
            }}
          >
            Full-Time
          </RoundButton1>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        sx={{ boxShadow: "none" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <InterestsOutlinedIcon fontSize="small" />
            &nbsp; Creative Fields
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ maxHeight: "400px", overflowY: "scroll" }}>
          {creativeFields?.map((item, index) => {
            return (
              <Typography>
                {" "}
                <Checkbox />
                {item}
              </Typography>
            );
          })}
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        sx={{ boxShadow: "none" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <PinDropOutlinedIcon fontSize="small" />
            &nbsp; Location
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ maxHeight: "400px", overflowY: "scroll" }}>
          {creativeFields?.map((item, index) => {
            return (
              <Typography>
                {" "}
                <Checkbox />
                {item}
              </Typography>
            );
          })}
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        sx={{ boxShadow: "none" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <HandymanOutlinedIcon fontSize="small" />
            &nbsp;Tools
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ maxHeight: "400px", overflowY: "scroll" }}>
          {creativeFields?.map((item, index) => {
            return (
              <Typography>
                {" "}
                <Checkbox />
                {item}
              </Typography>
            );
          })}
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
        sx={{ boxShadow: "none" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <LocationCityOutlinedIcon fontSize="small" />
            &nbsp;Schools
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ maxHeight: "400px", overflowY: "scroll" }}>
          {creativeFields?.map((item, index) => {
            return (
              <Typography>
                {" "}
                <Checkbox />
                {item}
              </Typography>
            );
          })}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
