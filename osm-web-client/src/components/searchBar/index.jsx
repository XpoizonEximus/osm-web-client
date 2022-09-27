import React from "react";
import "./searchBar.css";

function SearchBar({ placeholder = "Search..." }) {
  return (
    <form role="search" className="search">
      <label for="search">Search for stuff</label>
      <input
        type="search"
        placeholder={placeholder}
        spellCheck="true"
        aria-label="On this page"
        autofocus
        required
      />
      <button type="submit">Go</button>
    </form>
  );
}

export default SearchBar;
