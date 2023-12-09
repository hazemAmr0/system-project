// components/Footer.js

import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div>
        <p>&copy; 2023 Mega Mind. All Rights Reserved.</p>
        <p>Address: 123 Main Street, Cityville, Country</p>
        <p>Email: info@example.com</p>
      </div>
      <div>
        <a href="/privacy-policy">Privacy Policy</a> |{" "}
        <a href="/terms-of-service">Terms of Service</a>
      </div>
    </footer>
  );
};

export default Footer;
