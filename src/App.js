import { BrowserRouter, Routes, Route } from "react-router-dom";

import DetailsPage from "./DetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<div>Not found</div>} />
        <Route path="/products/:productId" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
