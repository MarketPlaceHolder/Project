import { createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useCart from "./common/hooks/useCart";

import DetailsPage from "./DetailsPage";

export const CartContext = createContext();

function App() {
  const { cart, addToCart } = useCart();
  return (
    <BrowserRouter>
      <CartContext.Provider value={{ cart, addToCart }}>
        <Routes>
          <Route path="*" element={<div>Not found</div>} />
          <Route path="/products/:productId" element={<DetailsPage />} />
        </Routes>
      </CartContext.Provider>
    </BrowserRouter>
  );
}

export default App;
