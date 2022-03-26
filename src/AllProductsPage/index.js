import { styled } from "@mui/system";
import React from "react";
import ProductsCard from "./ProductsCard";
import SearchBar from "./SearchBar";

const AllProductsPage = styled("div")({
  display: "flex",
  alignItems: "center",
  marginBottom: "50px",
  flexDirection: "column",
  "& .grid": {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gridGap: "30px",
  },
});

export default () => {
  const [input, setInput] = React.useState("");
  const [products, setProducts] = React.useState([]);
  React.useEffect(async () => {
    const response = await fetch("/api/products.json");
    const data = await response.json();
    setProducts(data);
  }, []);
  const filterProduct = (currentProduct) => {
    return currentProduct.title.toLowerCase().includes(input.toLowerCase());
  };
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
      <SearchBar input={input} setInput={setInput}></SearchBar>
      <div className="grid">
        {products.filter(filterProduct).map(displayProduct)}
      </div>
    </AllProductsPage>
  );
};
