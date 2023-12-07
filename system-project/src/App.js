// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";
import LoginComponent from "./components/LoginComponent";
import RegisterComponent from "./components/RegisterComponent";
import HomeComponent from "./components/HomeComponent"; // Import Home component
import SearchComponent from "./components/SearchComponent";
import CartComponent from "./components/CartComponent";
import ProfileComponent from "./components/ProfileComponent";

function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/register" element={<RegisterComponent />} />
          <Route path="/search" element={<SearchComponent />} />
          <Route path="/cart" element={<CartComponent />} />
          <Route path="/profile" element={<ProfileComponent />} />
          <Route path="/" element={<HomeComponent />} /> {/* Home route */}
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
