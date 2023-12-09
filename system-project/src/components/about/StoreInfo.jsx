// StoreInfo.js
import React from "react";
import "./info.css";

const StoreInfo = ({ setshowCart }) => {
  return (
    <div className="store-info-container">
      <h2>Welcome to Mega Mind Store</h2>
      <p>
        Mega Mind Store is your one-stop destination for high-quality products.
        We offer a wide range of items to meet your needs.
      </p>
      <p>Contact us for more information: contact@megamindstore.com</p>
    </div>
  );
};

export default StoreInfo;
