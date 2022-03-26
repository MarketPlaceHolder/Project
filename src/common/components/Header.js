import React from "react";
import { styled } from "@mui/system";
import StoreIcon from "@mui/icons-material/Store";
import Navigation from "./Navigation.js";
import Cart from "../Cart";

const Header = styled("header")({
  display: "flex",
  alignItems: "center",
  padding: "20px",
  backgroundColor: "rgb(25, 118, 210)",
  color: "white",
  boxShadow: "0 2px 2px rgba(0, 0, 0, 0.2)",
});

export default () => (
  <Header>
    <StoreIcon></StoreIcon>
    <h1>MarketPlaceHolder</h1>
    <Cart />
    <Navigation></Navigation>
  </Header>
);
