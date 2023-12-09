import React, { useState, useEffect } from "react";
import axios from "axios";
import BannerImg from "../../../assets/banner-img.png";

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    axios
      .get("http://localhost:5000/api/category")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  return (
    <div className="shop-category">
      <div className="categories">
        {/* Map through the categories and display each category */}
        {categories.map((category, index) => (
          <div className="category" key={index}>
            <img src={category.image} alt={category.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
