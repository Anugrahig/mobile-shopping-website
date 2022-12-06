import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cart";
import "./CartButtons.scss";

const BeforeCart = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="before-cart">
      <button
        className="add-cart-button heading-senary "
        onClick={() => dispatch(addToCart(product))}
      >
        Add to cart
      </button>
    </div>
  );
};

export default BeforeCart;
