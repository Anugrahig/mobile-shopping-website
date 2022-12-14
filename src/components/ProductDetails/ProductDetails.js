import React from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.scss";
import products from "../../api/products.json";
import CartButtons from "../ProductList/CartButtons";
import { numberWithCommas } from "../numberWithCommas";
const ProductDetails = () => {
  const { title } = useParams();
  console.log(title);

  return (
    <div>
      {products
        .filter((product) => product.title === title)
        .map((product) => {
          return (
            <div
              key={product.id}
              className="grid grid-2-colmns container pad-4 section-padding "
            >
              <div className="left-section">
                <img
                  src={product.image}
                  alt={product.title}
                  className="mb-sm"
                />
                <div className="btn-special-padding">
                  <CartButtons product={product} />
                </div>
              </div>
              <div className="right-section">
                <h3 className="heading-quaternary">{product.title}</h3>
                <div className="price-details-deatailed heading-price ">
                  <h4>₹ {numberWithCommas(product?.dis_price)}</h4>
                  <h4 className="original_price">
                    ₹ {numberWithCommas(product?.org_price)}
                  </h4>
                </div>
                <h3 className="heading-senary">Key features</h3>
                {
                  <ul className="mb-sm">
                    {product.highlight
                      .filter((_, id) => id <= product.highlight.length)
                      .map((item, id) => {
                        return (
                          <li key={id} className="subheading">
                            {item}
                          </li>
                        );
                      })}
                  </ul>
                }
                <h3 className="heading-senary">Description</h3>
                <div className="description">{product?.description}</div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ProductDetails;
