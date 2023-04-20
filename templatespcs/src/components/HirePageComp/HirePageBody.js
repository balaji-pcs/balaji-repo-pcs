import React from "react";
import {
  Avatar,
  Box,
  ButtonGroup,
  Card,
  Chip,
  Divider,
  ImageList,
  ImageListItem,
} from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import ListIcon from "@mui/icons-material/List";
import GridViewIcon from "@mui/icons-material/GridView";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import employeesData from "../Data/employeesData.json";

export default function HirePageBody() {
  return (
    <div className="hirePage_div">
      <HirePageAppBar />
      <EmployeeDataCard data={employeesData} />
    </div>
  );
}

function HirePageAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          height: "8vh",
          bgcolor: "inherit",
          boxShadow: "0px 1px 0px 0px lightgray",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h6"
          sx={{ paddingLeft: "10px", color: "#000", fontWeight: "bolder" }}
        >
          10,000+ Results
        </Typography>
        <Toolbar>
          <ButtonGroup size="small" aria-label="small button group">
            <Button
              variant="outline"
              sx={{
                border: "1px solid lightgray",
                height: "40px",
                minWidth: "40px",
                color: "#000",
                borderRadius: "40px",
              }}
            >
              <GridViewIcon />
            </Button>
            <Button
              variant="outline"
              sx={{
                border: "1px solid lightgray",
                height: "40px",
                minWidth: "40px",
                color: "#000",
                borderRadius: "40px",
              }}
            >
              <ListIcon />
            </Button>
          </ButtonGroup>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Sort
            </InputLabel>
            <NativeSelect
              defaultValue={10}
              inputProps={{
                name: "sort",
                id: "uncontrolled-native",
              }}
            >
              <option value={10}>Recommended</option>
              <option value={20}>Followed</option>
              <option value={30}>Appreciated</option>
            </NativeSelect>
          </FormControl>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

function EmployeeDataCard({ data }) {
  return (
    <div className="cards_div">
      {data?.map((item, index) => {
        return (
          <Card
            sx={{
              margin: "10px",
              height: "290px",
              width: "375px",
              textAlign: "center",
            }}
          >
            <CardContent>
              <div className="cardThumbnail_div">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <Avatar
                alt={item.firstName}
                src={item.image}
                sx={{
                  width: 56,
                  height: 56,
                  bgcolor: "#fff",
                  left: "142px",
                  bottom: "31px",
                  outlineColor: "#fff",
                }}
              />
              <Typography variant="h6">{`${item.firstName} ${item.maidenName} ${item.lastName}`}</Typography>
              <Typography variant="caption">
                <LocationOnIcon fontSize="small" />
                {item.Location}
              </Typography>
              <Chip
                label={item.role}
                size="small"
                sx={{
                  bgcolor:
                    item.role === "Freelancer" ? "#e292e22e" : "#8ee2e436",
                  color: item.role === "Freelancer" ? "#9c479c" : "#24a9ad",
                }}
              />
              <div className="card_bottom_data">
                <div>
                  <Typography variant="h6">{item.Appreciations}</Typography>
                  <Typography variant="caption">Appreciations</Typography>
                </div>
                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  sx={{ marginLeft: "10px", marginRight: "10px" }}
                />{" "}
                <div>
                  <Typography variant="h6">{item.Followers}</Typography>
                  <Typography variant="caption">Followers</Typography>
                </div>
                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  sx={{ marginLeft: "10px", marginRight: "10px" }}
                />{" "}
                <div>
                  <Typography variant="h6">{item.ProjectsViews}</Typography>
                  <Typography variant="caption">Projects Views</Typography>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
