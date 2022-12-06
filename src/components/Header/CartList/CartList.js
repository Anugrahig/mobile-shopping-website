import React from "react";

import { useDispatch, useSelector } from "react-redux";
import "./CartList.scss";
import { reset, deleteItem, increment, decrement } from "../../../redux/cart";

const CartList = () => {
  const { cartList } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const cartItems = cartList.map((item) => {
    return (
      <ul className="cartlist-container" key={item.id}>
        <div className="title">
          <h4>{item.title}</h4>
          <img src={item.image} alt={item.image} />
        </div>
        <div className="btn-control">
          <button className="btn" onClick={() => dispatch(decrement(item.id))}>
            -
          </button>
          <h6>{item.count}</h6>
          <button className="btn" onClick={() => dispatch(increment(item.id))}>
            +
          </button>
          <button className="btn" onClick={() => dispatch(deleteItem(item.id))}>
            Delete
          </button>
        </div>
      </ul>
    );
  });
  return (
    <div className="cart">
      {cartItems.length !== 0 ? (
        <div className="heading">
          <h1>Cart Items</h1>
          <li className="cart-items">{cartItems}</li>
          <button className="btn" onClick={() => dispatch(reset())}>
            Reset Cart
          </button>
        </div>
      ) : (
        <h5 className="heading">Your cart is empty </h5>
      )}
    </div>
  );
};

export default CartList;
