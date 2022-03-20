import { createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useCart from "./common/hooks/useCart";
import Header from "./common/components/Header";
import Navigation from "./common/components/Navigation";

import DetailsPage from "./DetailsPage";

export const CartContext = createContext();

function App() {
  return (
    <BrowserRouter>
      <CartContext.Provider value={useCart()}>
        <Header></Header>
        <Navigation></Navigation>
        <Routes>
          <Route path="*" element={<div>Not found</div>} />
          <Route path="/products/:productId" element={<DetailsPage />} />
        </Routes>
      </CartContext.Provider>
    </BrowserRouter>
  );
}

export default App;
