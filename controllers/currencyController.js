const axios = require("axios");

const Currency = require('../dataBase/Currency');
const Date = require('../constants/Date')

class currencyController {
    async getCurrencies(req, res) {
        try {
            const currencies = await Currency.find()
            return res.status(200).json(currencies)
        } catch (e) {
            console.error(e);
            return res.status(400).json("Error occurred while getting currencies")
        }
    }

    async getCurrencyTimeSeriesData(req, res) {
        try {
            let {startDate, endDate, currencySymbol, baseCurrency} = req.body;
            startDate = new Date(startDate.day, startDate.month, startDate.year)
            endDate = new Date(endDate.day, endDate.month, endDate.year)
            startDate = startDate.formDateUrl();
            endDate = endDate.formDateUrl();
            if(!startDate || !endDate) {
                return res.status(400).json("Invalid Date format")
            }
            const url = `https://api.exchangerate.host/timeseries?start_date=${startDate}&end_date=${endDate}&base=${baseCurrency}&symbols=${currencySymbol}`
            const {data} = await axios.get(url);
            if(!data)
                return res.status(400).json("Invalid data format")
            console.log(data);
            return res.status(200).json(data.rates)
        } catch (e) {
            console.log(e);
            return res.status(400).json("Error in getting time-series data");
        }
    }
}



module.exports = new currencyController();
