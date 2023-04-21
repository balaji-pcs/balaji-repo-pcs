import * as React from "react";
import Box from "@mui/material/Box";
import SideBar from "./SideBar";
import HirePageBody from "./HirePageBody";

export default function Body() {
  return (
    <Box
      sx={{
        width: "99.9vw",
        height: "90vh",
        display: "flex",
      }}
    >
      <SideBar />
      <HirePageBody />
    </Box>
  );
}
