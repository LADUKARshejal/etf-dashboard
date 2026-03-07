const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(cors());

const PORT = process.env.PORT || 5000;
    
/*
Fetch ETF data from Yahoo Finance
*/
app.get("/",(req,res)=>{

    console.log("skans");
    res.json({
            ji:"hi"
        });
})

app.get("/api/etf/:symbol", async (req, res) => {

    const symbol = req.params.symbol;

    try {

        const url = `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?range=6mo&interval=1d`;

        const response = await axios.get(url);

        const result = response.data.chart.result[0];

        const timestamps = result.timestamp;
        const prices = result.indicators.quote[0].close;

        res.json({
            timestamps,
            prices
        });

    } catch (error) {

        res.status(500).json({
            error: "Unable to fetch ETF data"
        });

    }

});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});