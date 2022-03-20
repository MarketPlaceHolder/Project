import { display, styled } from "@mui/system";
import React from "react";

const AllProductsPage = styled("div")({});

export default () => {
  const [products, setProducts] = React.useState([]);
  React.useEffect(async () => {
    const response = await fetch("/api/products.json");
    const data = await response.json();
    setProducts(data);
  }, []);
  const displayProduct = (currentProduct) => {
    return currentProduct.title;
  };
  return <AllProductsPage>{products.map(displayProduct)}</AllProductsPage>;
};
