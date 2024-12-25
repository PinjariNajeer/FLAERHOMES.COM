
import React from 'react';
import './SearchBar.css';

function SearchBar({ onSearch }) {
  const handleSearch = (e) => {
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search by title, author, or genre"
      onChange={handleSearch}
      className="search-bar"
    />
  );
}

export default SearchBar;