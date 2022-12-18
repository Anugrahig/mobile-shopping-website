import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Header.scss";
import { Link } from "react-router-dom";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = () => {
  const { cartList } = useSelector((state) => state.cart);
  const [fix, setFix] = useState(false);
  const StickyNavbar = () => {
    if (window.scrollY >= 500) {
      setFix(true);
    } else {
      setFix(false);
    }
  };
  window.addEventListener("scroll", StickyNavbar);

  return (
    <header>
      <div className={fix ? "header fixed" : "header"}>
        <Link to="/">
          <h3 className="heading-text">Smartprice</h3>
        </Link>

        <Link to="/cart" className="right-section">
          <div className="cart-count-header">{cartList?.length}</div>

          <ShoppingCartIcon className="cart-icon" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
