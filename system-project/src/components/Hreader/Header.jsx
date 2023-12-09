// Header.js
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Header.css";
import Cart from "../Cart/Cart";
import Search from "./Search/Search";
import Profile from './Profile/Profile'
import { Link } from "react-router-dom"; // Assuming you are using react-router-dom
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
   const [showProfile, setShowProfile] = useState(false);

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

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <ul className="left">
            <Link to="/login" className="login-link">
              Login
            </Link>
            <li>Home</li>
            <li>About</li>
            <li>Categories</li>
          </ul>
          <div className="center">MegaMind</div>
          <div className="right">
            <AccountCircleIcon onClick={() => setShowProfile(!showProfile)} />
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
      {showProfile && <Profile setShowProfile={setShowProfile} />}
    </>
  );
};

export default Header;
