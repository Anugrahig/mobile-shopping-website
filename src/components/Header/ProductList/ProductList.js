import React from "react";
import "./ProductList.css";
import products from "../../api/products.json";

const ProductList = () => {
  return (
    <section className="container">
      {products.map((product) => (
        <div className="main-container" key={product.id}>
          <img src={product.image} alt={product.title} />
        </div>
      ))}
    </section>
  );
};

export default ProductList;
