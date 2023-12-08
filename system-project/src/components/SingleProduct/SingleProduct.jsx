import React from 'react'
import BannerImg from "../../assets/banner-img.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import './SingleProduct.css'
const SingleProduct = () => {
  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img src={BannerImg} alt="ss" />
          </div>
          <div className="right">
            <span className="name">product name</span>
            <span className="price">price</span>
            <span className="desc">description</span>
            <div className="cart-buttons">
              <div className="quantity-buttons">
               
                <span>-</span>
                <span>5</span>
                <span>+</span>
              </div>

              <button className="add-to-cart-button">
                <ShoppingCartIcon fontSize="20px" />
                Add To Cart
              </button>
            </div>
            <span className="divider" />
            <div className="info-item">
              <span className='text-hold'>
                Category:
                <span>Headphones</span>
              </span>
              <span className='text-hold'>
share:
<span className='social-icons'>


  
</span>

              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct
