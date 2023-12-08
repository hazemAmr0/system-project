import React from "react";
import BannerImg from "../../../assets/banner-img.png";

const Category = () => {
  return (
    <div className="shop-category">
      <div className="categories">
        <div className="category">
          <img src={BannerImg} alt="tt" />
        </div>
        <div className="category">
          <img src={BannerImg} alt="tyty" />
        </div>
        <div className="category">
          <img src={BannerImg} alt="tytytyt" />
        </div>
        <div className="category">
          <img src={BannerImg} alt="we4r53w5" />
        </div>
      </div>
    </div>
  );
};

export default Category;
