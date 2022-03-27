import { styled } from "@mui/system";
import React from "react";
import ProductsCard from "./ProductsCard";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";

const AllProductsPage = styled("div")({
  display: "flex",
  alignItems: "center",
  marginBottom: "50px",
  marginLeft: "20px",
  marginRight: "20px",
  flexDirection: "column",
  "@media(min-width:500px)": {
    "& .grid": {
      gridTemplateColumns: "1fr 1fr",
    },
  },
  "@media(min-width:720px)": {
    "& .grid": {
      gridTemplateColumns: "1fr 1fr 1fr",
    },
  },
  "@media(min-width:950px)": {
    "& .grid": {
      gridTemplateColumns: "1fr 1fr 1fr 1fr",
    },
  },
  "& .grid": {
    display: "grid",
    gridGap: "30px",
  },
  "& .searchcombo": {
    display: "flex",
    marginBottom: "30px",
  },
});

export default () => {
  const [input, setInput] = React.useState("");
  const [products, setProducts] = React.useState([]);
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  React.useEffect(async () => {
    const response = await fetch("/api/products.json");
    const data = await response.json();
    setProducts(data);
  }, []);

  const filterCategory = (currentProduct) => {
    if (selectedCategory === "all") {
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
      <div className="searchcombo">
        <CategoryFilter
          products={products}
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
        ></CategoryFilter>
        <SearchBar input={input} setInput={setInput}></SearchBar>
      </div>
      <div className="grid">
        {products
          .filter(filterCategory)
          .filter(filterProduct)
          .map(displayProduct)}
      </div>
    </AllProductsPage>
  );
};
