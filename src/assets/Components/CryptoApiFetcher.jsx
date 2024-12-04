const CryptoApiFetcher = async () => {
  const url = "https://api.coingecko.com/api/v3/coins/markets";
  const params = {
    vs_currency: "usd",
    order: "market_cap_desc",
    per_page: 10,
    page: 1,
    sparkline: false,
  };

  try {
    // Make the API request using fetch with query parameters
    const response = await fetch(url + "?" + new URLSearchParams(params));
    
    // Check if the response is successful
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    
    // Parse the response as JSON
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return []; // Return an empty array in case of an error
  }
};

export default CryptoApiFetcher;
