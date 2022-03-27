import React, { useState, useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, styled } from "@mui/material";
import { Link } from "react-router-dom";

const CustomTitle = styled("h1")({
  textAlign: "center",
});

const CustomTitle2 = styled("h2")({
  textAlign: "center",
});

const CustomContainer = styled("div")({
  width: "30%",
  margin: "auto",
});

const CustomBox = styled("div")({
  width: "100%",
  height: "auto",
});

const CustomBoxContent = styled("div")({
  width: "100%",
  height: "auto",
  margin: "35%",

  "& img": {
    width: "30%",
    height: "auto",
    margin: "auto",
  },
});

export default function AppCarousel(props) {
  const [prod1, setProd1] = useState([]);
  const [prod2, setProd2] = useState([]);
  const [prod3, setProd3] = useState([]);
  useEffect(() => {
    fakestore();
  }, []);

  const fakestore = async () => {
    const response1 = await fetch("https://fakestoreapi.com/products/1");
    const jsonData1 = await response1.json();
    setProd1(jsonData1);
    const response2 = await fetch("https://fakestoreapi.com/products/5");
    const jsonData2 = await response2.json();
    setProd2(jsonData2);
    const response3 = await fetch("https://fakestoreapi.com/products/8");
    const jsonData3 = await response3.json();
    setProd3(jsonData3);
  };

  return (
    <React.Fragment>
      <CustomTitle>Tendances:</CustomTitle>
      <CustomContainer>
        <Carousel>
          <Paper>
            <CustomBox>
              <CustomTitle2>{prod1.title}</CustomTitle2>
              <CustomBoxContent>
                <img src={prod1.image} alt="" />
              </CustomBoxContent>
              <Button className="CheckButton">
                <Link to={`products/${prod1.id}`}>Voir le produit</Link>
              </Button>
            </CustomBox>
          </Paper>
          <Paper>
            <CustomBox>
              <CustomTitle2>{prod2.title}</CustomTitle2>
              <CustomBoxContent>
                <img src={prod2.image} alt="" />
              </CustomBoxContent>
              <Button className="CheckButton">
                <Link to={`products/${prod2.id}`}>Voir le produit</Link>
              </Button>
            </CustomBox>
          </Paper>
          <Paper>
            <CustomBox>
              <CustomTitle2>{prod3.title}</CustomTitle2>
              <CustomBoxContent>
                <img src={prod3.image} alt="" />
              </CustomBoxContent>
              <Button className="CheckButton">
                <Link to={`products/${prod3.id}`}>Voir le produit</Link>
              </Button>
            </CustomBox>
          </Paper>
        </Carousel>
      </CustomContainer>
    </React.Fragment>
  );
}
