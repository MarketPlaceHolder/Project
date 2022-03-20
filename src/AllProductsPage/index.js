import { styled } from "@mui/system";
import React from "react";
import ProductsCard from "./ProductsCard";

const AllProductsPage = styled("div")({
  display: "flex",
  flexWrap: "wrap",
});

export default () => {
  const [products, setProducts] = React.useState([]);
  React.useEffect(async () => {
    const response = await fetch("/api/products.json");
    const data = await response.json();
    setProducts(data);
  }, []);
  const displayProduct = (currentProduct) => {
    return (
      <ProductsCard
        title={currentProduct.title}
        image={currentProduct.image}
        category={currentProduct.category}
        id={currentProduct.id}
      ></ProductsCard>
    );
  };
  return <AllProductsPage>{products.map(displayProduct)}</AllProductsPage>;
};
