import React from "react";
import { styled } from "@mui/system";
import StoreIcon from "@mui/icons-material/Store";
import Navigation from "./Navigation.js";
import Cart from "../Cart";

const Header = styled("header")({
  display: "flex",
  alignItems: "center",
  padding: "20px",
  justifyContent: "space-between",
  background: "linear-gradient(45deg, rgb(25, 118, 210), rgb(25, 118, 170))",
  color: "white",
  boxShadow: "0 2px 2px rgba(0, 0, 0, 0.2)",

  "& .flex": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "& .title": {
      display: "none",
    },
  },
  "@media(min-width:500px)": {
    "& .flex": {
      "& .title": {
        display: "block",
      },
    },
  },
});

export default () => (
  <Header>
    <div className="flex">
      <StoreIcon></StoreIcon>
      <h1 className="title">MarketPlaceHolder</h1>
    </div>
    <div className="flex">
      <Cart />
      <Navigation></Navigation>
    </div>
  </Header>
);
