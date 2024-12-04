import React, { useState, useEffect } from "react";
import "../Styles/App.css";
import CryptoDataDisplay from "./CryptoDataDisplay.jsx";
import CryptoFilter from "./CryptoFilter.jsx";
import CryptoApiFetcher from "./CryptoApiFetcher";

function App() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  // Handle search
  const handleSearch = (term) => {
    setSearchTerm(term);
    if (term === "") {
      setFilteredData(data);
    } else {
      const filtered = data.filter((crypto) =>
        crypto.name.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  // Handle sorting
  const handleSort = (key) => {
    const sortedData = [...filteredData].sort((a, b) =>
      key === "market_cap"
        ? b.market_cap - a.market_cap
        : b.price_change_percentage_24h - a.price_change_percentage_24h
    );
    setFilteredData(sortedData);
  };

  useEffect(() => {
    CryptoApiFetcher()
      .then((apiData) => {
        setData(apiData);
        setFilteredData(apiData);
      })
      .catch((error) => console.error("Failed to fetch data:", error));
  }, []);

  return (
    <div className="app">
      <p className="heading" id="heading">Crypto Dashboard</p>
      <CryptoFilter
        searchTerm={searchTerm}
        handleSearch={(e) => handleSearch(e.target.value)}
        handleSort={handleSort}
      />
      <CryptoDataDisplay data={filteredData} />
    </div>
  );
}

export default App;
