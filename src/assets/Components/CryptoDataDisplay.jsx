import React from "react";
import "../Styles/App.css";

function CryptoDataDisplay({ data }) {
  return (
    <table className="crypto-table" id="crypto-table">
      <thead>
        <tr>
          <th>Logo</th>
          <th>Name</th>
          <th>Symbol</th>
          <th>Price (USD)</th>
          <th>Total Volume</th>
          <th>24h Change (%)</th>
          <th>Market Cap (USD)</th>
        </tr>
      </thead>
      <tbody>
        {data.map((cryptocurrency) => (
          <tr key={cryptocurrency.id}>
            <td>
              <img
                src={cryptocurrency.image}
                alt={`${cryptocurrency.name} logo`}
                width="30"
                height="30"
              />
            </td>
            <td>{cryptocurrency.name}</td>
            <td>{cryptocurrency.symbol.toUpperCase()}</td>
            <td>${cryptocurrency.current_price.toLocaleString()}</td>
            <td>${cryptocurrency.total_volume.toLocaleString()}</td>
            <td
              style={{
                color: cryptocurrency.price_change_percentage_24h.toFixed(2) < 0 ? "red" : "green",
              }}
            >
              {cryptocurrency.price_change_percentage_24h.toFixed(2)}%
            </td>
            <td>${cryptocurrency.market_cap.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CryptoDataDisplay;
