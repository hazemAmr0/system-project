import React from 'react'
import ProductItem from "./product/ProductItem";
import './Products.css';
const ProductsItem = ({innerPage}) => {
  return (
    <div className="products-container">
      {!innerPage && <div className="sec-heading">hsection heading</div>}
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
