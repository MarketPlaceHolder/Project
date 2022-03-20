import React from "react";
import { styled } from "@mui/system";
import StoreIcon from "@mui/icons-material/Store";

const Header = styled("header")({
  display: "flex",
  alignItems: "center",
  padding: "20px",
  backgroundColor: "rgb(25, 118, 210)",
  color: "white",
  boxShadow: "0 5px 10px black",
});

export default () => (
  <Header>
    <StoreIcon></StoreIcon> <h1>MarketPlaceHolder</h1>
  </Header>
);
