import React, { Fragment } from "react";

import { useDispatch, useSelector } from "react-redux";
import { deleteItem, increment, decrement } from "../../../redux/cart";
import { numberWithCommas } from "../../numberWithCommas";
import DeleteIcon from "@mui/icons-material/Delete";
import "./CartList.scss";
import { useNavigate } from "react-router-dom";

const CartList = () => {
  const { cartList } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // console.log("Cart", cartList);
  const total = cartList.reduce(
    (total, cartItem) => total + cartItem.count * cartItem.dis_price,
    0
  );

  const cartItems = cartList.map((item) => {
    return (
      <ul className="cartlist-container" key={item.id}>
        <div className="cartlist-details">
          <Fragment>
            <div className="cartlist-image-container">
              <img
                src={item.image}
                alt={item.image}
                className="click-pointer"
                onClick={() => navigate(`/products/${item.title}`)}
              />
            </div>
          </Fragment>
          <div className="product-name-price btn-control-item-count">
            <h4 className="cart-item-count">
              {item.title.substring(0, item?.title.indexOf("|"))}
            </h4>
            <h4 className="cart-item-count">
              ₹ {numberWithCommas(item.dis_price)}
            </h4>
          </div>
          <div className="btn-control">
            <button
              className="btn cart-counter-button"
              onClick={() => dispatch(decrement(item.id))}
            >
              -
            </button>
            <h6 className="cart-item-count btn-control-item-count">
              {item.count}
            </h6>
            <button
              className="btn cart-counter-button"
              onClick={() => dispatch(increment(item.id))}
            >
              +
            </button>
            <button
              className="btn "
              onClick={() => dispatch(deleteItem(item.id))}
            >
              <DeleteIcon />
            </button>
          </div>
          <h4 className="total-price cart-item-count btn-control-item-count ">
            ₹ {numberWithCommas(item.dis_price * item.count)}
          </h4>
        </div>
      </ul>
    );
  });
  return (
    <div className="  container pad-4 padd-4 section-padding height-container ">
      {cartItems.length !== 0 ? (
        <span>
          <div className="heading">
            <li className="cart-items">{cartItems}</li>
          </div>
          <h3 className=" cart-total cart-total-price cart-price-total-last ">
            Total : ₹ {numberWithCommas(total)}
          </h3>
        </span>
      ) : (
        <h5 className=" heading-tertiary no-item ">Your cart is empty </h5>
      )}
    </div>
  );
};

export default CartList;
