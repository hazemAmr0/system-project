import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./CartItem.css";
import Img from "../../../assets/banner-img.png";
const CartItem = () => {
  return (
    <div className="cart-products">
      <div className="cart-product">
       <div className="img-container">
        <img src={Img} alt="qq"/>
       </div>
        <div className="prod-details">
          <span className="name">product name</span>
          <CloseIcon className="close-btn" />
          <div className="quantity-buttons">
            <span>-</span>
            <span>5</span>
            <span>+</span>
          </div>
          <div className="text">
            <span>3</span>
            <span>*</span>
            <span className="highligh">4564</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
