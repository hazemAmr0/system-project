import React from 'react'
import ProductItem from "./product/ProductItem";
import './Products.css';
const ProductsItem = () => {
  return (
    <div className="products-container">
      <div className="sec-heading">section heading</div>
      <div className="products">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </div>
  );
};
 
export default ProductsItem
