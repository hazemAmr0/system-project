import React from "react";
import "./Cart.css";
import CloseIcon from "@mui/icons-material/Close";
import CartItem from "./CartItem/CartItem";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
const Cart = ({ setshowCart }) => {
  return (
    <div className="cart-panel">
      <div className="opac-layer"></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">shopping Cart</span>
          <span className="close-btn" onClick={() => setshowCart(false)}>
            <CloseIcon />
            <span className="text">close</span>
          </span>
        </div>
        {/*<div className='empty-cart'>
<ProductionQuantityLimitsIcon/>
<span>no product in the cart.</span>
<button className='return-cta'> return to shop</button>

</div>*/}
        <>
          <CartItem />
          <div className="cart-footer">
            <div className="subtotal">
              <span className="text">Total</span>
              <span className="text total">$14</span>
            </div>
            <div className="button">
              <button className="checkout-cat">checkout</button>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Cart;
