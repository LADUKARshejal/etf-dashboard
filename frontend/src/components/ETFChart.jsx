import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

function ETFChart({ prices }) {

  if (!prices || prices.length === 0) {
    return <p>Loading chart...</p>;
  }

  const data = {
    labels: prices.map((_, i) => i),
    datasets: [
      {
        label: "ETF Price",
        data: prices,
        borderColor: "blue",
        tension: 0.3
      }
    ]
  };

  return (
    <div style={{width:"700px"}}>
      <Line data={data} />
    </div>
  );
}

export default ETFChart;