import React from "react";
import "./searchBar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

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
      <button type="submit">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </form>
  );
}

export default SearchBar;
