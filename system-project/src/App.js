// App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./components/LoginRegister/Login/Login";
import Register from "./components/LoginRegister/SignUp/Register";
import HomeComponent from "./components/Home/HomeComponent";
import Category from "./components/Category/Category"; // Import Category component
import Header from "./components/Hreader/Header"
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
import ProductsItem from './components/Products/ProductsItem'
import SingleProduct from "./components/SingleProduct/SingleProduct";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ProductsItem" element={<ProductsItem />} />
        <Route path="/SingleProduct/:id" element={<SingleProduct />} />
        <Route path="/category" element={<Category />} />{" "}
        {/* Add the category route */}
        <Route path="/" element={<HomeComponent />} />
      </Routes>
      <Newsletter />
      <Footer />
    </BrowserRouter>
  );
}

export default App;


