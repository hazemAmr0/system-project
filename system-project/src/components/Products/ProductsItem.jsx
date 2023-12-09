import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ProductItem from "./product/ProductItem";
import "./Products.css";

const ProductsItem = ({ innerPage }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    axios
      .get("http://localhost:5000/api/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="products-container">
      {!innerPage && <div className="sec-heading">Section heading</div>}
      <div className="products">
        {/* Map through the products and display each ProductItem */}
        {products.map((product) => (
          <Link to={`/SingleProduct/${product._id}`} key={product._id}>
            <ProductItem name={product.name} price={product.price} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductsItem;
