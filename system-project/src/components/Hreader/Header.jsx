// Header.js
import { useEffect, useState } from "react";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Header.css";
import Cart from "../Cart/Cart";
import  Search  from './Search/Search'

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showCart, setShowCart] = useState(false);
   const [showSearch, setShowSearch] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <ul className="left">
            <li>Home</li>
            <li>About</li>
            <li>Categories</li>
          </ul>
          <div className="center">MegaMind</div>
          <div className="right">
            <SearchIcon onClick={() => setShowSearch(!showSearch)} />
            <FavoriteBorderIcon />
            <span className="cart-icon" onClick={() => setShowCart(!showCart)}>
              <ShoppingCartIcon />
              <span>5</span>
            </span>
          </div>
        </div>
      </header>
      {showCart && <Cart setshowCart={setShowCart} />}
      {showSearch && <Search setShowSearch={setShowSearch} />}
    </>
  );
};

export default Header;
