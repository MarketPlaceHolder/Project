import { styled } from "@mui/system";
import React from "react";
import ProductsCard from "./ProductsCard";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";

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
  const [selectedCategory, setSelectedCategory] = React.useState("");
  React.useEffect(async () => {
    const response = await fetch("/api/products.json");
    const data = await response.json();
    setProducts(data);
  }, []);

  const filterCategory = (currentProduct) => {
    if (selectedCategory === "") {
      return true;
    }
    return currentProduct.category === selectedCategory;
  };

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
      <CategoryFilter
        products={products}
        setSelectedCategory={setSelectedCategory}
      ></CategoryFilter>
      <div className="grid">
        {products
          .filter(filterCategory)
          .filter(filterProduct)
          .map(displayProduct)}
      </div>
    </AllProductsPage>
  );
};
