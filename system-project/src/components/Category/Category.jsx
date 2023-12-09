// Category.js
import "./Category.css";
import React from "react";
import ProductsItem from "../Products/ProductsItem";

const Category = () => {
  const categoryId = "65736c3b2020fad3e3255a57"; // Replace with the actual category ID

  return (
    <div className="category-main-content">
      <div className="layout">
        <div className="category-title">Category title</div>
        <ProductsItem innerPage={true} categoryId={categoryId} />
      </div>
    </div>
  );
};

export default Category;
