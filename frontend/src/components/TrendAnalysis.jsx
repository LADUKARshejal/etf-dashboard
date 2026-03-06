function TrendAnalysis({ prices }) {

    if (!prices || prices.length === 0) return null;

    const first = prices[0];
    const last = prices[prices.length - 1];

    let trend = "";
    let color = "";

    if (last > first) {
        trend = "Bullish 📈";
        color = "#2ecc71";
    }
    else if (last < first) {
        trend = "Bearish 📉";
        color = "#e74c3c";
    }
    else {
        trend = "Sideways ➖";
        color = "#f39c12";
    }

    return (
        <div style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            width: "250px",
            textAlign: "center"
        }}>
            <h3>Market Trend</h3>

            <h2 style={{ color }}>{trend}</h2>

        </div>
    );
}

export default TrendAnalysis;