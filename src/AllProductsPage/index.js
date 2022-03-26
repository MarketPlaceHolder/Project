import { styled } from "@mui/system";
import React from "react";
import ProductsCard from "./ProductsCard";

const AllProductsPage = styled("div")({
  display: "flex",
  justifyContent: "center",
  marginBottom: "50px",
  "& .grid": {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gridGap: "30px",
  },
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
        key={currentProduct.id}
        title={currentProduct.title}
        image={currentProduct.image}
        category={currentProduct.category}
        id={currentProduct.id}
      ></ProductsCard>
    );
  };
  return (
    <AllProductsPage>
      <div className="grid">{products.map(displayProduct)}</div>
    </AllProductsPage>
  );
};
