import React from "react";
import { MdSearch } from "react-icons/md";

function Search({ setQuery }) {
  return (
    <div className={window.innerWidth < 500 ? "mobile-searchbar" : "searchBar"}>
      <MdSearch
        className={
          window.innerWidth < 500 ? "mobile-search-icon" : "search-icon"
        }
      />
      <input
        className={window.innerWidth < 500 ? "mobile-input" : "input"}
        placeholder="Enter a movie"
        onChange={(event) => setQuery(event.target.value)}
      />
    </div>
  );
}

export default Search;
