import React from "react";
import "./product.css";
import Imgg from "../../../assets/banner-img.png";
const ProductItem = ({ name, price, }) => {
  return (
    <div className="product-card">
      <div className="thumbnail">
        <img src={Imgg} alt={name} />
      </div>
      <div className="prod-details">
        <span className="name">{name}</span>
        <span className="price">{`$${price}`}</span>
      </div>
    </div>
  );
};

export default ProductItem;
