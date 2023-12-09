import React, { useEffect, useState } from 'react'
import Img from "../../assets/banner-img.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import './SingleProduct.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
const SingleProduct = () => {
  const {id}=useParams();
  const [name , setname ] = useState();

  const [image, setimage] = useState();
  const [description, setdescription] = useState();
   const [price, setprice] = useState();
     const [categories, setcategories] = useState();


  useEffect(() => {
  axios.get(
    "http://localhost:5000/api/products/products/"+id
  ).then((data)=>{
  setimage(data.data.image);
setname(data.data.name);
setprice(data.data.price);
setdescription(data.data.description);
setcategories(data.data.categories);



  });
  
    return () => {
      
    }
  }, [])
  
  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img src={image} alt="" />
          </div>
          <div className="right">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
            <span className="desc">{description}</span>
            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span className="quantity-btn">-</span>
                <span className="quantity-btn big">5</span>
                <span className="quantity-btn">+</span>
              </div>

              <button className="add-to-cart-button">
                <ShoppingCartIcon fontSize="20px" />
                Add To Cart
              </button>
            </div>
            <span className="divider" />
            <div className="info-item">
              <span className="text-hold">
                Category:
                {categories && categories.map((e) => <span>{e}</span>)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct
