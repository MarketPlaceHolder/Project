import { createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./common/Cart";
import useCart from "./common/hooks/useCart";

import DetailsPage from "./DetailsPage";

export const CartContext = createContext();

function App() {
  return (
    <BrowserRouter>
      <CartContext.Provider value={useCart()}>
        <Cart />
        <Routes>
          <Route path="*" element={<div>Not found</div>} />
          <Route path="/products/:productId" element={<DetailsPage />} />
        </Routes>
      </CartContext.Provider>
    </BrowserRouter>
  );
}

export default App;
