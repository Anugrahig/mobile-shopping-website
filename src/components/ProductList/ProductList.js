import React from "react";
import "./ProductList.scss";

import { useSelector } from "react-redux";
import CartButtons from "./CartButtons";
import { useNavigate } from "react-router-dom";
import { numberWithCommas } from "../numberWithCommas";

const ProductList = () => {
  const navigate = useNavigate();
  const { searching } = useSelector((state) => state.cart);
  const { searchData } = useSelector((state) => state.cart);

  return (
    <section className="container grid grid--4-cols pad-4 section-padding ">
      {console.log("Length ==", searching)}
      {searchData.length === 0 && (
        <h1 className="heading-tertiary no-item">No Phone found</h1>
      )}
      {searchData.map((product) => (
        <div className="product-container  " key={product?.id}>
          <div
            className="click-pointer"
            onClick={() => navigate(`/products/${product.title}`)}
          >
            <img src={product?.image} alt={product?.title} />
          </div>
          <span
            className="click-pointer"
            onClick={() => navigate(`/products/${product.title}`)}
          >
            <h3 className="heading-senary">
              {product?.title.substring(0, product?.title.indexOf("|"))}
            </h3>
            <div className="price-details heading-price ">
              <h4>₹ {numberWithCommas(product?.dis_price)}</h4>
              <h4 className="original_price">
                ₹ {numberWithCommas(product?.org_price)}
              </h4>
            </div>
          </span>
          <div className="mb-esm">
            <CartButtons product={product} />
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductList;
