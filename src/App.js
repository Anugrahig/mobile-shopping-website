import { Fragment } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPage from "./Pages/CartPage";
import PageNotFound from "./components/PageNotFound/PageNotFound";

import HomePage from "./Pages/HomePage";
import ProductDetailsPage from "./Pages/ProductDetailsPage";
import "./queries.scss";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <HomePage />
              </div>
            }
          />
          <Route path="/cart" element={<CartPage />} />

          <Route path="/products/:title" element={<ProductDetailsPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
