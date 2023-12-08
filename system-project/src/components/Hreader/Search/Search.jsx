// Search.js
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./Search.css";

export const Search = ({ setShowSearch }) => {
  return (
    <div className="search-modal">
      <div className="form-field">
        <input type="text" autoFocus placeholder="Search for Products" />
        <CloseIcon onClick={() => setShowSearch(false)} className="close-btn" />
      </div>
    </div>
  );
};

export default Search;
