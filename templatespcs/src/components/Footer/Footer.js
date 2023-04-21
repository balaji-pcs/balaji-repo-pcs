import {
  AppBar,
  Box,
  Chip,
  Divider,
  FormControl,
  InputLabel,
  NativeSelect,
  Typography,
} from "@mui/material";
import React from "react";
import adobePng from "../Images/adobe.png";
import { RoundButton2 } from "../AppBar/AppNavigation";

export default function Footer() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        height: "35px",
      }}
    >
      <AppBar
        position="static"
        sx={{
          height: "35px",
          bgcolor: "white",
          color: "#000",
          padding: "0px 10px ",

          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className="footer-Div">
          <FormControl sx={{ width: "150px" }}>
            <NativeSelect
              defaultValue={10}
              inputProps={{
                name: "age",
                id: "uncontrolled-native",
              }}
            >
              <option value={10}>More Behance</option>
              <option value={20}>data1</option>
              <option value={30}>data2</option>
            </NativeSelect>
          </FormControl>
          <Divider
            orientation="vertical"
            variant="middle"
            light={true}
            sx={{
              height: "20px",
              borderColor: "#000",
              marginLeft: "10px",
              marginRight: "10px",
            }}
          />{" "}
          <FormControl sx={{ width: "100px" }}>
            <NativeSelect
              defaultValue={10}
              inputProps={{
                name: "age",
                id: "uncontrolled-native",
              }}
            >
              <option value={10}>English</option>
              <option value={20}>Hindi</option>
              <option value={30}>German</option>
            </NativeSelect>
          </FormControl>
          <Divider
            orientation="vertical"
            variant="middle"
            light={true}
            sx={{
              height: "20px",
              borderColor: "#000",
              marginLeft: "10px",
              marginRight: "10px",
            }}
          />{" "}
          <Typography variant="caption">
            TOU Privacy Community Help Cookie preferences Do not sell or share
            my personal information
          </Typography>
        </div>
        <RoundButton2 size="medium">
          {" "}
          <img src={adobePng} width="20px" height="20px" />
          &nbsp; Adobe
        </RoundButton2>
      </AppBar>
    </Box>
  );
}
