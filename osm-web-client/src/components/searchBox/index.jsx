import React from "react";
import "./searchBox.css";

function SearchBox({ textSetter, placeholder = "Search..." }) {
  return (
    <input
      type="text"
      className="search-box"
      placeholder={placeholder}
      spellCheck={true}
      autoFocus
      onChange={(e) => textSetter(e.target.value)}
    />
  );
}

export default SearchBox;
