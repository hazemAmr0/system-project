import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import "./Search.css";
import Img from "../../../assets/banner-img.png";

const Search = ({ setShowSearch }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async () => {
    try {
      if (searchQuery.trim() !== "") {
        const response = await axios.get(
          `http://localhost:5000/api/products/Search?q=${searchQuery}`
        );
        setSearchResults(response.data);
      } else {
        // Clear search results if the search query is empty
        setSearchResults([]);
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
    handleSearch(); // Trigger search on every keystroke
  };

  return (
    <div className="search-modal">
      <div className="form-field">
        <input
          type="text"
          autoFocus
          placeholder="Search for Products"
          value={searchQuery}
          onChange={handleChange}
        />
        <CloseIcon onClick={() => setShowSearch(false)} className="close-btn" />
      </div>
      <div className="search-result-content">
        <div className="search-results">
          {searchResults.map((result) => (
            // Use Link to navigate to the single product page
            <Link to={`/SingleProduct/:id/${result._id}`} key={result._id}>
              <div className="search-result-item">
                <div className="image-container">
                  <img className="product-image" src={Img} alt="qq" />
                </div>
                <div className="prod-details">
                  <span className="name">{result.name}</span>
                  <span className="desc">{result.description}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
