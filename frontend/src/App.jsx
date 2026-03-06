import React, { useEffect, useState } from "react";
import axios from "axios";

import ETFChart from "./components/ETFChart";
import TrendAnalysis from "./components/TrendAnalysis";
import DescriptionPanel from "./components/DescriptionPanel";

function App() {

  const [prices, setPrices] = useState([]);

  const symbol = "NIFTYBEES.NS";

  useEffect(() => {

    axios.get(`https://etf-dashboard-1-thm0.onrender.com/api/etf/${symbol}`)
      .then(res => {
        const cleanPrices = res.data.prices.filter(p => p !== null);
        setPrices(cleanPrices);
      })
      .catch(err => {
        console.log("API error:", err);
      });

  }, []);

  if (prices.length === 0) {
    return <h2 style={{textAlign:"center"}}>Loading ETF Data...</h2>;
  }

  return (

    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",   // centers whole dashboard
        textAlign: "center"
      }}
    >

      <h1>ETF Market Dashboard</h1>

      <ETFChart prices={prices} />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          marginTop: "30px"
        }}
      >
        <TrendAnalysis prices={prices} />
        <DescriptionPanel prices={prices} />
      </div>

    </div>

  );
}

export default App;