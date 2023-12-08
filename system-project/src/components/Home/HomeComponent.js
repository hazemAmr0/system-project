import React from 'react'
import './Home.css';
import "./Category/Category.css";

import Banner from './Banner/Banner';
import Category from './Category/Category';
import ProductsItem from '../Products/ProductsItem';



const HomeComponent = () => {
  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category />
          <ProductsItem />
        </div>
      </div>
    </div>
  );
}

export default HomeComponent

