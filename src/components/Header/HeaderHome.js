import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Header.scss";
import { Link } from "react-router-dom";
import { filterAndSearch } from "../../redux/cart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const HeaderHome = () => {
  const { cartList } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [fix, setFix] = useState(false);
  const StickyNavbar = () => {
    if (window.scrollY >= 700) {
      setFix(true);
    } else {
      setFix(false);
    }
  };
  window.addEventListener("scroll", StickyNavbar);

  return (
    <header className={fix ? "header fixed" : "header"}>
      <div className="header-home">
        <Link to="/">
          <h3 className="heading-text">Smartprice</h3>
        </Link>
        <div className="search-bar">
          <input
            type="search"
            // value={term}
            placeholder="Search Phones "
            onChange={(e) => dispatch(filterAndSearch(e.target.value))}
          />
          <button className="btn-search">
            <i className="fa fa-search "></i>
          </button>
        </div>
        <Link to="/cart" className="right-section">
          <div className="cart-count-header">{cartList?.length}</div>

          <ShoppingCartIcon className="cart-icon" />
        </Link>
      </div>
    </header>
  );
};

export default HeaderHome;
