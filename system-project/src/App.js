// App.js
import React from "react";
import { BrowserRouter , Route, Routes,  } from "react-router-dom";

import Login from "./components/LoginRegister/Login/Login";
import Register from "./components/LoginRegister/SignUp/Register";
import HomeComponent from "./components/Home/HomeComponent"; // Import Home component
import SingleProduct from "./components/SingleProduct/SingleProduct";



import Header from "./components/Hreader/Header";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <SingleProduct />
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<HomeComponent />} /> {/* Home route */}
      </Routes>
      <Newsletter />
      <Footer />
    </BrowserRouter>
  );
}

export default App;