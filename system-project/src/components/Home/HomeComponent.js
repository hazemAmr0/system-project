import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Home.css";
import "./Category/Category.css";

import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import ProductsItem from "../Products/ProductsItem";

const HomeComponent = () => {
  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Link to="/Category">
            {" "}
            {/* Use Link to wrap the Category component */}
            <Category />
          </Link>
          <ProductsItem />
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
