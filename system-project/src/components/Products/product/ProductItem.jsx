import React from 'react'
import './product.css';
import BannerImg from "../../../assets/banner-img.png";
const ProductItem = () => {
  return (
    <div className="product-card">
      <div className="thumbnail">
        <img src={BannerImg} alt="aa" />
      </div>
      <div className="prod-details">
        <span className="name"> product name</span>
        <span className="price"> $99</span>
      </div>
    </div>
  );
};

export default ProductItem
