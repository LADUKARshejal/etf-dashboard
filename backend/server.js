const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(cors());

const PORT = process.env.PORT || 5000;

/*
Test route
*/
app.get("/", (req, res) => {
    console.log("server working");
    res.json({ msg: "Server is running" });
});


/*
Fetch ETF data
*/
app.get("/api/etf/:symbol", async (req, res) => {

    const symbol = req.params.symbol;

    try {

        const url = `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?range=6mo&interval=1d`;

        const response = await axios.get(url, {
            headers: {
                "User-Agent": "Mozilla/5.0"
            }
        });

        const chart = response.data.chart;

        if (!chart.result) {
            return res.status(404).json({
                error: "No data found for symbol"
            });
        }

        const result = chart.result[0];

        const timestamps = result.timestamp || [];
        const prices = result.indicators.quote[0].close || [];
        console.log(prices);
        res.json({
            timestamps,
            prices
        });

    } catch (error) {

        console.log("ERROR:", error.message);

        res.status(500).json({
            error: "Unable to fetch ETF data"
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});