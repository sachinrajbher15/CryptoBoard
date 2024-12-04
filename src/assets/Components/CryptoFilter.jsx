import React from "react";
import "../Styles/App.css";

function CryptoFilter({ searchTerm, handleSearch, handleSort }) {
  return (
    <div className="filter-container" id="filter-container">
      <input
        type="text"
        placeholder="Search by Name or Symbol"
        value={searchTerm}
        onChange={handleSearch}
        id="search-input"
      />
      <button onClick={() => handleSort("market_cap")} id="sort-market-cap">
        Sort by Market Cap
      </button>
      <button onClick={() => handleSort("percentage_change")} id="sort-percentage-change">
        Sort by Percentage Change
      </button>
    </div>
  );
}

export default CryptoFilter;
