import { createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useCart from "./common/hooks/useCart";
import Header from "./common/components/Header";
import AllProductsPage from "./AllProductsPage";
import Breadcrumb from "./common/components/Breadcrumb";

import DetailsPage from "./DetailsPage";
import { Box } from "@mui/material";
import HomePage from "./HomePage";

export const CartContext = createContext();

function App() {
  return (
    <BrowserRouter>
      <CartContext.Provider value={useCart()}>
        <Header></Header>
        <Breadcrumb></Breadcrumb>
        <Routes>
          <Route path="*" element={<HomePage />} />
          <Route path="/products" element={<AllProductsPage />}></Route>
          <Route path="/products/:productId" element={<DetailsPage />} />
        </Routes>
      </CartContext.Provider>
      <Box
        sx={{
          backgroundColor: "rgb(25, 118, 210)",
          color: "#fff",
          padding: 5,
          marginTop: 5,
        }}
        component={"footer"}
      >
        I am a footer...
      </Box>
    </BrowserRouter>
  );
}

export default App;
