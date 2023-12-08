import './Category.css'
import React from 'react'
import ProductsItem from '../Products/ProductsItem'
const Category = () => {
  return (
    <div className="category-main-content">
      <div className="layout">
        <div className="category-title">Category title</div>
        <ProductsItem innerPage={true} />
      </div>
    </div>
  );
}

export default Category
