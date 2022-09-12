import React from "react";
import { MdSearch } from "react-icons/md";

function Search({ setQuery }) {
  return (
    <div className="searchBar">
      <MdSearch className="search-icon" />
      <input
        className="input"
        placeholder="Enter a movie"
        onChange={(event) => setQuery(event.target.value)}
      />
    </div>
  );
}

export default Search;
