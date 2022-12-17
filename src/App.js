import { Fragment } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPage from "./Pages/CartPage";

import HomePage from "./Pages/HomePage";
import ProductDetailsPage from "./Pages/ProductDetailsPage";
import "./queries.scss";
import PageNotFoundPage from "./Pages/PageNotFoundPage";
import Footer from "./components/Footer/Footer";

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
          <Route path="*" element={<PageNotFoundPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
